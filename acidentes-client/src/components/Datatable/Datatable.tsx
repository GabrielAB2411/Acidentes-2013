import React from "react";
import DataTable, { TableStyles } from "react-data-table-component"
import { Button, DatatableLoader, DatatableNoData, Input } from "../Index";
import { FileCsv } from "@phosphor-icons/react"
import { TableColumn } from "react-data-table-component";
import { Accidents } from "../../types/Accidents";
import { DatatableInfo } from "../../types/DatatableInfo";
import useFetchAccidents from "../../hooks/useFetchAccidents";
import useDatatable from "../../hooks/useDatatable";

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
            padding: "20px",
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
    noData: {
        style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffff",
            backgroundColor: "#1A1B4D",
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
    progress: {
        style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#1A1B4D",
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
];

const paginationComponentOptions = {
    rowsPerPageText: "Registros por página:",
    rangeSeparatorText: "de",
    noRowsPerPage: true,
    selectAllRowsItem: true,
    selectAllRowsItemText: "All",
};

export default function Datatable() {
    const [filterText, setFilterText] = React.useState("");
    const [currentPage, setCurrentPage] = React.useState(1);

    const { downloadCSV } = useDatatable()

    const { data, isLoading } = useFetchAccidents(currentPage);

    const datatableInfo: DatatableInfo = [];

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
    ));

    const filteredData = datatableInfo.filter(
        item => item.estado && item.estado.toLowerCase().includes(filterText.toLowerCase()),
    );

    const InputMemo = React.useMemo(() => {
        return (
            <Input
                id="search"
                type="text"
                placeholder="Busca por estado"
                required autoComplete="off"
                value={filterText}
                onChange={e => setFilterText(e.target.value)} />
        );
    }, [filterText]);

    return (
        <DataTable
            columns={datatableColumns}
            data={filteredData}
            highlightOnHover
            progressPending={isLoading}
            progressComponent={<DatatableLoader />}
            pagination
            paginationServer
            paginationTotalRows={data && data[0].size}
            paginationComponentOptions={paginationComponentOptions}
            persistTableHead
            subHeader
            subHeaderComponent={
                <div>
                    <Button
                        icon={<FileCsv />}
                        onClick={() => downloadCSV(datatableInfo)}>
                        Exportar para CSV
                    </Button>
                    {InputMemo}
                </div>
            }
            noDataComponent={<DatatableNoData search={filterText}/>}
            customStyles={customStyles}
            onChangePage={(page: number) => setCurrentPage(page)}
        />
    )
}