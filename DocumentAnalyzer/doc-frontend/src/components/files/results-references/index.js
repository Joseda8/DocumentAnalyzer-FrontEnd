import React from "react";
import Table from "../../../helpers/table/table";
import "../../../helpers/table/table.css";
import employees from "../../../data/employee";
import ModalDocumentReferences from "./references-by-document";


function button_type(references) {
    if(references.length > 0){
        return <ModalDocumentReferences buttonLabel={"View details"} references={references}></ModalDocumentReferences>;
    } else {
        return <button className="mb-2 btn btn-secondary">No occurrences</button>;
    }
}


const EmployeeList = () => {

    const columns = React.useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'name',
                cellClass: 'text-muted w-10',
                Cell: (info) => <p>{info.row.original.name}</p>,
                sortType: 'basic',
            },
            {
                Header: 'Total Occurrences',
                accessor: 'qty',
                cellClass: 'text-muted w-10',
                Cell: (info) => <p>{info.row.original.qty}</p>,
                sortType: 'basic',
            },
            {
                Header: 'Ocurrences on document',
                accessor: 'documents',
                cellClass: 'text-muted w-10',
                Cell: (info) => button_type(info.row.original.documents),
            },
        ],
        []
    );

    
    return (
        <div>
            <h2>Employee References</h2>
            <div className="filesTable">
                <Table columns={columns} data={employees} filterBy="name"/>
            </div>
        </div>
    );

}


export default EmployeeList;
