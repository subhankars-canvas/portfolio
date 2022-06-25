import React from 'react';
import Home from '../../sections/Home'
import Experience from '../../sections/Experience'
import Works from '../../sections/Works'
import Endorsements from '../../sections/Endorsements';
import Footer from '../../sections/Footer'
import { StyledEngineProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
    const theme = createTheme({
        typography: {
         "fontFamily": `Montserrat, sans-serif`,
        }
     });

    return (
        <div>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <ThemeProvider theme={theme}>
                    <Home/>
                    <Experience/>
                    <Works/>
                    <Endorsements/>
                    <Footer/>
                </ThemeProvider>
            </StyledEngineProvider>
        </div>
    )
}
export default App