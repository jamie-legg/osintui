export default function OpBox({ children, ...props }) {
    return (
        <div className="border-4 border-gray-900 p-2 hidden lg:flex absolute right-10 place-self-end items-end text-3xl code uppercase" {...props}>
            
            {children}
      </div>
    )
}
