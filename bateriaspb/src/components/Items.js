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
import {Link} from 'react-router-dom';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const useStyles = makeStyles({
    root: {
      width: '45vh',
      transitionDuration: '0.3s',
      height: '50vh',
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
                    <CounterContainer stock={data.stock}/>
                    {['right'].map((placement) => (
                    <OverlayTrigger
                      key={placement}
                      placement={placement}
                      overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          Detalle del producto
                        </Tooltip>
                      }
                    >
                      <Link to={`/products/${data.id}`}>
                      <InfoIcon size="small" color="action"/>
                      </Link>
                    </OverlayTrigger>
                  ))}
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