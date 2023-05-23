import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
    icon?: React.ReactElement,
}

export default function Button({ children, icon, ...props }: ButtonProps) {
    return (
        <button
            {...props}
            className="flex justify-center items-center rounded-md gap-3 p-2 border-2 border-gray-500 text-white text-lg w-52 font-extralight"
        >
            <span>{children}</span>
            {icon && React.cloneElement(icon, { className: "fill-white h-7 w-7" })}
        </button>
    )
}