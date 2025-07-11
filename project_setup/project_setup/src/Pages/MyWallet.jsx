import React from "react";
import { LayoutDashboard, CalendarCheck, Heart,Star, MessageSquare, Wallet, CreditCard, Settings, } from "lucide-react"
import { Link } from "react-router-dom";
import { useState } from "react";
import { Plus, RefreshCcw, MoreVertical } from "lucide-react";
import visaImg from "@/images/visa.png"



// Section 1
const walletItems = [
    {name: <Link to="/userdashboard">Dashboard</Link>, icon: <LayoutDashboard size={20} />, },
    {name: <Link to="/mybookings">My Bookings</Link>, icon: <CalendarCheck size={20} />},
    {name: <Link to="/reviews">Reviews</Link>, icon: <Star size={20} />,},
    {name: <Link to="/wishlist">Wishlist</Link>, icon: <Heart size={20} />, },
    {name: <Link to="/messages">Messages</Link>, icon: <MessageSquare size={20} />, },
    {name: <Link to="/mywallet">My Wallet</Link>, icon: <Wallet size={20} />, active:true},
    {name: <Link to="/payments">Payments</Link>, icon: <CreditCard size={20} />},
    {name: <Link to="/setting">Setting</Link>, icon: <Settings size={20} />},
];

// Section 2 
const conversionRate = 83.25; // 1 USD to INR

const cardList = [
  {
    id: 1,
    cardType: "visa",
    number: "3210 **** **** 4212",
    balance: 3000,
    active: true,
  },
  {
    id: 2,
    cardType: "mastercard",
    number: "7847 **** **** 7878",
    balance: 2300,
    active: true,
  },
  {
    id: 3,
    cardType: "visa",
    number: "4710 **** **** 6614",
    balance: 1800,
    active: true,
  },
];

// Section 3 
const transactions = [
  {
    id: "#1001",
    description: "Self Deposit Paypal",
    date: "15 Sep 2023, 09:00 AM",
    amount: 300,
    status: "Completed",
  },
  {
    id: "#1002",
    description: "Audi A3 2019 new",
    date: "23 Oct 2023, 12:00 PM",
    amount: -500,
    status: "Completed",
  },
  {
    id: "#1003",
    description: "Self Deposit Stripe",
    date: "02 Nov 2023, 10:30 AM",
    amount: 600,
    status: "Completed",
  },
  {
    id: "#1004",
    description: "Audi A3 2020 new",
    date: "18 Dec 2023, 02:30 PM",
    amount: 1500,
    status: "Pending",
  },
  {
    id: "#1005",
    description: "Self Deposit Stripe",
    date: "05 Jan 2024, 08:00 AM",
    amount: -450,
    status: "Failed",
  },
  {
    id: "#1006",
    description: "Self Deposit Paypal",
    date: "20 Feb 2024, 11:30 PM",
    amount: 1000,
    status: "Completed",
  },
];



const MyWallet =()=>{

    // Section 2
     const [amount, setAmount] = useState("");

  const totalCredit = 123464;
  const totalDebit = 7357;
  const availableBalance = 4544;


    return(
        <>
       <section>
            <div className="bg-white shadow-sm p-4 rounded--md flex flex-wrap gap-6 justify-start md:justify-between items-center">
               {walletItems.map((item, idx)=>(
                <button key={idx} className={`flex flex-col items-center text-sm font-medium transition ${
                item.active
                ? "text-white bg-orange-500 px-4 py-2 rounded"
                : "text-gray-600 hover:text-orange-500"
                }`}>
            <div className="mb-1">{item.icon}</div>
            {item.name}
                </button>
               ))}
            </div>
         </section>

         <section>
            <div className="p-6 bg-white ">
      <h2 className="text-2xl font-bold mb-6">Wallet</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Balance Info */}
        <div className="space-y-4">
          <div className="bg-black text-white p-6 rounded-lg flex justify-between items-center">
            <div>
              <p className="text-sm uppercase">Available Balance</p>
              <h3 className="text-3xl font-bold">₹{(availableBalance * conversionRate).toLocaleString()}</h3>
            </div>
            <RefreshCcw className="cursor-pointer" />
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-green-100 text-green-800 py-4 rounded-lg">
              <p className="text-sm">Total Credit</p>
              <h4 className="text-lg font-semibold">₹{(totalCredit * conversionRate).toLocaleString()}</h4>
            </div>
            <div className="bg-yellow-100 text-yellow-800 py-4 rounded-lg">
              <p className="text-sm">Total Debit</p>
              <h4 className="text-lg font-semibold">₹{(totalDebit * conversionRate).toLocaleString()}</h4>
            </div>
            <div className="bg-gray-100 text-gray-700 py-4 rounded-lg">
              <p className="text-sm">Total Transaction</p>
              <h4 className="text-lg font-semibold">₹{((totalCredit + totalDebit) * conversionRate).toLocaleString()}</h4>
</div>
          </div>

          <div className="mt-4">
            <label className="block mb-1 text-sm">Add Wallet Credits (₹)</label>
            <input
              type="number"
              placeholder="1000"
              className="w-full p-2 border border-gray-300 rounded"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <button className="mt-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Add Payment</button>
          </div>
        </div>

        {/* Card Info */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Your Cards</h3>
            <button className="text-sm flex items-center gap-1 text-gray-700">
              <Plus size={16} /> Add
            </button>
          </div>
          <div className="space-y-4">
            {cardList.map((card, index) => (
              <div key={card.id} className="flex justify-between items-center p-4 border rounded-lg bg-gray-50">
                <div className="flex items-center gap-4">
                  <span className={`h-3 w-3 rounded-full ${card.active ? "bg-green-500" : "bg-gray-400"}`} />
<img
                    src={`card.cardType === "visa" ? visaLogo : mastercardLogo`}
                    alt="logo"
                    className="w-10 h-7 object-contain"
                  />
                  <div>
                    <p className="text-sm">{card.number}</p>
                    <p className="text-xs text-gray-500">Card Number</p>
                  </div>
                </div>
                <div className="text-right">
                  <h4 className="text-sm font-semibold">₹{(card.balance * conversionRate).toLocaleString()}</h4>
                  <p className="text-xs text-green-600">Active</p>
                </div>
                <MoreVertical className="cursor-pointer" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

         </section>

         <section>
            {/* Wallet Usage History */}
<div className="mt-4 p-6">
  <h3 className="text-xl font-semibold mb-4">Wallet Usage History</h3>
  <div className="overflow-x-auto">
    <table className="min-w-full border border-gray-200">
      <thead className="bg-gray-100 text-left">
        <tr>
          <th className="px-4 py-2 border-b">Ref Id</th>
          <th className="px-4 py-2 border-b">Transaction For</th>
          <th className="px-4 py-2 border-b">Date</th>
          <th className="px-4 py-2 border-b">Total</th>
          <th className="px-4 py-2 border-b">Status</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((txn) => (
          <tr key={txn.id} className="hover:bg-gray-50 text-sm">
            <td className="px-4 py-2 border-b">{txn.id}</td>
            <td className="px-4 py-2 border-b">{txn.description}</td>
            <td className="px-4 py-2 border-b">{txn.date}</td>
            <td className={`px-4 py-2 border-b ${txn.amount < 0 ? 'text-red-600' : 'text-green-600'}`}>
              {`txn.amount < 0 ? - ₹${Math.abs(txn.amount * conversionRate).toLocaleString()} : + ₹${(txn.amount * conversionRate).toLocaleString()}`}
            </td>
            <td className="px-4 py-2 border-b">
              <span className={`text-xs px-2 py-1 rounded-full font-medium
                ${txn.status === 'Completed' && 'bg-green-100 text-green-700'}
                ${txn.status === 'Pending' && 'bg-yellow-100 text-yellow-700'}
                ${txn.status === 'Failed' && 'bg-red-100 text-red-700'}
              `}>
                {txn.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    {/* Pagination Footer */}
    <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
      <p>Showing 1 to 6 of 6 entries</p>
      <div className="space-x-1">
        <button className="px-2 py-1 border rounded bg-gray-100">Prev</button>
        <button className="px-2 py-1 border rounded bg-blue-600 text-white">1</button>
        <button className="px-2 py-1 border rounded bg-gray-100">Next</button>
      </div>
    </div>
  </div>
</div>
         </section>


        </>
    )
}

export default MyWallet