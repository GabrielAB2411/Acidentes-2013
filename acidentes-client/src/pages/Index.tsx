import { useQuery } from "react-query";
import DonutChart from "../components/Chart/Chart";
import { useDashboard } from "../hooks/UseDashboard";
import Loader from "../components/Loader/Loader";
import Error from "../components/Error/Error";
import {AxiosError} from "axios";

export default function Index() {
    const {getAccidentsData} = useDashboard()
    const {isLoading, data, error} = useQuery<any, AxiosError>("getAccidentsData", getAccidentsData, {staleTime: 120000})
    if (isLoading) return <Loader loading={isLoading}/> 

    if(error) return <Error message={error.message}/>

    return (
        <>  
            <div className="h-screen bg-gradient-to-r from-zinc-700 to-zinc-950 flex justify-center">
                <div className="mt-24 text-center">
                    <h1 className="font-bold mb-12 text-white text-3xl">Gráfico de acidentes em rodovias no ano de 2013</h1>
                    <DonutChart />
                </div>
            </div>
        </>
    )
}
