import { AppBar, createStyles, makeStyles, Theme, Toolbar} from "@material-ui/core";
import React from "react";
import logo from "../../images/logo.png"
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: '#FFFFFF',
    },
    title: {
      flexGrow: 1,
    },
    logo: {
        maxWidth: 260,
        height: 200,
    }
  }),
);
export default function Nav(){
    const classes = useStyles();
    return(
      
       <AppBar position="static" className={classes.root}>
       <Toolbar >
         <img src={logo} alt="Logo" className={classes.logo}/>
       </Toolbar>
     </AppBar>

    )
       
};