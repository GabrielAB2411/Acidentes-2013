import { ApexOptions } from "apexcharts";
import ApexChart from "react-apexcharts";

type ChartProps = {
    accidentsWithFatalVictimsCount: number 
    accidentsWithInjuredVictimsCount: number
    accidentsWithoutVictimsCount: number
}

export default function Chart({accidentsWithFatalVictimsCount, accidentsWithInjuredVictimsCount, accidentsWithoutVictimsCount}: ChartProps) {
    const options: ApexOptions = {
        series: [accidentsWithFatalVictimsCount, accidentsWithInjuredVictimsCount, accidentsWithoutVictimsCount],
        labels: ["Com vítimas fatais", "Com vítimas feridas", "Sem vítimas"],
        colors: ["#8844FF", "#00115D", "#004BD8"],
        legend: {
            position: "bottom",
            horizontalAlign: "center",  
            fontSize: "20rem",
            labels: {
                colors: "#fff",
            },
        },
        plotOptions: {
            pie: {
                donut: {
                    size: "60%",
                    labels: {
                        show: true,
                        total: {
                            show: true,
                            showAlways: true,
                            fontSize: "2rem",
                            color: "#fff",
                        }
                    }
                }
            }
        }
    }

    return (
        <ApexChart
            options={options} 
            series={options.series}
            type="donut"
            height="600px"
        />
    )
}