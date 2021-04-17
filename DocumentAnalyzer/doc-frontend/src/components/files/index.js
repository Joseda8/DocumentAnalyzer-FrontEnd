import React from 'react';
import { Link } from "react-router-dom";
import UploadFiles from "./upload-files/index";
import CenteredContent from "../auth/auth-background/CenteredContent";
import FilesList from "./results-files/index";
import EmployeeList from "./results-references/index";
import { AuthService } from "../auth/auth-service";

const FilesView = props => {

    //const location = useLocation();

    /*useEffect(() => {
        console.log("PATHNAME");
        console.log(location.pathname);
        console.log("SEARCH");
        console.log(location.search);
        console.log("INFO"); 
        console.log(location.state.detail);
     }, [location]);*/

    return (
        <>
            <Link onClick={AuthService.logout} to={{ pathname: '/'}}> Logout </Link>
            <div class="my-3">
                <CenteredContent numCol="4" numRow="justify-content-center align-items-center h-50">
                    <UploadFiles /*props={location.state.detail}*//>
                </CenteredContent>
            </div>
            <div class="my-3">
                <CenteredContent numCol="8" numRow="justify-content-center align-items-center h-50">
                    <FilesList />
                </CenteredContent>
            </div>
            <div class="my-3">
                <CenteredContent numCol="8" numRow="justify-content-center align-items-center h-50">
                    <EmployeeList />
                </CenteredContent>
            </div>
            <hr></hr>
        </>

    );
}

export default FilesView;
