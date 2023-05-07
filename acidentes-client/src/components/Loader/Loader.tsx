import { CSSProperties } from "react";
import { SyncLoader } from "react-spinners";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

type LoaderProps = {
    loading: boolean
}

export default function Loader({ loading }: LoaderProps) {

    return (
        <div className="grid h-screen place-items-center bg-gradient-to-r from-zinc-700 to-zinc-950">
            <SyncLoader
                color="#b0b0b0"
                size={60}
                loading={loading}
                cssOverride={override}
            />
        </div>
    )
}