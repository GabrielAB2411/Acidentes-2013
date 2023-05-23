import { SyncLoader } from "react-spinners";

export default function DatatableLoader() {

    return (
        <div className="p-44">
            <SyncLoader
                color="#b0b0b0"
                size={24}
                speedMultiplier={0.5}
            />
        </div>
    )
}