import React, { Component } from "react";
import Table from "../../../helpers/table/table";
import "../../../helpers/table/table.css";
import ModalEmployeeReferences from "./employee-references";

import axios from "axios";
import { urlAPI } from "../../../helpers/constants";

class FilesList extends Component {
  constructor(props) {
    super(props);

    this.setNewData = this.setNewData.bind(this);

    this.state = {
      data_files: [
        {
          url: "#",
          title: "There are not results",
          status: false,
          userDocumentReferences: [],
        },
      ],
    };

    this.interval = setInterval(() => {
      this.setNewData();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  button_type(status, references) {
    if (status) {
      if (references.length === 0) {
        return <button className="mb-2 btn btn-info" >No matches</button>;
      }  
      
      return (
        <ModalEmployeeReferences
          buttonLabel={"See results"}
          references={references}
        ></ModalEmployeeReferences>
      );
    } else {
      return <button className="mb-2 btn btn-secondary">Not processed</button>;
    }
  }

  setNewData() {
    axios.get(urlAPI + "documents").then((response) => {
      if (
        JSON.stringify(this.state.data_files) !== JSON.stringify(response.data) && response.data.length > 0
        ) {
        console.log(response)
        this.setState({
          data_files: response.data,
        });
      }
    });
  }

  render() {
    const columns = [
      {
        Header: "Filename",
        accessor: "title",
        cellClass: "text-muted w-10",
        Cell: (info) => (
          <a href={info.row.original.url}>
            {info.row.original.title}
          </a>
        ),
        sortType: "basic",
      } /* 
                  {
                      Header: 'Owner',
                      accessor: 'owner',
                      cellClass: 'text-muted w-10',
                      Cell: (info) => <p>{info.row.original.owner}</p>,
                      sortType: 'basic',
                  }, */,
      {
        Header: "Status",
        accessor: "status",
        cellClass: "text-muted w-10",
        Cell: (info) =>
          this.button_type(
            info.row.original.status,
            info.row.original.userDocumentReferences
          ),
      },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setNewData();
        }, 1000);
        return () => clearInterval(interval);
      }, []);
    
    return (
      <div>
        <h2>Files</h2>
        <div className="filesTable">
          <Table
            columns={columns}
            data={this.state.data_files}
            filterBy="title"
          />
        </div>
      </div>
    );
  }
}

export default FilesList;
