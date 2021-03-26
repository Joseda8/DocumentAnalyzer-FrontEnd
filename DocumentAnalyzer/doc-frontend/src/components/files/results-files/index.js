import React from "react";
import Table from "../../../helpers/table/table";
import "../../../helpers/table/table.css";
import ModalEmployeeReferences from "./employee-references";
import files from "../../../data/files";

function button_type(status, references) {
    if(status){
        return <ModalEmployeeReferences buttonLabel={"See results"} references={references}></ModalEmployeeReferences>;
    } else {
        return <button className="mb-2 btn btn-secondary">Not processed</button>;
    }
}

const FilesList = () => {

    const columns = React.useMemo(
        () => [
            {
                Header: 'Filename',
                accessor: 'title',
                cellClass: 'text-muted w-10',
                Cell: (info) => <a href={info.row.original.url}>{info.row.original.title}</a>                ,
                sortType: 'basic',
            },
            {
                Header: 'Owner',
                accessor: 'owner',
                cellClass: 'text-muted w-10',
                Cell: (info) => <p>{info.row.original.owner}</p>,
                sortType: 'basic',
            },
            {
                Header: 'Status',
                accessor: 'status',
                cellClass: 'text-muted w-10',
                Cell: (info) => button_type(info.row.original.status, info.row.original.references),
            },
        ],
        []
    );

    
    return (
        <div>
            <h2>Files</h2>
            <div className="filesTable">
                <Table columns={columns} data={files} />
            </div>
        </div>
    );

}


export default FilesList;
