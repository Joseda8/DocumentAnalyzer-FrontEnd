import React, { Component } from "react";
import ObjectStorage from "../../../helpers/ObjectStorage";

class UploadFiles extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }

        this.objectStorage = new ObjectStorage();
        this.onSubmit = this.onSubmit.bind(this);
        this.uploadFiles = this.uploadFiles.bind(this);
    }

    onSubmit() {
        console.log(this.props);
    }
  
    uploadFiles(e){
        const files = e.target.files;
        console.log(this.objectStorage.uploadFiles(files)); //Esperar respuesta y hacer algo mientras tanto
    }


  render() {
    return (
        <div>
            <header>
                <h1>UPLOAD FILES!</h1>
            </header>

            <button onClick={this.onSubmit}>TEST</button>
            <br></br>
            <input type="file" multiple onChange={this.uploadFiles}/>

        </div>
      );
  }
}

export default UploadFiles;
