type ErrorProps = {
    message: string
}

export default function Error({ message }: ErrorProps) {
    return (
        <div className="grid h-screen place-items-center bg-gradient-to-r from-zinc-700 to-zinc-950">
            <div className="border border-white rounded-2xl w-96 h-40 p-12">
                <h1 className="font-bold text-white text-3xl">{message}</h1>
            </div>
        </div>
    )
}