import React from "react";
import {cn} from "@/lib/utils"

const Textarea=React.forwardRef(
    ({className, ...props},ref)=>{
        return(
            <textarea
            className={cn(
                "flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
            )}
            ref={ref}
            {...props}

            />
                
        )
    }
)

Textarea.displayName= "Textarea";

export {Textarea}