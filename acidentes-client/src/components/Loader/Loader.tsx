import { ClipLoader } from "react-spinners";

type LoaderProps = {
    loading: boolean
}

export default function Loader({ loading }: LoaderProps) {

    return (
        <div className="grid h-screen place-items-center bg-gradient-to-t from-indigo-900 to-black">
            <ClipLoader
                color="#b0b0b0"
                size={80}
                loading={loading}
                speedMultiplier={0.5}
            />
        </div>
    )
}