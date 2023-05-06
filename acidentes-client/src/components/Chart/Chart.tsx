import { ApexOptions } from "apexcharts";
import ApexChart from "react-apexcharts";

export default function DonutChart() {
    const options: ApexOptions = {
        series: [2, 4, 5],
        labels: ["Com vítimas fatais", "Com vítimas feridas", "Sem vítimas"],
        colors: ["#b3b3b3", "#555555", "#29292a"],
        legend: {
            position: "bottom",
            horizontalAlign: "center",  
            fontSize: "20px",
            fontFamily: "bold",
            fontWeight: 400,
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
                            fontSize: "24px",
                            fontFamily: "bold",
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
            height="400px"
        />
    )
}