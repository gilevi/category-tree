import { AppBar, Toolbar, Typography, Container, makeStyles } from "@material-ui/core";

  const useStyles = makeStyles(() => ({
    background:{
        background:'#f5ba4d',
        position:"fixed",
        bottom:0,
        textAlign: 'center'
    },
    title: {
      flexGrow: 1,
      textAlign: 'center',
    },
  
  }));

   const Footer = () =>{
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.background}>
          <Container>
            <Toolbar>
              <Typography variant="body1" color="inherit" className={classes.title}>
                © By Gil Levi 2021 
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}
export default Footer;