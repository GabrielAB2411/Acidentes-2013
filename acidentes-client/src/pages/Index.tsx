import { useQuery } from "react-query";
import DonutChart from "../components/Chart/Chart";
import { useDashboard } from "../hooks/UseDashboard";
import Loader from "../components/Loader/Loader";
import Error from "../components/Error/Error";
import { AxiosError } from "axios";
import Datatable from "../components/Datatable/Datatable";
import YoutubePlayer from "../components/YoutubePlayer/YoutubePlayer";
import Profile from "../components/Profile/Profile";

export default function Index() {
    const { getAccidentsData, datatableColumns, datatableInfo } = useDashboard()
    const { isLoading, data, error } = useQuery<any, AxiosError>("getAccidentsData", getAccidentsData, { staleTime: 120000 })

    if (isLoading) return <Loader loading={isLoading} />

    if (error) return <Error message={error.message} />

    return (
        <>
            <div className="bg-gradient-to-r from-zinc-700 to-zinc-950 flex justify-center text-center">
                <div className="grid grid-cols-1 gap-24 p-24">
                    <div className="grid grid-cols-1 gap-12 p-12 border border-white rounded-2xl">
                        <h1 className="font-bold text-white text-3xl">Gráfico de acidentes em rodovias no ano de 2013</h1>
                        <DonutChart />
                    </div>
                    <div className="grid grid-cols-1 gap-12 p-12 border border-white rounded-2xl">
                        <h1 className="font-bold text-white text-3xl">Registro de todos os acidentes em redovias no ano de 2013</h1>
                        <div className="text-left">
                            <Datatable
                                columns={datatableColumns}
                                data={datatableInfo}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-12 p-12 border border-white rounded-2xl">
                        <h1 className="font-bold text-white text-3xl">Vídeo de apresentação</h1>
                        <YoutubePlayer url="https://www.youtube.com/watch?v=XSbMSSdGSdg&t=3854s" />
                    </div>
                    <div className="grid grid-cols-1 gap-12 p-12 border border-white rounded-2xl">
                        <h1 className="font-bold text-white text-3xl">Participantes</h1>
                        <div className="grid grid-cols-3">
                            <Profile
                                name="Gabriel Barbosa"
                                imgUrl="https://media.licdn.com/dms/image/C4D03AQFlkOk_DCOzFA/profile-displayphoto-shrink_400_400/0/1654083602503?e=1689206400&v=beta&t=X0ilD7JAZN_IGivydh6FHT4OWJCaDjv38r1ssbO9Wdk"
                                linkedinUrl="https://www.linkedin.com/in/gabrielalvesbarbosa/"
                                githubUrl="https://github.com/GabrielAB2411"
                                role="RA: 081220041"
                            />
                            <Profile
                                name="Ruan Faccin"
                                imgUrl="https://media.licdn.com/dms/image/C4E03AQEEASYJT-pb7w/profile-displayphoto-shrink_100_100/0/1648824438936?e=1689206400&v=beta&t=214DBmAoIeNEprN0818Zkr2aMCKJ9W3S1b8sQiWIyCU"
                                linkedinUrl="https://www.linkedin.com/in/ruancfaccin/"
                                githubUrl=""
                                role="RA: 0812200"
                            />
                            <Profile
                                name="Gustavo Braz"
                                imgUrl="https://media.licdn.com/dms/image/C4D03AQH9V5bew7kO3Q/profile-displayphoto-shrink_100_100/0/1660705233689?e=1689206400&v=beta&t=soG7l0BpG1mHavmr9lrE6BDI_F1rHwl1uI1YoYCZxgE"
                                linkedinUrl="https://www.linkedin.com/in/braz-gustavo/"
                                githubUrl=""
                                role="RA: 0812200"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
