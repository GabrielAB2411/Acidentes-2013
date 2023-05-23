export default function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <div className="relative mt-5 font-extralight">
            <input
                {...props}
                className="peer rounded-md w-full px-4 py-3 text-sm text-white border-gray-500 border-2 
                focus:bg-[#1A1B4D] bg-[#1A1B4D]
                placeholder-shown:bg-[#1A1B4D] placeholder-shown: placeholder-transparent"
            />
            <label
                htmlFor={props?.id} 
                className="absolute left-2 -top-2.5 px-1 text-sm transition-all bg-[#1A1B4D] rounded text-white
                peer-placeholder-shown:text-sm peer-placeholder-shown:text-white peer-placeholder-shown:top-3
                peer-placeholder-shown:left-4 peer-placeholder-shown:bg-[#1A1B4D] peer-focus:-top-2.5 peer-focus:left-2
                peer-focus:bg-[#1A1B4D]"
            >
                {props?.placeholder}
            </label>
        </div>
    )
}