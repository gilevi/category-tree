import React from "react";
import { Popover, Typography } from "@mui/material";
import { Form,FormGroup,FormLabel,FormControl, Button } from "react-bootstrap";
import { useState, useEffect } from "react";


const PopoverInput = ({onSave, anchorEl, open, id, onClose, anchorOrigin, transformOrigin}) => {
    const [inputValue,setInputValue] = useState('')
    const padding = {p:2}
    
    const confirmNewCategory =()=> {
      onSave(inputValue);
    }
    
    useEffect(()=>{
      if(anchorEl){
        setInputValue('')
      }
  },[anchorEl])
    
    return (
        <Popover id={id} open={open} anchorEl={anchorEl} anchorOrigin={anchorOrigin} transformOrigin={transformOrigin}>
            <Typography component={'div'} sx={padding}>
              <Form>
                <FormGroup className="mb-3">
                  <FormLabel>New category</FormLabel>
                  <FormControl type="text" placeholder="Type Category name" value={inputValue} onChange={(event)=> setInputValue(event.target.value)} />
                </FormGroup>
                <Button variant="primary" onClick={()=>confirmNewCategory() }> Submit</Button>
                <Button variant="light" onClick={onClose}>Cancel</Button> 
              </Form>     
            </Typography>
        </Popover>
    )
}

export default PopoverInput;