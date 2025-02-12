import type React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { useToast } from "../hooks/use-toast";
import { useNavigate } from "react-router-dom";
import type { Product } from "@/types";
import { Loader2 } from "lucide-react";
import { BASE_URL } from "@/config/baseurl";

interface PaginationInfo {
  total: number;
  page: number;
  totalPages: number;
  limit: number;
}

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [pagination, setPagination] = useState<PaginationInfo | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  const fetchProducts = async (page: number) => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/api/products?page=${page}`);
      setProducts(response.data.products);
      setPagination(response.data.pagination);
    } catch (error) {
      toast({ title: "Error", description: "Failed to fetch products.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (product: Product) => {
    if (!isAuthenticated) {
      toast({ title: "Authentication Required", description: "Please log in to add items.", variant: "destructive" });
      navigate("/auth");
      return;
    }
    setSelectedProduct(product);
    setQuantity(1);
    setIsModalOpen(true);
  };

  const confirmAddToCart = () => {
    if (selectedProduct) {
      addToCart({ _id: selectedProduct._id, name: selectedProduct.name, price: selectedProduct.price, quantity }).then(() => {
        setIsModalOpen(false);
        toast({ title: "Added to Cart", description: `${quantity} ${selectedProduct.name}(s) added.` });
      });
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-10">Shop Our Collection</h1>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="h-10 w-10 animate-spin text-indigo-500" />
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <Card key={product._id} className="shadow-md hover:shadow-lg transition p-4 rounded-xl">
              <CardHeader>
                <img src={product.image} alt={product.name} className="h-48 w-full object-cover rounded-md" />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-lg font-medium text-gray-900">{product.name}</CardTitle>
                <p className="text-gray-600 mt-2">${product.price.toFixed(2)}</p>
                <p className={`text-sm mt-2 ${product.stock > 0 ? "text-green-600" : "text-red-600"}`}>
                  {product.stock > 0 ? "In Stock" : "Out of Stock"}
                </p>
              </CardContent>
              <CardFooter>
                <Button onClick={() => handleAddToCart(product)} disabled={product.stock === 0} className="w-full">
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
      {pagination && (
        <div className="mt-10 flex justify-center space-x-4">
          <Button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
            Previous
          </Button>
          <span className="text-lg font-medium">Page {currentPage} of {pagination.totalPages}</span>
          <Button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, pagination.totalPages))} disabled={currentPage === pagination.totalPages}>
            Next
          </Button>
        </div>
      )}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add to Cart</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="mb-2">Product: {selectedProduct?.name}</p>
            <p className="mb-4">Price: ${selectedProduct?.price.toFixed(2)}</p>
            <div className="flex items-center space-x-3">
              <label htmlFor="quantity">Quantity:</label>
              <Input
                id="quantity"
                type="number"
                min="1"
                max={selectedProduct?.stock || 1}
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, Number.parseInt(e.target.value)))}
                className="w-20 text-center"
              />
            </div>
            <p className="mt-4 font-semibold">Total: ${((selectedProduct?.price || 0) * quantity).toFixed(2)}</p>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={confirmAddToCart}>Add to Cart</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductsPage;
