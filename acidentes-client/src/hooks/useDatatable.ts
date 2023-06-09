import { DatatableInfo } from "../types/DatatableInfo";

export default function useDatatable() {

    function convertArrayOfObjectsToCSV(data: DatatableInfo) {
        let result: string;

        const columnDelimiter = ",";
        const lineDelimiter = "\n";
        const keys = Object.keys(data[0]);

        result = "";
        result += keys?.join(columnDelimiter);
        result += lineDelimiter;

        data.forEach((item) => {
            let ctr = 0;
            keys?.forEach((key) => {
                if (ctr > 0) result += columnDelimiter;

                result += item[key as keyof DatatableInfo[0]];

                ctr++;
            });
            result += lineDelimiter;
        });

        return result;
    }

    function downloadCSV(data: DatatableInfo) {
        const link = document.createElement("a");
        let csv = convertArrayOfObjectsToCSV(data);
        if (csv == null) return;

        const filename = "acidentes.csv";

        if (!csv.match(/^data:text\/csv/i)) {
            csv = `data:text/csv;charset=utf-8,${csv}`;
        }
        link.setAttribute("href", encodeURI(csv));
        link.setAttribute("download", filename);
        link.click();
    }

    return {
        downloadCSV
    }
}