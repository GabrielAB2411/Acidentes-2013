import React from "react";
import { AxiosError } from "axios";
import Aos from "aos";
import getAccidentsData from "../services/GetAccidentsData";
import { useQuery } from "react-query";
import { Data } from "../types/Data";

export function useDashboard() {
    const { isLoading, data, error } = useQuery<Data, AxiosError>(
        {
            queryKey: ['getAccidentsData'],
            queryFn: async () => getAccidentsData(1),
            staleTime: 120000,
            refetchOnWindowFocus: false,
            enabled: true,
        })
        
    const accidentsWithFatalVictimsCount = data && data[0]?.accidentsWithFatalVictimsCount;
    const accidentsWithInjuredVictimsCount = data && data[0]?.accidentsWithInjuredVictimsCount;
    const accidentsWithoutVictimsCount = data && data[0]?.accidentsWithoutVictimsCount;

    React.useEffect(() => {
        Aos.init({ duration: 2500 })
    }, [])

    return {
        accidentsWithFatalVictimsCount,
        accidentsWithInjuredVictimsCount,
        accidentsWithoutVictimsCount,
        isLoading,
        error,
    }
}