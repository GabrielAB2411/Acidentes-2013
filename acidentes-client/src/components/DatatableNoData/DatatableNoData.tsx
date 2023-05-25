import { SmileySad } from "@phosphor-icons/react";

export default function DatatableNoData() {

    return (
        <div className="mt-20 mb-20 flex flex-row gap-2">
            <span
                className="font-extralight text-lg">
                Nenhum registro foi encontrado.
            </span>
            <SmileySad size={24} />
        </div>
    )
}