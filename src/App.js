import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import CustomList from 'components/CustomList';


export default function App() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Visual Testing Demo</Typography>
        </Toolbar>
      </AppBar>
      <CustomList title="Reptiles"/>
    </div>
  )
}
