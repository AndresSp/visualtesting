import React from 'react'
import Typography from '@material-ui/core/Typography'
import CustomCard from 'components/CustomCard'
import Grid from '@material-ui/core/Grid'
import { Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    flexGrow: 1,
  }
}));

  export default function CustomList({ title, animals, children }) {
    const classes = useStyles();

    return (
        <>
            <Typography gutterBottom variant="h5" component="h2">
                {title}
            </Typography>
            <Box mx={4}>
                <Grid container className={classes.root} spacing={2}>
                {
                    animals ? animals.map((animal) => 
                    <Grid item xs={12} md={3}>
                        {children(animal)}
                    </Grid>
                    ) : 
                    <Typography gutterBottom variant="h5" component="h2">
                        No hay animales disponibles
                    </Typography>
                }
                </Grid>
            </Box>
        </>
    )
  }