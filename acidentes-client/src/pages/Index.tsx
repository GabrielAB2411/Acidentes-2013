import { useDashboard } from "../hooks/UseDashboard";
import { Card, Chart, Container, Datatable, Error, Loader, MainView, Profile, Title, Wrapper, YoutubePlayer } from "../components/Index";
import "aos/dist/aos.css"

export default function Index() {
    const {
        accidentsWithFatalVictimsCount,
        accidentsWithInjuredVictimsCount,
        accidentsWithoutVictimsCount,
        isLoading,
        error } = useDashboard()

    if (isLoading) return <Loader loading={isLoading} />

    if (error) return <Error message={error.message} />

    return (
        <>
            <Container>
                <Wrapper>
                    <MainView/>
                    <Card>
                        <Title>Taxa de mortalidade de acidentes classificados</Title>
                        <Chart
                            accidentsWithFatalVictimsCount={accidentsWithFatalVictimsCount || 1}
                            accidentsWithInjuredVictimsCount={accidentsWithInjuredVictimsCount || 1}
                            accidentsWithoutVictimsCount={accidentsWithoutVictimsCount || 1}
                        />
                    </Card>
                    <Card>
                        <Title>Registro de todos os acidentes em rodovias no ano de 2013</Title>
                        <div>
                            <Datatable/>
                        </div>
                    </Card>
                    <Card>
                        <Title>Vídeo de apresentação</Title>
                        <YoutubePlayer url="https://www.youtube.com/watch?v=UqKcSKUpDLQ" />
                    </Card>
                    <Card>
                        <Title>Participantes</Title>
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
                                role="RA: 081220001"
                            />
                        </div>
                    </Card>
                </Wrapper>
            </Container>
        </>
    )
}
