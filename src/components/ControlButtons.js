import React from "react";
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from "@mui/icons-material/Clear";
import Button from '@mui/material/Button';


const ControlButtons = ({button,display}) => {

    const addMainCategory = (<Button variant="outlined"> Add category</Button>)

    const removeMainCategory = (<Button variant="outlined" color="error"> Remove all</Button>)

    const BUTTON_CONTENT = {add:<AddIcon/>,clear: <ClearIcon/>, 
                            addMainCategory:addMainCategory ,removeAll:removeMainCategory };

    const buttonList=Array.isArray(button)? button: [button]

    const showButtons = display ? 'showButtons': 'hideButtons'

    return(
        <div className={showButtons}>
            {buttonList.map((button,index)=>
                   <div className="iconButtonHover" key={index} onClick={button.action}>
                        {BUTTON_CONTENT[button.content]}
                    </div> 
             )}
        </div>
    )

}

export default ControlButtons;