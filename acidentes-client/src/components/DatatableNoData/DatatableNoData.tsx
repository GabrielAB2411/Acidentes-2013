import { SmileySad } from "@phosphor-icons/react";

type LoaderProps = {
    search: string
}

export default function DatatableNoData({ search }: LoaderProps) {

    return (
        <div className="mt-20 mb-20 flex flex-row gap-2">
            <span
                className="font-extralight text-lg">
                Nenhum registro relacionado a "{search}" foi encontrado.
            </span>
            <SmileySad size={24} />
        </div>
    )
}