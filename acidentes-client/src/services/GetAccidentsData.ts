import axios from "axios";

export default async function getAccidentsData() {
    return await axios.get<any[]>("https://localhost:7284/WeatherForecast")
    .then(response => response.data)
}