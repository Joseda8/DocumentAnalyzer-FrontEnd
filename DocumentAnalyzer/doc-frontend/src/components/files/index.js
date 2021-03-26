import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import UploadFiles from "./upload-files/index";
import CenteredContent from "../auth/auth-background/CenteredContent";
import FilesList from "./results-files/index";

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
            <CenteredContent numCol="4" numRow="justify-content-center align-items-center h-50">
                <UploadFiles props={location.state.detail}/>
            </CenteredContent>
            <CenteredContent numCol="8" numRow="justify-content-center align-items-center h-50">
                <FilesList />
            </CenteredContent>
            <hr></hr>
        </>

    );
}

export default FilesView;

/*
<Link to={{
    pathname: '/template',
    search: '?query=abc',
    state: { detail: response.data }
}}> My Link </Link>
*/ 