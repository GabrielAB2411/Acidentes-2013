import api from "./apiInstance/Api"
import { Data } from "../types/Data";
import { QueryFunctionContext } from "react-query";

export default async function getAccidentsData(context: QueryFunctionContext) {
    const [, page] = context.queryKey
    return await api.get<Data>(`/accidents/${page}`)
    .then(response => response.data)
}

