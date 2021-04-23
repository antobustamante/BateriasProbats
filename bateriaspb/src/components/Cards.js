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

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    container: {
      display: 'flex'
    }
  });

  export default function MediaCard({data}) {
    const classes = useStyles();
  
    return (
      <div className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  title={data.nombre}
                  image={data.img}
                  height="100"
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
                <Button size="small" color="primary">
                  Agregar al carrito
                  <CounterContainer/>
                </Button>
                <Button size="small" color="primary">
                  Detalles
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>

      
    );
  }