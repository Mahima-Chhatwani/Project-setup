import React from "react";

const Invoice = () =>{
    return(
        <>
        <section className="bg-white p-8 rounded-lg shadow-md">
        {/* Header */}
        <div className="flex justify-between mb-8">
            <div>
                <h1 className="text-3xl font-bold  text-yello-500">Quent</h1>
                <p className="text-xl font-semibold mt-2">Invoice</p>
                <p className="text-sm">Invoice Number: IN235689124578</p>
            </div>
            <div className="text-right">
                <p>Issue Date: 01 July 2025</p>
                <p>Due Date: 01 July 2025</p>
                <p>Due Amount: ₹50,000</p>
                <p>Recurring Invoice: 15 Months</p>
                <p>PO Number: 546325879</p>
            </div>
        </div>

        {/* Billing Info */}
        <div className="bg-black text-white p-6 rounded-md mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
             <h3 className="font-bold mb-2">Billed to</h3>
             <p>Customer Name</p>
             <p>7999979933</p>
             <p>Address line 1, Address line 2</p>
             <p>Zip Code, city-country</p>
            </div>
        </div>

        {/* Table */}
         <div className="overflow-x-auto">
            <table className="w-full border-collapse border">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border p-2">Description</th>
                        <th className="border p-2">Category</th>
                        <th className="border p-2">Rate/Item</th>
                        <th className="border p-2">Quantity</th>
                        <th className="border p-2">Discount</th>
                        <th className="border p-2">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {[
                        { desc: "Quent Rental Cars", cat:"Kia Soul", rate:1110, qty:2, discount:2, amount:2220},
                        { desc: "Quent Rental Cars", cat:"Toyota Tocamo", rate:1110, qty:0, discount:0, amount:2220},
                        { desc: "Quent Rental Cars", cat:"Audi A3", rate:1110, qty:2, discount:2, amount:2220},
                    ].map((item, idx)=>(
                        <tr>
                            <td className="border p-2">{item.desc}</td>
                            <td className="border p-2">{item.cat}</td>
                            <td className="border p-2">{item.rate}</td>
                            <td className="border p-2">{item.qty}</td>
                            <td className="border p-2">{item.discount}</td>
                            <td className="border p-2">{item.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
         </div>

         {/* Payment Details and Amout Summary */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="border rounded p-4">
                <h3 className="font-bold mb-2">Payment Details</h3>
                <div className="border border-dashed p-4 rounded">
                    <p>Debit Card</p>
                    <p>xxxxxxxxxxxx1234</p>
                    <p>SBI Bank</p>
                </div>
            </div>
            <div>
                <div className="space-y-2">
                    <div className="flex justify-between">
                     <p>Taxable:</p>
                     <p>₹1,00,000</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Additional Charges:</p>
                        <p>₹2,00,000</p>
                    </div>
                    <div className="flex justify-between" >
                        <p>Discount:</p>
                        <p>₹1,00,000</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Subtotal:</p>
                        <p>₹50,000</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Total Amount:</p>
                        <p>₹4,50,000</p>
                    </div>
                </div>
            </div>
         </div>

         {/* Notes & Terms */}
         <div className="mt-8">
            <h3 className="font-bold">Notes</h3>
            <p className="text-sm mb-4">Enter customer notes or any other details</p>
            <h3 className="font-bold">Terms and Conditions</h3>
            <p className="text-sm">Enter terms or any other details</p>
         </div>

         {/* Signature */}
         <div className="flex justify-end items-center mt-8">
            <div className="text-right">
                <img  src="" alt="Signature" className="w-32 mb-1" />
                <p className="font-medium">Gurinder Singh</p>
            </div>
         </div>
        </section>
        </>
    )
}

export default Invoice