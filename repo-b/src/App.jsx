import React, { useEffect, useState } from "react";
import { Card, CardContent } from "./components/ui/card"; 
const API_BASE_URL = "https://arthyabackend.onrender.com";


export default function FinanceDashboard() {
  const [weeklyExpenses, setWeeklyExpenses] = useState({});

useEffect(() => {
  fetch(`${API_BASE_URL}/api/expenses/test_user_123`)

    .then((res) => res.json())
    .then((data) => {
      const totals = {};
      data.forEach((exp) => {
        if (!totals[exp.category]) totals[exp.category] = 0;
        totals[exp.category] += exp.amount;
      });
      setWeeklyExpenses(totals);
    })
    .catch((err) => console.error("Error fetching expenses:", err));
}, []);

  return (
    <div className="min-h-screen bg-[#f0f2f8] p-6 grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-8">
      {/* Revenue Card */}
      <div className="col-span-1 space-y-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-gray-500 text-sm">Revenue</div>
            <div className="text-xs text-gray-400">Sales from 1-12 Apr, 2024</div>
            <div className="text-2xl font-semibold mt-2">$1,278.45</div>
            <div className="text-green-500 text-sm mt-1">⬆ 2.1% vs last week</div>
            <div className="mt-4 h-24 bg-gray-200 rounded-lg"></div>
            <button className="mt-3 text-sm text-blue-500">View Report</button>
          </CardContent>
        </Card>

        {/* Spending Limit */}
        <Card>
          <CardContent className="p-4">
            <div className="text-gray-500 text-sm">Spending Limit</div>
            <div className="text-xs text-gray-400">Data from 1-12 Apr, 2024</div>
            <div className="text-2xl font-semibold mt-2">$252.98</div>
            <div className="text-sm text-gray-500">of $1,200</div>
            <div className="mt-2 h-2 bg-orange-200 rounded-full">
              <div className="w-1/4 h-full bg-orange-500 rounded-full"></div>
            </div>
            <button className="mt-3 text-sm text-blue-500">View Report</button>
          </CardContent>
        </Card>

        {/* Spotify Subscription */}
        <Card>
          <CardContent className="p-4 flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174872.png" alt="Spotify" className="w-5 h-5" />
              <span className="text-sm">Spotify Subscription</span>
            </div>
            <span className="text-sm font-semibold">$5.99</span>
          </CardContent>
        </Card>

        {/* YouTube Membership */}
        <Card>
          <CardContent className="p-4 flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" className="w-5 h-5" />
              <span className="text-sm">YouTube Membership</span>
            </div>
            <span className="text-sm font-semibold">$13.99</span>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Expense and Daily Expense */}
      <div className="col-span-1 space-y-4">
        {/* Weekly Expense Pie Chart */}
       <Card>
  <CardContent className="p-4">
    <div className="text-gray-500 text-sm">Weekly Expense</div>
    <div className="text-xs text-gray-400">Live data from MongoDB</div>

    {/* Purple circle with ✓ or 0% */}
    <div className="mt-4 h-28 w-28 mx-auto bg-purple-100 rounded-full flex items-center justify-center text-xl font-bold text-purple-500">
      {Object.keys(weeklyExpenses || {}).length > 0 ? "✓" : "0%"}
    </div>

    {/* Live categories from backend */}
    <div className="mt-4 space-y-1 text-sm">
      {Object.entries(weeklyExpenses || {}).map(([category, amount], i) => (
        <div key={i} className="text-blue-500">
          • {category} ₹{amount}
        </div>
      ))}
    </div>

    <button className="mt-3 text-sm text-blue-500">View Report</button>
  </CardContent>
</Card>


        {/* Daily Expense Chart Placeholder */}
        <Card>
          <CardContent className="p-4">
            <div className="text-gray-500 text-sm">Daily Expense</div>
            <div className="text-xs text-gray-400">Data from 1-12 Apr, 2024</div>
            <div className="mt-4 h-24 bg-gray-200 rounded-lg"></div>
            <button className="mt-3 text-sm text-blue-500">View Report</button>
          </CardContent>
        </Card>
      </div>

      {/* Saving Goal and Goal Cards */}
      <div className="col-span-1 space-y-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-gray-500 text-sm">Saving Goal</div>
            <div className="text-xs text-gray-400">Data from 1-12 Apr, 2024</div>
            <div className="mt-4 w-full h-24 bg-green-100 rounded-full flex items-center justify-center text-xl font-bold text-green-600">
              $1,052.98 of $1,200
            </div>
            <button className="mt-3 text-sm text-blue-500">View Report</button>
          </CardContent>
        </Card>

        {/* Saving Goals Cards */}
        {["Dream Car", "House Saving", "Laptop", "Motorcycle"].map((item, i) => (
          <Card key={i}>
            <CardContent className="p-4">
              <div className="text-sm font-medium text-gray-600">{item}</div>
              <div className="text-sm text-gray-500">$12,567 of $25,000</div>
              <div className="mt-2 h-2 bg-gray-200 rounded-full">
                <div className="w-1/2 h-full rounded-full" style={{ backgroundColor: ["#8b5cf6", "#f59e0b", "#ec4899", "#06b6d4"][i] }}></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}