import React, { useState } from "react";


const accordionData =[
    {id: 1, title: "Accordion 1", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    {id: 2, title: "Accordion 2", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {id: 3, title: "Accordion 3", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    {id: 4, title: "Accordion 4", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {id: 5, title: "Accordion 5", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {id: 6, title: "Accordion 6", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {id: 7, title: "Accordion 7", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    
]


function AccordionItem({title, content, isExpanded, onToggle}){
    return(
        <div className={`bg-white rounded-3xl overflow-hidden transition-all duration-300  ${
            isExpanded ? "max-h-96" : "max-h-20"
        }`}>
            <div className="flex justify-between items-start p-6 cursor-pointer" onClick={onToggle}>
             <div className="text-2xl font-bold">
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
        <div className="min-h-screen flex items-center justify-center w-full bg-gradient-to-r from-gray-800 to-yellow-300">
            <div className="flex flex-col gap-3 max-w-md mx-auto">
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
        </>
    )
}

export default FAQ