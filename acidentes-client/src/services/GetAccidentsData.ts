import api from "./apiInstance/Api"
import { Data } from "../types/Data";
import { AxiosError } from "axios";
import { QueryFunctionContext, useQuery } from "react-query";

async function getAccidentsData(context: QueryFunctionContext) {
    const [, page] = context.queryKey
    return await api.get<Data>(`/accidents/${page}`)
    .then(response => response.data)
}

export default function useFetchAccidents(page: number) {
    return useQuery<Data, AxiosError>({
        queryKey: ['getAccidentsData', page],
        queryFn: getAccidentsData,
        staleTime: 120000,
        refetchOnWindowFocus: false,
        enabled: true,
    })
}
