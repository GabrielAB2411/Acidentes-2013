import { TableColumn } from "react-data-table-component";
import getAccidentsData from "../services/GetAccidentsData";

interface DataRow {
    id: number,
    text: string,
}

export function useDashboard() {

    const datatableColumns: TableColumn<DataRow>[] = [
        {
            name: "ID",
            selector: row => row.id,
        },
        {
            name: "TEXT",
            selector: row => row.text,
        },
    ]

    const datatableInfo = [
        {
            id: 1,
            text: "Teste1"
        },
        {
            id: 2,
            text: "Teste2"
        },
        {
            id: 3,
            text: "Teste3"
        },
        {
            id: 4,
            text: "Teste4"
        },
        {
            id: 5,
            text: "Teste5"
        },
        {
            id: 6,
            text: "Teste6"
        },
        {
            id: 7,
            text: "Teste7"
        },
        {
            id: 8,
            text: "Teste8"
        },
        {
            id: 9,
            text: "Teste9"
        },
        {
            id: 10,
            text: "Teste10"
        },
        {
            id: 11,
            text: "Teste11"
        },
        {
            id: 12,
            text: "Teste12"
        },
        {
            id: 13,
            text: "Teste13"
        },
        {
            id: 14,
            text: "Teste14"
        },
        {
            id: 15,
            text: "Teste15"
        },
        {
            id: 16,
            text: "Teste16"
        },
        {
            id: 17,
            text: "Teste17"
        },
        {
            id: 18,
            text: "Teste18"
        },
        {
            id: 19,
            text: "Teste19"
        },
        {
            id: 20,
            text: "Teste20"
        },
    ]

    return {
        getAccidentsData,
        datatableInfo,
        datatableColumns
    }
}