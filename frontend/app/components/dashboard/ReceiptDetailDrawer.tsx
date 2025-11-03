import { X, Trash2 } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useState } from "react";
import { Separator } from "../ui/separator";
import { toast } from "sonner";

interface Receipt {
  id: string;
  store: string;
  date: string;
  total: number;
  items: number;
}

interface ReceiptDetailDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  receipt: Receipt|null;
}

interface Item {
  id: string;
  name: string;
  price: number;
  quantity: number;
  category: string;
}

const categories = [
  "Fresh Produce",
  "Dairy",
  "Meat & Seafood",
  "Pantry",
  "Snacks",
  "Beverages",
  "Household",
  "Personal Care",
  "Other",
];

export function ReceiptDetailDrawer({ isOpen, onClose, receipt }: ReceiptDetailDrawerProps) {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);

  const getItems = () => {
    setLoading(true);
    setTimeout(() => {
      // Simulate fetch
      setItems([
        { id: "1", name: "Organic Bananas", price: 4.99, quantity: 1, category: "Fresh Produce" },
        { id: "2", name: "Milk 2L", price: 3.49, quantity: 2, category: "Dairy" },
        { id: "3", name: "Chicken Breast 500g", price: 12.99, quantity: 1, category: "Meat & Seafood" },
        { id: "4", name: "Bread Wholemeal", price: 3.20, quantity: 1, category: "Pantry" },
        { id: "5", name: "Tomatoes", price: 5.80, quantity: 1, category: "Fresh Produce" },
        { id: "6", name: "Cheese Block", price: 7.50, quantity: 1, category: "Dairy" },
        { id: "7", name: "Pasta 500g", price: 2.80, quantity: 2, category: "Pantry" },
        { id: "8", name: "Apples", price: 4.99, quantity: 1, category: "Fresh Produce" },
      ]);
      setLoading(false);
    }, 500);
  };

  const updateCategory = (itemId: string, newCategory: string) => {
    setLoading(true);
    setTimeout(() => {
      // Simulate fetch
      setItems(items.map((item: any) => 
        item.id === itemId ? { ...item, category: newCategory } : item
      ));
      setLoading(false);
    }, 500);
  };

  const deleteReceipt = () => {
    // Simulate delete
  };

  if (!receipt) return null;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Receipt Details</SheetTitle>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          {/* Store Info */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-gray-900">{receipt.store}</h3>
                <p className="text-gray-600">{new Date(receipt.date).toLocaleDateString()}</p>
              </div>
              <Badge variant="secondary">{items.length} items</Badge>
            </div>
          </div>

          <Separator />

          {/* Items List */}
          <div className="space-y-4">
            <h4 className="text-gray-900">Items</h4>
            {items.map((item: any) => (
              <div key={item.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="text-gray-900">{item.name}</div>
                    <div className="text-gray-500 mt-1">
                      Qty: {item.quantity} × NZD ${item.price.toFixed(2)}
                    </div>
                  </div>
                  <div className="text-gray-900">
                    NZD ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
                <Select
                  value={item.category}
                  onValueChange={(value) => updateCategory(item.id, value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            ))}
          </div>

          <Separator />

          {/* Total */}
          <div className="flex justify-between items-center">
            <span className="text-gray-900">Total</span>
            <span className="text-gray-900">NZD ${receipt.total.toFixed(2)}</span>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <Button variant="outline" className="flex-1" onClick={onClose}>
              Close
            </Button>
            <Button variant="destructive" className="flex-1" onClick={deleteReceipt}>
              <Trash2 className="w-4 h-4 mr-2" />
              Delete
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
