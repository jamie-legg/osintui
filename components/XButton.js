import { forwardRef, useState } from "react"
import { classNames } from "../shared/utils"

const XButton = forwardRef(({ onClick, code="U:0_0", icon=false, text=false, size="sm", type="toggle", ...props }, ref) => {
    const [active, setActive] = useState(false)

    const clickHandler = async event => {
        //? we always want the opposite action of current click state
        onClick(code, !active);
        
        setActive(!active)
      }
    
    //todo: add support for multiple navigation types

    const typeMap = {}

    if(type === "toggle") {
    return (
        <button 
            ref={ref}
            onClick={clickHandler}
            className=
            { classNames( size === "sm" ? "text-xl" : "text-2xl", 
            active? "border-red-600 hover:border-blue-600" : "border-blue-600 hover:border-red-600",
            "hover:border-l-4 hover:border-r-0 transition-none transition-all text-white rounded-none m-2 border-r-4 bg-gray-900 px-2 py-1 title"
            )}
            {...props}
            >
            { !!icon? null : null}
            { text? text : null}
        </button>
    )
    }
    else if(type === "notification") {
        return (
            <button 
                ref={ref}
                onClick={clickHandler}
                className=
                { classNames( size === "sm" ? "text-xl" : "text-2xl", 
                active? "border-red-600 hover:border-blue-600" : "border-blue-600 hover:border-red-600",
                "hover:border-l-4 hover:border-r-0 transition-none transition-all text-white rounded-none m-2 border-r-4 bg-gray-900 px-2 py-1 title"
                )}
                {...props}
                >
                { !!icon? <icon className="w-10 h-10"/> : null}
                { text? text : null}
            </button>
        )
    }
});

export default XButton;