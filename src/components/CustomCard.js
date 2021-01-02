import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
      // maxWidth: 345,
    },
    media: {
      height: 300,
    },
  });
  
  
  export default function CustomCard({title, body, image }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={image}
            title={title}
            data-testid="alt"
          />
          <CardContent>
            <Typography data-testid="title" gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {body}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Compartir
          </Button>
          <Button size="small" color="primary">
            Más detalles
          </Button>
        </CardActions>
      </Card>
    )
  }
