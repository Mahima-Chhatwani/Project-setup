import React from "react";
import {Star} from "lucide-react"
import avatar1Img from "@/images/avatar1.png"
import avatar2Img from "@/images/avatar2.png"
import avatar8Img from "@/images/avatar8.png"
import avatar3Img from "@/images/avatar3.png"
import avatar4Img from "@/images/avatar4.png"
import avatar5Img from "@/images/avatar5.png"
import avatar6Img from "@/images/avatar6.png"

import avatar7Img from "@/images/avatar7.png"


const testimonialSection = [
{
    id: 1,
    name: "Mahima Ramnani",
    image: avatar1Img,
    rating: 5.0,
    text: "",
},
{
    id: 2,
    name: "Mayank Ramnani",
    image: avatar2Img,
    rating: 4.5,
    text: "",
},
{
    id: 3,
    name: "Mihir Savnani",
    image: avatar3Img,
    rating: 4.0,
    text: "",
},
{
    id: 4,
    name: "Sagar",
    image: avatar4Img,
    rating: 3.5,
    text: "",
},
{
    id: 5,
    name: "Komal",
    image: avatar5Img,
    rating: 5.0,
    text: "",
},
{
    id: 6,
    name: "Manish",
    image: avatar6Img,
    rating: 4.5,
    text: "",
},
{
    id: 7,
    name: "Dhwani",
    image: avatar7Img,
    rating: 4.0,
    text: "",
},
{
    id: 8,
    name: "Gaurav",
    image: avatar8Img,
    rating: 3.5,
    text: "",
},
]

const renderStars = (rating) =>{
    const stars =[];
    const fullStars = Math.floor(rating);
    const hasHlfStar = rating % 1 !== 0;
    for(let i=0; i<fullStars;i++){
        stars.push(<span key={`full-${i}`} className="text-yellow-500">★</span>);
    }
    if(hasHlfStar){
        stars.push(<span key="half" className="text-yellow-500">⯪</span>)
    }
    while (stars.length <5){
        stars.push(<span key={`empty-${stars.length}`} className="text-gray-400">☆</span>)
    }
    return stars;
}

const Testimonials=()=>{
    return(
        <>
        <section className="px-4 py-10">
      <h2 className="text-3xl font-bold mb-6">What Our Customers Say</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {testimonialSection.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-6 border rounded-lg shadow hover:shadow-md transition"
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <div className="flex items-center text-sm">
                  <div className="flex">{renderStars(testimonial.rating)}</div>
                  <span className="ml-1 text-gray-600">({testimonial.rating})</span>
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-sm">{testimonial.review}</p>
          </div>
        ))}
      </div>
    </section>
        </>
    )
}

export default Testimonials