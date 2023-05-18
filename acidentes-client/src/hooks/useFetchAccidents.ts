import { useQuery } from "react-query";
import { Data } from "../types/Data";
import { AxiosError } from "axios";
import getAccidentsData from "../services/GetAccidentsData";

export default function useFetchAccidents(page: number) {
    return useQuery<Data, AxiosError>({
        queryKey: ['getAccidentsData', page],
        queryFn: getAccidentsData,
        staleTime: 120000,
        refetchOnWindowFocus: false,
        enabled: true,
    })
}