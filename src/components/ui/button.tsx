
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-[0_10px_70px_-15px_rgba(0,0,0,0.3)]",
  {
    variants: {
      variant: {
        default: "bg-payfare-700 text-white hover:bg-payfare-600 hover:shadow-[0_15px_70px_-10px_rgba(0,0,0,0.4)] hover:transform hover:-translate-y-1",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-[0_15px_70px_-10px_rgba(0,0,0,0.4)] hover:transform hover:-translate-y-1",
        outline:
          "border-2 border-payfare-500 bg-transparent text-white hover:bg-payfare-700/20 hover:shadow-[0_15px_70px_-10px_rgba(0,0,0,0.4)] hover:transform hover:-translate-y-1",
        secondary:
          "bg-payfare-600 text-white hover:bg-payfare-500 hover:shadow-[0_15px_70px_-10px_rgba(0,0,0,0.4)] hover:transform hover:-translate-y-1",
        ghost: "shadow-none hover:bg-payfare-700/20 hover:text-white hover:shadow-[0_10px_70px_-15px_rgba(0,0,0,0.3)] hover:transform hover:-translate-y-1",
        link: "shadow-none text-blue-400 underline-offset-4 hover:underline",
        gradient: "bg-gradient-to-r from-payfare-500 to-blue-600 text-white hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:transform hover:-translate-y-1",
      },
      size: {
        default: "h-12 px-8 py-3",
        sm: "h-9 rounded-full px-5",
        lg: "h-14 rounded-full px-10",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
