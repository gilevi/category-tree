import React, { useState } from "react";
import { EditText } from "react-edit-text";

const CategoryInput = ({id, onChange, categoryLabel}) => {

    const [inputName,setInputName] = useState(categoryLabel)
    
    const handleChange = (event) => {
        setInputName(event);
        onChange(event)
    }

    return(
        <div className="d-tree-head"> 
            <EditText id={id} value={inputName} style={{cursor:"pointer"}} onChange={(event)=> handleChange(event)}/>
        </div>
    )
}

export default CategoryInput;