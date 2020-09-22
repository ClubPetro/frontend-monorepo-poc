import React from 'react'
import SearchInput from '@clubrepo/club-uikit/src/components/SearchInput'
import './App.css'
import { Grid } from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid item xs={3}>
          <SearchInput />
        </Grid>
      </Grid>
    </div>
  )
}

export default App
