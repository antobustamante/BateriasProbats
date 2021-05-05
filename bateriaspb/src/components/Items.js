import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CounterContainer from '../containers/CounterContainer';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      width: '45vh',
      transitionDuration: '0.3s',
      height: 'auto',
      marginBottom: "3vh"
    },
    media: {
      height: 220,
    },
    containerdiv: {
    display: "flex",
    width: "100%",
    flexWrap: 'wrap',
    justifyContent: "space-evenly"
    }

});

  export default function MediaCard({dataInput}) {
    
    
    const classes = useStyles();
  
    return (
      <div className={classes.containerdiv}>
        {
        dataInput.map((data) => {
          
          return(
            
            <Grid key={data.id} data={data}>
              <Grid item md={4}>
                <Card className={classes.root}>
                  <CardActionArea>
                  <Link to={`/products/${data.id}`}>
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
                    </Link>
                  </CardActionArea>
                  {/* <CardActions>
                    <Button variant="contained" size="small" color="primary">
                      Agregar al carrito
                    </Button> 
                    <CounterContainer stock={data.stock}/>
                  </CardActions> */}
                </Card>
            </Grid>
          </Grid>
          

          )
        })
        }
      </div>

      
    );
  }