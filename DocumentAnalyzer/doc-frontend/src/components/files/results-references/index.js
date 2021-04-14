import React, { useState, useEffect } from 'react';
import Table from "../../../helpers/table/table";
import "../../../helpers/table/table.css";
import ModalDocumentReferences from "./references-by-document";

import axios from 'axios';
import { urlAPI } from "../../../helpers/constants";

function button_type(references) {
    if(references.length > 0){
        return <ModalDocumentReferences buttonLabel={"View details"} references={references}></ModalDocumentReferences>;
    } else {
        return <button className="mb-2 btn btn-secondary">No occurrences</button>;
    }
}


const EmployeeList = () => {
    const [employees, set_employees] = useState([]);

    const columns = React.useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'employeeName',
                cellClass: 'text-muted w-10',
                Cell: (info) => <p>{info.row.original.employeeName}</p>,
                sortType: 'basic',
            },
            {
                Header: 'Total Occurrences',
                accessor: 'count',
                cellClass: 'text-muted w-10',
                Cell: (info) => <p>{info.row.original.count}</p>,
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

    function setNewData(){
        //set_data_files([ files[Math.floor(Math.random() * 10)] ]);

        axios.get(urlAPI + 'documents/users/count').then(
            response => {
                //console.log(response);
                
                set_employees(response.data);
            }
        );
    }

    useEffect(() => {
        setNewData();
        /*const interval = setInterval(() => {
            setNewData();
        }, 1000);
        return () => clearInterval(interval);*/
      }, []);

    
    return (
        <div>
            <h2>Employee References</h2>
            <div className="filesTable">
                <Table columns={columns} data={employees} filterBy="employeeName"/>
            </div>
        </div>
    );

}


export default EmployeeList;
