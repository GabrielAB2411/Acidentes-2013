import React from "react";
import DataTable, { TableStyles } from "react-data-table-component"
import { TableColumn } from "react-data-table-component";
import { useQuery } from "react-query";
import getAccidentsData from "../../services/GetAccidentsData";
import { Data } from "../../types/Data";
import { Accidents } from "../../types/Accidents";

type DatatableInfoProps = {
    estado: string,
    data: string,
    classificacao: string,
    causa: string,
    tipo: string,
    mortos: number,
    feridos: number,
}[]

interface DataRow {
    estado: string,
    data: string,
    classificacao: string,
    tipo: string,
    causa: string,
    mortos: number,
    feridos: number,
}

const customStyles: TableStyles = {
    table: {
        style: {
            width: "64rem",
        }
    },
    subHeader: {
        style: {
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
            backgroundColor: "#1A1B4D",
        },
    },
    headRow: {
        style: {
            backgroundColor: "#1A1B4D",
            color: "#ffffff",
        },
    },
    rows: {
        style: {
            minHeight: "50px",
            backgroundColor: "#1A1B4D",
            color: "#ffffff",
            borderTopWidth: "1px",
            borderBottomWidth: "1px",
        },
    },
    pagination: {
        style: {
            borderBottomLeftRadius: "15px",
            borderBottomRightRadius: "15px",
            backgroundColor: "#1A1B4D",
            color: "#ffffff",
        },
        pageButtonsStyle: {
            color: "#ffffff",
            fill: "#ffffff",
        },
    },
};

const datatableColumns: TableColumn<DataRow>[] = [
    {
        name: "Estado",
        selector: row => row.estado,
    },
    {
        name: "Data",
        selector: row => row.data,
    },
    {
        name: "Classificação",
        selector: row => row.classificacao,
    },
    {
        name: "Causa",
        selector: row => row.causa,
    },
    {
        name: "Tipo",
        selector: row => row.tipo,
    },
    {
        name: "Mortos",
        selector: row => row.mortos,
    },
    {
        name: "Feridos",
        selector: row => row.feridos,
    },
]

const paginationComponentOptions = {
    rowsPerPageText: 'Registros por página:',
    rangeSeparatorText: 'de',
    noRowsPerPage: true,
    selectAllRowsItem: true,
    selectAllRowsItemText: 'All',
}

export default function Datatable() {
    const [currentPage, setCurrentPage] = React.useState(1);

    const { data } = useQuery<Data>(
        {
            queryKey: ['getNextAccidentsData', currentPage],
            queryFn: async () => getAccidentsData(currentPage),
            staleTime: 1000,
            refetchOnWindowFocus: false,
            enabled: true,
            keepPreviousData: true,
        })

    const datatableInfo: DatatableInfoProps = []

    data && data[0]?.accidents?.map((dt: Accidents) => (
        datatableInfo.push(
            {
                estado: dt.uf.estado,
                data: dt.dataInversa,
                classificacao: dt.classificacaoAcidente.classificacao,
                causa: dt.causaAcidente.causa,
                tipo: dt.tipoAcidente.tipo,
                mortos: dt.mortos,
                feridos: dt.feridos,
            }
        )
    ))

    return (
        <DataTable
            columns={datatableColumns}
            data={datatableInfo}
            highlightOnHover
            pagination
            paginationServer
            paginationTotalRows={data && data[0].size}
            paginationComponentOptions={paginationComponentOptions}
            persistTableHead
            subHeader
            customStyles={customStyles}
            onChangePage={(page: number) => setCurrentPage(page)}
        />
    )
}