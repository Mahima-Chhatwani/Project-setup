import * as React from "react"
import {
  DropdownMenu as RadixDropdownMenu,
  DropdownMenuTrigger as RadixDropdownMenuTrigger,
  DropdownMenuContent as RadixDropdownMenuContent,
  DropdownMenuItem as RadixDropdownMenuItem,
} from "@radix-ui/react-dropdown-menu"
import { cn } from "@/lib/utils"

const DropdownMenu = RadixDropdownMenu;

const DropdownMenuTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <RadixDropdownMenuTrigger ref={ref} className={cn(className)} {...props}>
      {children}
    </RadixDropdownMenuTrigger>
  )
)
DropdownMenuTrigger.displayName = RadixDropdownMenuTrigger.displayName;

const DropdownMenuContent = React.forwardRef(
  ({ className, sideOffset = 4, ...props }, ref) => (
    <RadixDropdownMenuContent
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95",
        className
      )}
      {...props}
    />
  )
)
DropdownMenuContent.displayName = RadixDropdownMenuContent.displayName;

const DropdownMenuItem = React.forwardRef(
  ({ className, inset, ...props }, ref) => (
    <RadixDropdownMenuItem
      ref={ref}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground",
        inset && "pl-8",
        className
      )}
      {...props}
    />
  )
)
DropdownMenuItem.displayName = RadixDropdownMenuItem.displayName;

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
}
