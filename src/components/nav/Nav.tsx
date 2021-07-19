import { AppBar, Button, createStyles, makeStyles, Theme, Toolbar, Typography} from "@material-ui/core";
import React from "react";
import logo from "../../images/logo.png"
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: '#FFFFFF',
      height: 100,
      paddingLeft: 0,
    },
    navbtn: {
      textTransform: 'none',
      fontSize: 15,

        },
    logo: {
      height: 'auto',
      width: 300,
      marginLeft: -30,
        },
    title: {
          flexGrow: 1,
        },
    
    
  }),
);
export default function Nav(){
    const classes = useStyles();
    return(
  
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
        
          <img src={logo} alt="Logo" className={classes.logo}/>
          </Typography>
           <Button className={classes.navbtn}>New Arrivals</Button>
           <Button className={classes.navbtn}>Best Sellers</Button>
           <Button className={classes.navbtn}>About Us</Button>
           <Button className={classes.navbtn}>Cart</Button>
        </Toolbar>
      </AppBar>

    )
       
};