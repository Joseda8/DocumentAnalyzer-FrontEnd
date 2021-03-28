import React from "react";
import Table from "../../../helpers/table/table";
import "../../../helpers/table/table.css";
import employees from "../../../data/employee";


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
                Header: 'Occurrences',
                accessor: 'qty',
                cellClass: 'text-muted w-10',
                Cell: (info) => <p>{info.row.original.qty}</p>,
                sortType: 'basic',
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
