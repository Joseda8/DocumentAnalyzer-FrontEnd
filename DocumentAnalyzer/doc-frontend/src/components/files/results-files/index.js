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
          Title: "There are not results",
          Status: false,
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
    axios.get(urlAPI + "documents/user=1").then((response) => {
      if (
        JSON.stringify(this.state.data_files) !== JSON.stringify(response.data)
      ) {
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
        accessor: "Title",
        cellClass: "text-muted w-10",
        Cell: (info) => (
          <a href={"https://soafiles.blob.core.windows.net/files/prueba.pdf"}>
            {info.row.original.Title}
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
            info.row.original.Status,
            info.row.original.UserDocumentReferences
          ),
      },
    ];

    return (
      <div>
        <h2>Files</h2>
        <div className="filesTable">
          <Table
            columns={columns}
            data={this.state.data_files}
            filterBy="Title"
          />
        </div>
      </div>
    );
  }
}

export default FilesList;
