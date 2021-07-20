import { Button, createStyles, makeStyles, Theme } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import React from "react";
import three from "../../images/three.jpg"
import two from "../../images/two.jpg"
import one from "../../images/one.jpg"




const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },

    text: {
        fontSize: 60,
        textAlign:'center',
        margin: -6
      
    },
    imgone: {
        background: 'green',
        height: 384,
        position: 'absolute',
        top: '9em',
        right: '3em',
    },
    imgtwo: {
        background: 'blue',
        height: 465,
        position: 'absolute',
        right: '17em',
        top: '19em'
       
    },
    imgthree: {
        background: 'red',
        height: 260,
        position: 'absolute',
        right: '28em',
        top: "10em"

}
    
    
  }),
);

export default function Home(){
    const classes = useStyles();

    return(
        <div >
            <Grid container >
                <Grid container xs={4}
                direction="column"                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh',  paddingBottom: "12em" }} 

  >
                    {/* <Box display="flex" justifyContent="center"> */}
                    <h1 className={classes.text}>CREATE</h1>
                    <h1 className={classes.text} style={{color: "#7FA63F", paddingLeft: "90px"}}>YOUR</h1>
                    <h1 className={classes.text} style={{paddingRight:"23px"}} >GREEN</h1>
                    <h1 className={classes.text} style={{paddingLeft:"90px"}}>SPOT</h1>

                    <div className={classes.text} style={{paddingLeft: "20px"}}>
                    <Button variant="contained" style={{background:"#7FA63F", color:"white", fontSize: 23, marginTop:"58px", width:"225px", height:"43px"}} href="#contained-buttons">
                        SHOP NOW
                    </Button>
                    </div>
                    {/* </Box> */}

                   
                </Grid>
                <Grid item xs={8} style={{paddingTop: "5em", paddingLeft: "5em"}}>
                    <div >
                    <img src={three} alt="three" className={classes.imgthree}/>
                  
                    <img src={two} alt="three" className={classes.imgtwo}/>
                    <img src={one} alt="three" className={classes.imgone}/>
                    </div>

                </Grid>
                  
            </Grid>
        </div>
    )
}