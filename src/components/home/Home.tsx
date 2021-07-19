import { Button, createStyles, makeStyles, Paper, Theme } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    text: {
        fontSize: 51,
        textAlign:'center',
        margin: -10
      
    }
    
  }),
);

export default function Home(){
    const classes = useStyles();

    return(
        <div>
            <Grid container spacing={3}>
                <Grid item xs={4} style={{marginTop:"103px"}}>
                    <h1 className={classes.text}>CREATE</h1>
                    <h1 className={classes.text} style={{color: "#7FA63F", paddingLeft: "70px"}}>YOUR</h1>
                    <h1 className={classes.text} style={{paddingRight:"23px"}} >GREEN</h1>
                    <h1 className={classes.text} style={{paddingLeft:"70px"}}>SPOT</h1>
                    <h1 className={classes.text} >
                    <Button variant="contained" style={{background:"#7FA63F", color:"white", fontSize: 23, marginTop:"51px", width:"200px", height:"43px"}} href="#contained-buttons">
                        SHOP NOW
                    </Button>
                    </h1>

                   
                </Grid>
                <Grid item xs={8}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
                  
            </Grid>
        </div>
    )
}