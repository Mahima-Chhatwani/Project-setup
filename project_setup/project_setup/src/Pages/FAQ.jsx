import React, { useState } from "react";


const accordionData =[
    {id: 1, title: "1.Do you offer long-term car rentals?", content: "Absolutely! We offer weekly and monthly packages at discounted rates for long-term rentals." },
    {id: 2, title: "2.Are there mileage limits on rentals?", content: "Most rentals include a fixed mileage limit. Additional kilometers will be charged as per the overage rate."},
    {id: 3, title: "3.Can I extend my rental after the booking has started?", content: "Yes, extension is possible through your account dashboard or customer support—subject to vehicle availability." },
    {id: 4, title: "4. Are child safety seats or GPS available?", content: "Yes, you can add child seats, GPS devices, or other accessories at checkout for a nominal fee."},
    {id: 5, title: "5.What types of cars are available for rent?", content: " We offer hatchbacks, sedans, SUVs, luxury cars, and even electric vehicles to match different needs."},
    {id: 6, title: "6.What if I return the car early? Will I get a refund?", content: "Early returns are allowed, but partial refunds depend on the rental duration and pricing policy."},
    {id: 7, title: "7.Do you offer airport pickup and drop-off?", content: "Yes, we provide airport service at most major cities with prior booking and nominal convenience charges."},
    
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






const FAQ=()=>{

    const[expandedId, setExpandedId] = useState(null);
    
    const toggleExpand = (id) =>{
        setExpandedId(expandedId === id ? null :id)
    } 

    return(
        <>
        <div className="bg-gray-200 ">
            <h2 className="text-center font-bold text-3xl underline py-5 ">Frequently Asked Questions</h2>
            
        <div className="min-h-screen flex items-center text-center justify-center w-full ">
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
        </>
    )
}

export default FAQ