import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CounterContainer from '../containers/CounterContainer';
import Grid from '@material-ui/core/Grid';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles({
    root: {
      width: '30vw',
      transitionDuration: '0.3s',
      height: '40vw',
      justifyContent: 'space-between',
      marginBottom: "2vh"
    },
    media: {
      height: 220,
    },
    container: {
    display: "flex",
    width: "100%",
    flexWrap: 'wrap',
    justifyContent: "space-between"
    }

});

  export default function MediaCard({dataInput}) {
    
    const classes = useStyles();
  
    return (
      <div className={classes.container}>
        {
        dataInput.map((data) => {
          
          return(
            
            <Grid key={data.id} data={data}>
              <Grid item md={4}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      title={data.nombre}
                      image={data.img}
                      className={classes.media}
                      alt={data.nombre}>
                    </CardMedia>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {data.nombre}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {data.tipo}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button variant="contained" size="small" color="primary">
                      Agregar al carrito
                    </Button>
                    <CounterContainer/>
                    <InfoIcon size="small" color="action"/>
                  </CardActions>
                </Card>
            </Grid>
          </Grid>
          

          )
        })
        }
      </div>

      
    );
  }