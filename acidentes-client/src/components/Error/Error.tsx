type ErrorProps = {
    message: string
}

export default function Error({message}: ErrorProps) {
    return (
        <div className="grid h-screen place-items-center bg-gradient-to-r from-zinc-700 to-zinc-950">
            <h1 className="font-bold text-white text-3xl">{message}</h1>
        </div>
    )
}