import React,{useState,useEffect} from 'react';
import { Container } from '@mui/material';
import { Typography,Box,Stack } from '@mui/material';

import Category from './Category';
import PopoverInput from "./PopoverInput";
import ControlButtons from "./ControlButtons";
import Header from './Header';
import Footer from './Footer';
import { addCategoryToFb, deleteCategoryFromFb } from '../CategoryServices';
import { getValue } from "../firebaseServices";
import './App.css';


const App = () => {
    
    const [data,setData] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const [initialPath, setInitialPath] = useState('/') 


    useEffect(()=>{
        getValue(setData); 
    },[])

    useEffect(()=>{
        let currentPath = '';
        currentPath = data? `/${data.length}`:`/0`;
        setInitialPath(currentPath)
        
    },[data])

    const deleteCategory = () => deleteCategoryFromFb('');

    const openPopover = (event) => setAnchorEl(event.currentTarget);
    
    const closePopover = () => setAnchorEl(null)

    const open = Boolean(anchorEl);

    const id = open ? 'simple-popover' : undefined;

    const anchorOrigin = {vertical:'bottom',horizontal:'left'}

    const transformOrigin = {vertical: 'top',horizontal: 'left'};

    const buttons =[{content:'addMainCategory',action:openPopover},{content:'removeAll',action:deleteCategory}]

    const addCategory = (value) =>{
        let length = data!== null ? data.length: 0;
        let objVal = {key:`${length}`,label: value};
        addCategoryToFb(initialPath,objVal)
        setAnchorEl(null)
    } 

    const boxStyle ={
        pt: 6,
        pb: 6
    }

     return( 
            <div>
                <Header />
                <main>
                    <Box sx={boxStyle}>
                        <Container>
                            <Box ml={15}>
                                <Stack sx={{ pt: 4}} direction="row" spacing={2}>
                                    <ControlButtons button={buttons} display={true} />
                                    <PopoverInput id={id} open={open} anchorEl={anchorEl} onClose={closePopover} 
                                    onSave={addCategory} anchorOrigin={anchorOrigin} transformOrigin={transformOrigin}/>
                                </Stack>
                                <Typography gutterBottom variant="h5" component="h2">
                                    <Category data={data}/>
                                </Typography>
                            </Box>
                        </Container>
                    </Box>
                </main>
                <Footer />
            </div>
    );
    }


export default App;