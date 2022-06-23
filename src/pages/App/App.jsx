import React from 'react';
import Header from '../../sections/Header'
import Home from '../../sections/Home'
import Experience from '../../sections/Experience'
import Works from '../../sections/Works'
import Endorsements from '../../sections/Endorsements';
import { StyledEngineProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
function App() {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header/>
            <Home/>
            <Experience/>
            <Works/>
            <Endorsements/>
        </StyledEngineProvider>
    )
}
export default App