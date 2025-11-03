import { Receipt, ShoppingCart, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export const SummaryCards = ({summaryData}: {
  summaryData: {
    monthSpend: number;
    totalReceipts: number;
    topItem: { name: string; frequency: number; };
  }
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-gray-600">This Month's Spend</CardTitle>
          <Receipt className="h-5 w-5 text-blue-600" />
        </CardHeader>
        <CardContent>
          <div className="text-gray-900">NZD ${summaryData.monthSpend.toFixed(2)}</div>
          <p className="text-gray-500 mt-1">
            <span className="text-green-600">↓ 12%</span> from last month
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-gray-600">Total Receipts Uploaded</CardTitle>
          <ShoppingCart className="h-5 w-5 text-blue-600" />
        </CardHeader>
        <CardContent>
          <div className="text-gray-900">{summaryData.totalReceipts}</div>
          <p className="text-gray-500 mt-1">
            <span className="text-green-600">+4</span> this week
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-gray-600">Top Item</CardTitle>
          <TrendingUp className="h-5 w-5 text-blue-600" />
        </CardHeader>
        <CardContent>
          <div className="text-gray-900">{summaryData.topItem.name}</div>
          <p className="text-gray-500 mt-1">Purchased {summaryData.topItem.frequency} times</p>
        </CardContent>
      </Card>
    </div>
  )
};