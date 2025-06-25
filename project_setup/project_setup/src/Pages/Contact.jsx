import React from "react"
import { Input} from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {Textarea} from "@/components/ui/textarea"
import{Phone, Mail, MapPin, Clock} from "lucide-react"

const contactInfo = [
    {
        icon: <Phone className="h-6 w-6 text-white" />,
        title: "Phone Number",
        info:  "1234567890"
    },
    {
        icon: <Mail className="h-6 w-6 text-white" />,
        title:  "Email Address",
        info:   "quentrentals@gmail.com"
    },
    {
        icon: <MapPin className="h-6 w-6 text-white" />,
        title: "Location",
        info:  "Quent, Ahmedabad(Gujarat) India"
    },
    {
        icon: <Clock className="h-6 w-6 text-white" />,
        title: "Opening Hours",
        info:   "Mon - Sat (10:00am-07:00pm)"
    }
]


const Contact =()=>{
    
    return(
        <>
       <section className="bg-white py-8 ">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {contactInfo.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center justify-center border rounded-lg shadow-sm p-6 hover:shadow-md transition hover:bg-teal-500"
          >
            <div className="bg-orange-500 p-3 rounded-full mb-4">
              {item.icon}
            </div>
            <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
            <p className="text-sm text-center text-gray-600">{item.info}</p>
          </div>
        ))}
      </div>
    </section>
        <section className="min-h-screen px-4 py-12 bg-white flex items-center justify-center">
            <div className="w-full max-w-3xl mx-auto space-y-10">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                      Get In Touch!
                    </h2>
                    <p className="mt-2 text-gray-500 text-base underline">
                    Have a question, feedback, or need help with a booking? We're here to assist you.
                    </p>
                </div>
                <form className="space-y-6 bg-gray-50 p-6 rounded-2xl shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <Input type="text" placeholder="Enter your full name" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <Input type="email" placeholder="Enter your email address" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Subject
                        </label>
                        <Input type="text" placeholder="What is your query About"/>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1"></label>
                        <Textarea  placeholder="Type your message here.." rows={6}/>
                    </div>

                    <Button type="submit" className="w-full">Send Message</Button>
                </form>


            </div>
             
        </section>
        </>
    )
}

export default Contact