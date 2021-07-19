import { Button, createStyles, makeStyles, Paper, Theme } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import React from "react";
import three from "../../images/three.jpg"
import two from "../../images/two.jpg"



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
      
    },
    imgone: {
        background: 'green'
    },
    imgtwo: {
        background: 'blue',
        height: '370px',
        width: '246px'


    },
    imgthree: {
        background: 'red',
        height: 360,
        width: 436


    },
    textSide: {
        // marginTop:"103px", 
        // paddingLeft: "74px", 
        dispaly: 'flex', 
justifyContent: 'center'    }
    
    
  }),
);

export default function Home(){
    const classes = useStyles();

    return(
        <div>
            <Grid container spacing={3}>
                <Grid container xs={4}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }} 

  >
                    {/* <Box display="flex" justifyContent="center"> */}
                    <h1 className={classes.text}>CREATE</h1>
                    <h1 className={classes.text} style={{color: "#7FA63F", paddingLeft: "70px"}}>YOUR</h1>
                    <h1 className={classes.text} style={{paddingRight:"23px"}} >GREEN</h1>
                    <h1 className={classes.text} style={{paddingLeft:"70px"}}>SPOT</h1>
                    <h1 className={classes.text} >
                    <Button variant="contained" style={{background:"#7FA63F", color:"white", fontSize: 23, marginTop:"51px", width:"200px", height:"43px"}} href="#contained-buttons">
                        SHOP NOW
                    </Button>
                    </h1>
                    {/* </Box> */}

                   
                </Grid>
                <Grid item xs={8}>
                    <Paper className={classes.paper}>xs=6</Paper>
                    <div>
                        <img src={three} alt="three" className={classes.imgthree}/>
                    </div>
                    <div>
                    <img src={two} alt="three" className={classes.imgtwo}/>
                    </div>
                    <div></div>

                </Grid>
                  
            </Grid>
        </div>
    )
}