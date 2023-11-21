import React from "react";

// displays an arrow to click on for more information
export default function MoreInfoArrow() {

    return (
        <div className="flex justify-between items-center">
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="opacity-80 group-hover:opacity-100"
            >
                <path
                    stroke="blue"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="blue"
                stroke="blue"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 h-4 w-4 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all"
            >
                <polyline points="9 18 15 12 9 6"/>
            </svg>
        </div>
    )
}