import React from 'react';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import UploadFiles from "./upload-files/index";

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

        <div>
            <h1>Hello Files!</h1>
            <UploadFiles props={location.state.detail}/>
        </div>

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