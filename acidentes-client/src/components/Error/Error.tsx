type ErrorProps = {
    message: string
}

export default function Error({ message }: ErrorProps) {
    return (
        <div className="grid h-screen place-items-center bg-gradient-to-t from-indigo-900 to-black">
            <div className="border border-white rounded-2xl w-96 p-12">
                <h1 className="font-extralight text-white text-3xl">{message} :/</h1>
            </div>
        </div>
    )
}