import React, { Component } from "react";
import ObjectStorage from "../../../helpers/ObjectStorage";
import "../../../styles.css";

class UploadFiles extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            files: null,
        }

        this.objectStorage = new ObjectStorage();
        this.onSubmit = this.onSubmit.bind(this);
        this.uploadFiles = this.uploadFiles.bind(this);
        this.uploadFilesBlob = this.uploadFilesBlob.bind(this);
    }

    onSubmit() {
        console.log(this.props);
        document.getElementById("message_to_user").innerHTML =  "Loading";
    }
  
    uploadFiles(e){
        const new_files = e.target.files;

        this.setState({
            files: new_files
        });
    }    

    uploadFilesBlob(){
        const files = this.state.files;

        console.log(files);

        document.getElementById("message_to_user").innerHTML =  "Loading...";
        this.objectStorage.uploadFiles(files, (response) => {
            console.log(response[0]);
            document.getElementById("message_to_user").innerHTML =  "Files uploaded";
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
            
            <input type="file" multiple onChange={this.uploadFiles}/>
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
