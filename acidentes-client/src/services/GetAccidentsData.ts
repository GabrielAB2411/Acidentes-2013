import axios from "axios";
import { Data } from "../types/Data";

export default async function getAccidentsData(page: number) {
    return await axios.get<Data>(`https://localhost:7284/accidents/${page}`)
    .then(response => response.data)
}