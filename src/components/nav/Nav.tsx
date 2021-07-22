import { AppBar, createStyles, makeStyles, Theme, Toolbar, Typography, IconButton, Tabs, Tab} from "@material-ui/core";
import React from "react";
import logo from "../../images/logo.png"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: '#FFFFFF',
      height: 100,
      paddingLeft: 0,
    },
    navbtn: {
      textTransform: 'none',
      fontSize: 18,
      marginRight: 27,

        },
    logo: {
      height: 'auto',
      width: 350,
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
  
      <AppBar position="sticky" elevation={0} className={classes.root}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
        
          <img src={logo} alt="Logo" className={classes.logo}/>
          </Typography>
           {/* <Button className={classes.navbtn}>New Arrivals</Button>
           <Button className={classes.navbtn}>Best Sellers</Button>
           <Button className={classes.navbtn}>About Us</Button> */}

           <Tabs
           className={classes.navbtn}
            // value={value}
            color="#000000"
            textColor="secondary"
            // onChange={handleChange}
            aria-label="disabled tabs example">
             <Tab label="New Arrivals"/>
             <Tab label="Best Sellers"/>
             <Tab label="About Us"/>

           </Tabs>
            {/* <Button className={classes.navbtn}>Cart</Button> */}
            <IconButton aria-label="cart" style={{color: "black"}}>
              <ShoppingCartIcon/>
            </IconButton>
        </Toolbar>
      </AppBar>

    )
       
};