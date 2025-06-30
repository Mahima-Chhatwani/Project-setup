import {Input} from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {Textarea} from "@/components/ui/textarea"
import { useState } from "react"
// import { MapPin,} from "lucide-react"
import vernaImg from "@/images/verna.png"
import visaImg from "@/images/visa.png"


const Bookings = ()=>{

    const steps = [
        {label: "Location and Time", status:"active"},
        {label: "Extra Services", status:"upcoming"},
        {label: "Detail", status:"upcoming"},
        {label: "Checkout", status:"upcoming"},
        {label: "Booking Confirmed", status:"upcoming"},
    ];

    const[formData, setFormData] = useState({
        name:"",
        email:"",
        phone:"",
        car:"",
        pickupDate:"",
        returnDate:"",
        location:"",
        notes:"",
    });

    const handleChange = (e) =>{
        setFormData((prev) =>({
            ...prev,
            [e.target.name] : e.target.value,
        }))
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("Booking Data:", formData);
        alert("Booking Submitted Successfully!");
    };

    return(
        <>

          <div className="px-4 py-8">
            {/* Reserve your car section */}
           <section className="bg-white rounded-lg p-6 shadow mb-10">
              <h2 className="text-2xl font-bold mb-1">Reserve Your Car</h2>
              <p className="text-gray-500 mb-6">Complete the following steps</p>
              <div className="flex items-center gap-4 overflow-x-auto">
                {steps.map((step, index)=>(
                  <div key={index} className="flex items-centergap-2">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center
                        ${
                            step.status === "active"
                            ? "bg-teal-600 text-white"
                            : "bg-black text-white"
                        }`}> 
                        {index+1}
                    </div>
                    <div className="text-center"> 
                        <p className="text-sm font-medium">{step.label}</p>
                    </div>
                    {index !== steps.length-1 && (
                        <div className="h-1 w-8 bg-gray-300" />
                    )}
                    </div>
                ))}
              </div>
           </section>
          </div>


        <section className="px-4 py-12 bg-white flex items-center justify-center min-h-screen">
        <div className="w-full max-w-3xl mx-auto space-y-10">
            <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">Car Booking</h2>
                <p className="text-gray-600">Fill the form to book your car</p>
            </div>

            <form 
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow p-6 space-y-5 border"
            >
                <div className="grid md:grid-cols-2 gap-4">
                    <Input 
                    name= "name"
                    value= {formData.name}
                    onChange={handleChange}
                    placeholder ="Full Name"
                    required
                    />
                    <Input
                    name= "email"
                    value = {formData.email}
                    onChange = {handleChange}
                    type = "email"
                    placeholder = "Enter Email"
                    required
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <Input
                    name = "phone"
                    value = {formData.phone}
                    onChange = {handleChange}
                    placeholder ="Enter Phone Number"
                    required
                    />
                    <Input 
                    name = "car"
                    value = {formData.car}
                    onChange = {handleChange}
                    placeholder ="Car Model (eg. Verna)"
                    required
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <Input 
                    name= "pickupDate"
                    value = {formData.pickupDate}
                    onChange = {handleChange}
                    type = "date"
                    placeholder = "Pickup Date"
                    required
                    />
                    <Input 
                    name = "returnDate"
                    value = {formData.returnDate}
                    onChange = {handleChange}
                    type = "date"
                    placeholder = "Return Date"
                    required
                    />
                </div>

                <Input 
                name ="location"
                value ={formData.location}
                onChange = {handleChange}
                placeholder = "Pickup and Return Location"
                required
                />

                <Textarea 
                name = "notes"
                value = {formData.notes}
                onChange = {handleChange}
                placeholder = "Additional Notes (Optional)"
                />

                <Button type = "submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
                 Confirm Booking
                </Button>
            </form>
            </div>  
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6">
             <h2 className="text-2xl font-bold">Order Confirmation</h2>
             <p className="text-lg font-semibold">Order Total: <span className="text-green-600">₹5,000</span></p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left section */}
                <div className="space-y-6">
                    {/* Car Details */}
                    <div>
                        <div className="flex justify-between mb-2">
                         <h3 className="font-semibold">Car Details</h3>
                         <button className="text-blue-600 hover:underline">Edit</button>
                        </div>
                        <div className="flex items-center gap-4">
                          <img  
                          src={vernaImg}
                          alt="Verna"
                          className="w-20 rounded"
                          />
                          <div>
                            <p className="text-green-600 font-medium">
                                Verna
                            </p>
                            <p className="text-red-600 font-semibold">
                                ₹5,000
                            </p>
                          </div>
                        </div>
                    </div>
                    {/* Paayment Details */}
                    <div>
                        <div className="flex justify-between mb-2"> 
                        <h3 className="font-semibold">Payment Details</h3>
                        <button className="text-blue-600 hover:underline">Edit</button>
                        </div>
                        <div className="flex items-center gap-3">
                            <img 
                            src={visaImg}
                            alt="Visa"
                            className="w-10"
                            />
                            <p>Visa card ending in 9323</p>
                        </div>
                    </div>
                    {/* Your Information */}
                    <div>
                        <div className="flex justify-between mb-2">
                         <h3 className="font-semibold">Your Information</h3>
                         <button className="text-blue-600 hover:underline">Edit</button>
                        </div>
                        <p>Mahima</p>
                        <p>mahima@gmail.com</p>
                        <p>+91 7999979933</p>
                        <p>123,304 Mark Avenue, Indore(M.P),India </p>
                    </div>
                </div>

                {/* Right Section */}
                <div  className="space-y-6">
                   {/* Extra Service */}
                   <div>
                    <div className="flex justify-between mb-2">
                        <h3 className="font-semibold">Extra Service</h3>
                        <button className="text-blue-600 hover:underline">Edit</button>
                    </div>
                    <p>Baby seat :₹800 </p>
                   </div>

                   {/* Pickup Location */}
                   <div>
                    <div className="flex justify-between mb-2">
                        <h3 className="font-semibold">Pickup Location and Date</h3>
                        <button className="text-blue-600 hover:underline">Edit</button>
                    </div>
                    <p>123,304 Mark Avenue, Indore(M.P),India</p>
                    <p>01 July 2025 - 11:00 am </p>
                   </div>
                   {/* Drop-off Location */}
                   <div>
                    <div className="flex justify-between mb-2">
                        <h3 className="font-semibold">Drop-off Location</h3>
                        <button className="text-blue-600 hover:underline">Edit</button>
                    </div>
                    <p>123,304 Mark Avenue, Indore(M.P),India</p>
                    <p>01 July 2025 - 11:00 am</p>
                   </div>
                </div>
            </div>
            <div className="mt-6 flex justify-end">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black  px-6 py-3 rounded-md font-semibold">
                    Place Order
                </button>
            </div>

        </section>
        </>
    )
}
export default Bookings