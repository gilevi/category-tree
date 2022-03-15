import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './App.css';

const ExpandLogo = ({expandCategory,active}) => {
const toggleLogo = active? "active": "";

    return(
        <div className={`d-inline d-tree-toggler ${toggleLogo}`}>
            <FontAwesomeIcon icon={"caret-right"} onClick={()=> expandCategory()} style ={{cursor:"pointer"}}/>
        </div>    
        )
}

export default ExpandLogo;