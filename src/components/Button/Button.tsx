import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'

const buttonVariants = cva(
    // Classes base
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline: "border border-input hover:bg-accent hover:text-accent-foreground",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "underline-offset-4 hover:underline text-primary",
            },
            colorScheme: {
                blue: "",
                green: "",
                red: "",
                yellow: "",
                purple: "",
                gray: "",
            },
            size: {
                default: "h-10 py-2 px-4",
                sm: "h-9 px-3 rounded-md",
                lg: "h-11 px-8 rounded-md",
                icon: "h-10 w-10",
            },
        },
        compoundVariants: [
            // Combinações de variant + colorScheme
            {
                variant: "default",
                colorScheme: "blue",
                class: "bg-blue-600 text-white hover:bg-blue-700",
            },
            {
                variant: "default",
                colorScheme: "green",
                class: "bg-green-600 text-white hover:bg-green-700",
            },
            {
                variant: "default",
                colorScheme: "red",
                class: "bg-red-600 text-white hover:bg-red-700",
            },
            {
                variant: "default",
                colorScheme: "yellow",
                class: "bg-yellow-500 text-white hover:bg-yellow-600",
            },
            {
                variant: "default",
                colorScheme: "purple",
                class: "bg-purple-600 text-white hover:bg-purple-700",
            },
            {
                variant: "default",
                colorScheme: "gray",
                class: "bg-gray-600 text-white hover:bg-gray-700",
            },
            {
                variant: "outline",
                colorScheme: "blue",
                class: "border-blue-600 text-blue-600 hover:bg-blue-50",
            },
            {
                variant: "outline",
                colorScheme: "green",
                class: "border-green-600 text-green-600 hover:bg-green-50",
            },
            {
                variant: "outline",
                colorScheme: "red",
                class: "border-red-600 text-red-600 hover:bg-red-50",
            },
            {
                variant: "outline",
                colorScheme: "yellow",
                class: "border-yellow-500 text-yellow-600 hover:bg-yellow-50",
            },
            {
                variant: "outline",
                colorScheme: "purple",
                class: "border-purple-600 text-purple-600 hover:bg-purple-50",
            },
            {
                variant: "outline",
                colorScheme: "gray",
                class: "border-gray-600 text-gray-600 hover:bg-gray-50",
            },
        ],
        defaultVariants: {
            variant: "default",
            size: "default",
            colorScheme: "blue",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean
    loading?: boolean
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({
         className,
         variant,
         size,
         colorScheme,
         loading = false,
         leftIcon,
         rightIcon,
         children,
         disabled,
         ...props
     }, ref) => {
        const isDisabled = disabled || loading

        return (
            <button
                className={cn(buttonVariants({ variant, size, colorScheme, className }))}
                ref={ref}
                disabled={isDisabled}
                {...props}
            >
                {loading && (
                    <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                )}
                {!loading && leftIcon && (
                    <span className="mr-2">{leftIcon}</span>
                )}
                {children}
                {!loading && rightIcon && (
                    <span className="ml-2">{rightIcon}</span>
                )}
            </button>
        )
    }
)

Button.displayName = "Button"

export { Button, buttonVariants }