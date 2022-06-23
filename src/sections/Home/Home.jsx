import React from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

function Home() {
    return (
        <>
            <Grid container spacing={2} className="bg-dark-blue text-pure-white -mb-19">
                <Grid item xs={12} md={5}>
                    <p className='font-light text-7xl m-4 p-4'>Subhankar Roy.</p>
                    <p className='font-light mx-6 p-2 capitalize'>A 6+ Years experienced UI/UX pro. Open to learn, never settle, &#10084;&#65039; R&D. Worked with clients cross the country.Agile Expert.Certified React JS developer. Spot lighted and awarded Many times for leadership skills. Love to drive, passionate for badminton. </p>
                    <Button variant="contained" className="bg-secondary hover:bg-[red] m-6">Let's Talk</Button>
                </Grid>
                <Grid item xs={12} md={7}>
                    <img src='https://cdn.mos.cms.futurecdn.net/2oAg4jv2w9rstTsMVmGdCU.jpg'/>
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#314955" fill-opacity="1" d="M0,64L48,96C96,128,192,192,288,197.3C384,203,480,149,576,112C672,75,768,53,864,80C960,107,1056,181,1152,224C1248,267,1344,277,1392,282.7L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                </Grid>
            </Grid>
        </>
    )
}

export default Home