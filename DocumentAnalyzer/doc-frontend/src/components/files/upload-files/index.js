import React, { Component } from "react";
import ObjectStorage from "../../../helpers/ObjectStorage";
import "../../../styles.css";
import { urlAPI } from "../../../helpers/constants";

import axios from "axios";

class UploadFiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      files: null,
    };

    this.objectStorage = new ObjectStorage();
    this.onSubmit = this.onSubmit.bind(this);
    this.uploadFiles = this.uploadFiles.bind(this);
    this.uploadFilesBlob = this.uploadFilesBlob.bind(this);
  }

  onSubmit() {
    console.log(this.props);
    document.getElementById("message_to_user").innerHTML = "Loading";
  }

  uploadFiles(e) {
    const new_files = e.target.files;

    this.setState({
      files: new_files,
    });
  }

  uploadFilesBlob() {
    const files = this.state.files;

    console.log(files);

    document.getElementById("message_to_user").innerHTML = "Loading...";
    this.objectStorage.uploadFiles(files, (response) => {
      let url = response[0]._response.request.url;
      url = url.slice(0, url.indexOf("?"));
      let title = files[0].name;
      const body = {
        url: url,
        title: title,
      };
      document.getElementById("message_to_user").innerHTML = "Files uploaded";
    axios.post(urlAPI + 'documents/notify', body).then((response) => {
        //document.getElementById("message_to_user").innerHTML = "Server received the file successfully";
        //console.log(response);
    });

      console.log(url);
      console.log(title);
    });
  }

  render() {
    return (
      <div className="center">
        <header>
          <h1>Upload files</h1>
          <span>This action will start the analysis</span>
        </header>
        <br></br>

        <input type="file" multiple onChange={this.uploadFiles} />
        <br></br>
        <br></br>
        <button onClick={this.uploadFilesBlob}>Upload files</button>
        <br></br>
        <br></br>
        <h4 id="message_to_user"> </h4>
      </div>
    );
  }
}

export default UploadFiles;
