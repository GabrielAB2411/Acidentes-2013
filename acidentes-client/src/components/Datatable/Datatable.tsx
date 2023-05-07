import React from "react";
import DataTable from "react-data-table-component"
import Select from "../Select/Select";

type DatatableProps = {
    columns: Array<any>,
    data: Array<any>,
}

const paginationComponentOptions = {
    rowsPerPageText: 'Registros por página:',
    rangeSeparatorText: 'de',
    noRowsPerPage: false,
    selectAllRowsItem: false,
    selectAllRowsItemText: 'All',
}

export default function Datatable({ columns, data }: DatatableProps) {
    const [filter, setFilter] = React.useState("");
    const filteredItems = data.filter(
        item => item.text == filter,
    );

    const subHeaderComponentMemo = React.useMemo(() => {
        return (
            <div className="w-52 mt-6">
                <Select onChange={(e: any) => setFilter(e.target.value)} options={data} />
            </div>
        );
    }, [data]);
  
    return (
        <DataTable
            columns={columns}
            data={filter ? filteredItems : data}
            theme="dark"
            highlightOnHover
            pagination
            paginationComponentOptions={paginationComponentOptions}
			subHeader
			subHeaderComponent={subHeaderComponentMemo}
            persistTableHead
        />
    )
}