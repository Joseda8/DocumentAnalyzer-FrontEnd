import React, { useEffect } from 'react';
import { useLocation, Link } from "react-router-dom";
import UploadFiles from "./upload-files/index";
import CenteredContent from "../auth/auth-background/CenteredContent";
import FilesList from "./results-files/index";
import EmployeeList from "./results-references/index";

const FilesView = props => {

    const location = useLocation();

    useEffect(() => {
        console.log("PATHNAME");
        console.log(location.pathname);
        console.log("SEARCH");
        console.log(location.search);
        console.log("INFO"); 
        console.log(location.state.detail);
     }, [location]);

    return (
        <>
            <Link to={{ pathname: '/'}}> Logout </Link>
            <CenteredContent numCol="4" numRow="justify-content-center align-items-center h-50">
                <UploadFiles props={location.state.detail}/>
            </CenteredContent>
            <CenteredContent numCol="8" numRow="justify-content-center align-items-center h-50">
                <FilesList />
            </CenteredContent>
            <CenteredContent numCol="8" numRow="justify-content-center align-items-center h-50">
                <EmployeeList />
            </CenteredContent>
            <hr></hr>
        </>

    );
}

export default FilesView;
