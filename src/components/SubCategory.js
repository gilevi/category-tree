import React, { useState } from "react";


import Category from "./Category";
import CategoryInput from "./CategoryInput";
import ExpandLogo from "./ExpandLogo";
import PopoverInput from "./PopoverInput";
import ControlButtons from "./ControlButtons";
import './App.css';

import { deleteCategoryFromFb,addCategoryToFb, updateCategoryInFb } from "../CategoryServices";

const SubCategory = ({path,category}) => {
    const [subCatVisibilty, setSubCatVisibilty] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const hasSubCategory = category?.subCategory ? true : false;
    const anchorOrigin = {vertical:'bottom',horizontal:'left'}
    const transformOrigin = {vertical: 'top',horizontal: 'left'};

    const expandCategory = () => setSubCatVisibilty(v => !v);
    
    const openPopover = (event) => setAnchorEl(event.currentTarget);
    
    const closePopover = () => setAnchorEl(null)

    const deleteCategory = () => deleteCategoryFromFb(path);


    const open = Boolean(anchorEl);

    const id = open ? 'simple-popover' : undefined;

    const buttons =[{content:'add',action:openPopover},{content:'clear',action:deleteCategory}]

    const onChange =(value)=>{    
        let obj=category;
        obj.label=value; 
        updateCategoryInFb(path,obj);
    }

    const addCategory = (value) =>{
        addCategoryToFb(path,value)
        setAnchorEl(null)
    } 
    

    return (
        <div className="d-tree-node border-0 ">
            <div className="d-flex hoverButtons" >
                {hasSubCategory && ( <ExpandLogo expandCategory={()=> expandCategory()} active={subCatVisibilty} />)}

                <CategoryInput key={category.key} categoryLabel={category.label} categoryObj={category} onChange={onChange} />
                <ControlButtons button={buttons} display={false} />
                <PopoverInput id={id} open={open} anchorEl={anchorEl} onClose={closePopover} 
                    onSave={addCategory} anchorOrigin={anchorOrigin} transformOrigin={transformOrigin} />

                        
                
            </div>

            {
                hasSubCategory && subCatVisibilty && 
                    <div className="d-tree-content">
                        <div className="d-flex d-tree-container flex-column fade-in-image">
                            <Category key={category.subCategorykey} path={path+"/subCategory"} data={category.subCategory} /> 
                        </div>
                    </div>
            }
        </div>
    );
}

export default SubCategory;