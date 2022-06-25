import React from 'react'
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Header from '../../sections/Header'
import Typography from '@mui/material/Typography';
import LinkedinIcon from '../../assets/linkedin-icon-filled.png';
import FbIcon from '../../assets/linkedin-icon-filled.png';
import GithubIcon from '../../assets/github-icon-filled.png';
import DsIcon from '../../assets/downscroll-outlined.png';

function Home() {
    return (
        <>
            <Grid container spacing={2} className="bg-home-background bg-no-repeat bg-cover bg-fixed h-[110vh] text-pure-white mb-5">
                <Grid item xs={12} md={12}>
                    <Header/>
                </Grid>
                <Grid item xs={12} md={12}>
                    <p className='text-center text-[60px] md:text-[110px] font-medium'>
                        Subhankar Roy
                    </p>
                    <Typography 
                        variant='h5'
                        className="font-semibold text-center capitalize mt-4"
                    >
                        The next gen UI/UX dev. works with clients cross the country.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" mb={4}>
                        <Avatar alt='linkedin' src={LinkedinIcon}/>
                        <Avatar alt='facebook' src={FbIcon}/>
                        <Avatar alt='github' src={GithubIcon}/>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Stack direction="column" spacing={2} alignItems="center" justifyContent="center">
                        <Avatar alt='downscroll' src={DsIcon} className='animate-bounce'/>
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}

export default Home