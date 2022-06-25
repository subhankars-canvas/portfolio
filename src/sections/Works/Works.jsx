import React from 'react'
import Grid from '@mui/material/Grid';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { getCaraouselSettings, getProjectDetails, getProjectDomain } from '../../utils/utils'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DividerComponent from '../../components/DividerComponent'

function Works() {
    const {...settings} = getCaraouselSettings()
    return (
        <>
            <Grid container spacing={2} className="bg-white text-pure-white">
                <Grid item xs={12} md={12}>
                    <Typography 
                        variant='h5'
                        className="mt-8 mb-2 font-medium text-center text-primary"
                    >
                        Worked with clients accross the globe. Mostly UK, US & Europe. As per the terms of customer I should not share the original URLs but below are the concepts where I contributed as a developer.
                    </Typography>
                    <DividerComponent color="#161e21"/>
                </Grid>
                <Grid item xs={12} md={12} className="overflow-hidden">
                    <Slider {...settings}>
                        { 
                            getProjectDetails().map((el) => {
                                return (
                                    <Card className="custom-card">
                                        <CardActionArea>
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    <div className='flex justify-between'>
                                                        <div className='text-xl my-2 font-medium text-primary'>{el.projectName}</div>
                                                        
                                                        <Chip label={el.projectDomain} variant="outlined" className='border-1 border-primary'/>
                                                    </div>
                                                </Typography>

                                                <Typography variant="body2" color="text.secondary" className="font-semibold fixed-height-content">
                                                    {el.projectDescription}
                                                </Typography>

                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button variant="contained" sx ={{
                                                border: '2px solid #161e21',
                                                background: '#161e21 !important',
                                                color: '#fff',
                                                borderRadius: 0,
                                                fontWeight: 600,
                                                '&:hover': {
                                                    border: '2px solid #161e21',
                                                    background: '#fff !important',
                                                    color: '#161e21'
                                                }
                                            }}>Read More</Button>
                                        </CardActions>
                                    </Card>
                                )
                            })
                        }
                    </Slider>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Typography 
                        variant='h6'
                        className="mb-2 font-light text-center"
                    >
                        Domains, I am experienced with
                    </Typography>
                    <Stack direction="row" justifyContent="center" alignItems="center" spacing={1} m={2} mb={4}>
                        {
                            getProjectDomain().map((el) => {
                                return (
                                    <Chip label={el} variant="outlined" className="border-1 border-primary"/>
                                )
                            })
                        }                  
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}

export default Works