import React from "react"
import { Input} from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {Textarea} from "@/components/ui/textarea"



const Contact =()=>{
    return(
        <>
        <section className="min-h-screen px-4 py-12 bg-white flex items-center justify-center">
            <div className="w-full max-w-3xl mx-auto space-y-10">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                      Contact Us
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