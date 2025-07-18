import React, {useState} from "react";
import ourcompanyImg from "@/images/ourcompany.png";
import { MapPin, CalendarCheck2, Car, MoveIcon, CrownIcon, UserCheckIcon } from "lucide-react";


const accordionData =[
    {id: 1, title: "1.What documents are required to rent a car?", content: "You need a valid driving license, a government-issued ID proof (like Aadhaar or passport), and a refundable security deposit." },
    {id: 2, title: "2.What is the minimum age requirement to rent a car?", content: "The minimum age to rent a car is typically 21 years. Some premium cars may require the driver to be 25 years or older."},
    {id: 3, title: "3.Can I book a car without creating an account?", content: "Yes, you can book as a guest, but creating an account allows you to track bookings, access offers, and manage your rentals easily." },
    {id: 4, title: "4.Is fuel included in the rental price?", content: "No, fuel is not included. You will receive the car with a certain fuel level and are expected to return it with the same level."},
    {id: 5, title: "5.Can I return the car at a different location?", content: "Yes, we offer one-way rentals between select locations for an additional fee. Please check availability while booking."},
    {id: 6, title: "6.How can I pay for my car rental?", content: "We accept UPI, credit/debit cards, and major wallets like Paytm and PhonePe. Cash payments are accepted at select locations."},
    {id: 7, title: "7.What happens if I return the car late?", content: "A late return fee will be charged based on the extra hours. We recommend informing customer support if you expect a delay."},
    
]


function AccordionItem({title, content, isExpanded, onToggle}){
    return(
        <div className={`bg-white rounded-2xl overflow-hidden transition-all duration-300  ${
            isExpanded ? "max-h-50" : "max-h-18"
        }`}>
            <div className="flex justify-between items-start p-6 cursor-pointer" onClick={onToggle}>
             <div className="text-md font-bold">
               {title}
             </div>
             < i className={`bx  bx-chevron-right text-4xl transition-all duration-300 ${
                isExpanded ? "rotate-90" : ""
             }`}  ></i> 
            </div>

            <div className={`px-5 pb-5 overflow-hidden transition-all duration-300 ${
                isExpanded ? "opacity-100" : "opacity-0"
            }`}>
                <div>
                     {content}
                </div>
            </div>
        </div>
    )
}


const AboutUs = () => {

  const[expandedId, setExpandedId] = useState(null);
      
      const toggleExpand = (id) =>{
          setExpandedId(expandedId === id ? null :id)
      } 
    
  return (
    <>
      <main className="bg-white text-gray-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-800 to-yellow-300 py-16 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              About Us
            </h1>
            <p className="text-lg md:text-2xl mb-2">
              We are commited to deliver exceptional car rental experience.
            </p>
          </div>
        </section>

        {/* About our company */}

        <section className="py-16 bg-white px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            {/* Left part */}
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src={ourcompanyImg}
                alt="Car Available"
                className="w-full object-cover h-full"
              />
              <div className="absolute left-0 top-0 h-full w-10 bg-yellow-500 flex items-center justify-center">
                <p className="rotate-90 text-white font-semibold text-sm whitespace-nowrap">
                  10 years of Experience
                </p>
              </div>
            </div>
            {/* Right part */}
            <div className="text-left ">
              <p className="text-2xl text-cyan-600 font-medium uppercase mb-2 ">
                About Our Company
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 ">
                Best solutions for Modern Car Rentals
              </h2>
              <p className="text-gray-600 mb-4">
                Quent offers a top-tier fleet of vehicles for every need,
                whether it's a quick ride or long-term travel. Our platform
                ensures seamless booking, reliable vehicles and peace of mind.
              </p>
              <p className="text-gray-600 mb-4">
                With Real-time availability, roadside support, and flexible
                plans, We make your Rental experience efficient and affordable.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <span className="text-green-600 text-2xl">🗸</span>
                  <p className="text-xl font-semibold">
                    Doorstep Delivery and Return
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 text-2xl">🗸</span>
                  <p className="text-xl font-semibold">
                    Real-time booking system
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 text-2xl">🗸</span>
                  <p className="text-xl font-semibold">Zero Hidden charges</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 text-2xl">🗸</span>
                  <p className="text-xl font-semibold">
                    Real-Time booking system
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 text-2xl">🗸</span>
                  <p className="text-xl font-semibold">
                    Available 24*7 with support
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 text-2xl">🗸</span>
                  <p className="text-xl font-semibold">Low security charges</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}

        <section className="py-16 px-4 bg-gray-50 ">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">✨Our Mission✨</h2>
            <p className="text-gray-700 text-lg font-semibold">
              At Quent, our mission is to provide seamless and affordable car
              rental services that cater to the modern traveler's needs. Whether
              it's a business trip , a weekend gateway, or your daily comute,
              we're here to you moving.
            </p>
          </div>
        </section>

        {/* Team vision */}
        <section className="PY-16 PX-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-yellow-100 shadow rounded-lg hover:bg-gray-300">
              <h3 className="text-2xl font-semibold text-yellow-600">10k+</h3>
              <p className="text-gray-600 font-semibold">Happy Customers</p>
            </div>
            <div className="p-6 bg-yellow-100 shadow rounded-lg hover:bg-gray-300">
              <h3 className="text-2xl font-semibold text-yellow-600">100+</h3>
              <p className="text-gray-600 font-semibold">Cars Available</p>
            </div>
            <div className="p-6 bg-yellow-100 shadow rounded-lg hover:bg-gray-300">
              <h3 className="text-2xl font-semibold text-yellow-600">24*7</h3>
              <p className="text-gray-600 font-semibold">Support</p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 bg-gray-100 text-gray-900  ">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-2">How it Works</h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
              Transforming ordinary drives into extraordinary memories.
            </p>
            <div className="grid md:grid-cols-3 gap-15 text-center">
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <div className="rounded-full border-2 border-dashed border-blue-600 p-6 mb-4 hover:bg-blue-300">
                  <MapPin className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">1. Choose Locations</h3>
                <p className="text-gray-600 text-sm max-w-xs border-b-2 border-black pb-4 inline-block">
                  Determine the date & location for your car rental. Consider
                  factors such as your travel itinerary, pickup/drop-off
                  locations.
                </p>
              </div>
              {/* Step 2 */}
              <div className="flex flex-col items-center">
                <div className=" rounded-full border-2 border-dashed border-yellow-500 p-6 mb-4 hover:bg-yellow-100">
                  <CalendarCheck2 className="w-10 h-10 text-yellow-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">2. Pickup Location</h3>
                <p className="text-gray-600 text-sm max-w-xs border-b-2 border-black pb-4 inline-block">
                  Check the availability of your desired vehicle type for your
                  chosen dates and location. Ensure that the rental rates,
                  taxes, fees, and any additional charges.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center">
                <div className="rounded-full border-2 border-dashed border-black p-6 mb-4 hover:bg-gray-400">
                  <Car className="w-10 h-10 text-black" />
                </div>
                <h3 className="font-bold text-lg mb-2">3. Book Your Car</h3>
                <p className="text-gray-600 text-sm max-w-xs border-b-2 border-black pb-4 inline-block">
                  Determine the date & location for your car rental. Consider
                  factors such as your travel itinerary, pickup/drop-off
                  locations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Facts by the Numbers */}
        <section className="bg-black text-white py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-2">Facts by the Numbers</h2>
            <p className="text-gray-300 mb-10">
              Trusted by thousands, driven across millions of kilometers —
              here's what drives Quent forward.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Item 1 */}
              <div className="bg-white text-black p-6 rounded-lg shadow text-center">
                <div className="text-3xl mb-2">❤️</div>
                <h3 className="text-2xl font-bold">16k+</h3>
                <p className="text-sm text-gray-500 font-semibold">
                  Happy Customers
                </p>
              </div>
              {/* Item 2 */}
              <div className="bg-white text-black p-6 rounded-lg shadow text-center">
                <div className="text-3xl mb-2">🚗</div>
                <h3 className="text-2xl font-bold">2547+</h3>
                <p className="text-sm text-gray-500 font-semibold">
                  Count of Cars
                </p>
              </div>

              {/* Item 3 */}
              <div className="bg-white text-black p-6 rounded-lg shadow text-center">
                <div className="text-3xl mb-2">🔐</div>
                <h3 className="text-2xl font-bold">625k+</h3>
                <p className="text-sm text-gray-500 font-semibold">
                  Car center Solutions
                </p>
              </div>

              {/* Item 4 */}
              <div className="bg-white text-black p-6 rounded-lg shadow text-center">
                <div className="text-3xl mb-2">⏱️</div>
                <h3 className="text-2xl font-bold">200k+</h3>
                <p className="text-sm text-gray-500 font-semibold">
                  Total Kilometer
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white text-center">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-2">Why Choose Us?</h2>
            <p className="text-gray-700 mb-12">
              Here's how far we've come — backed by your trust and our wheels.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="text-center bg-white shadow rounded-lg p-6 border hover:-translate-y-2 hover:scale-105 hover:bg-gray-100">
                <div className="bg-black text-white w-20 h-20 mx-auto rounded-md flex items-center justify-center mb-4">
                  <MoveIcon size={32} />
                </div>
                <h4 className="font-semibold text-lg mb-2">
                  Easy & Fast Booking
                </h4>
                <p className="text-gray-700">
                  Completely carinate e business testing process whereas fully
                  researched customer service. Globally extensive content with
                  quality.
                </p>
              </div>

              {/* Card 2 */}
              <div className="text-center bg-white shadow rounded-lg p-6 border hover:translate-y-2 hover:scale-105 hover:bg-gray-100">
                <div className="bg-black text-white w-20 h-20 mx-auto rounded-md flex items-center justify-center mb-4">
                  <CrownIcon size={32} />
                </div>
                <h4 className="font-semibold text-lg mb-2">
                  Many Pickup Location
                </h4>
                <p className="text-gray-700">
                  Enthusiastically magnetic initiatives with cross-platform
                  sources. Dynamically target testing procedures through
                  effective.
                </p>
              </div>

              {/* Card 3 */}
              <div className="text-center bg-white shadow rounded-lg p-6 border hover:translate-y-2 hover:scale-105 hover:bg-gray-100">
                <div className="bg-black text-white w-20 h-20 mx-auto rounded-md flex  items-center justify-center mb-4">
                  <UserCheckIcon size={32} />
                </div>
                <h4 className="font-semibold text-lg mb-2">
                  Customer Satisfaction
                </h4>
                <p className="text-gray-700">
                  Globally user centric method interactive. Seamlessly
                  revolutionize unique portals corporate collaboration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What people Say about us */}
        <section className="text-center  bg-gradient-to-r from-gray-800 to-yellow-300 py-16">
          <div className="max-w-6xl mx-auto px-4 items-center justify-center">
            <h2 className="font-bold text-3xl mb-2">What People say about us?</h2>
            <p className="text-gray-800 mb-5">
             Every review is a story of trust, comfort, and great rides.
            </p>
          </div>
        </section>

        {/* Frequently asked questions */}
        <section className="py-20 bg-gray-100 text-center">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="font-bold text-3xl mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-700 mb-5">
              We understand that renting a car can raise a lot of questions—from
              insurance coverage and fuel policies to pickup locations and
              return flexibility. In this section, we've compiled answers to the
              most commonly asked questions by our customers to help you book
              with confidence. Whether you're renting for a day or a month,
              we're here to make the process seamless and transparent.
            </p>
            <div>
              <div className="min-h-screen flex items-center justify-center w-full ">
            <div className="flex flex-col gap-3 max-w-fit mx-auto">
              {accordionData.map((item)=>(
                <AccordionItem 
                key={item.id}
                {...item}
                 isExpanded={expandedId === item.id}
                 onToggle={()=> toggleExpand(item.id)}
                />
              ))}
            </div>
        </div>
            </div>

            </div>
        </section>
      </main>
    </>
  );
};

export default AboutUs;
