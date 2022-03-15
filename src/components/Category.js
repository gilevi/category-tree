import React from "react";
import { List, ListItem } from "@mui/material";

import SubCategory from "./SubCategory";

const Category = ({data =[], path=''}) => {

    try{
        return(
            <List>
                <div className="d-tree" > 
                    <ul className="d-flex d-tree-container flex-column">
                        {data.length ?data.map((category,index)=>{
                        return(  
                            <ListItem key={index} disablePadding>
                                <SubCategory key={category.key} category={category} path={path? path +'/' + index: '/'+index} /> 
                            </ListItem>
                        )}):""}
                    </ul>
                </div>
            </List>
        );
        }
        catch(e){
            return <div></div>
        }

}

export default Category;