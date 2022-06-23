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
            <Grid container spacing={2} className="bg-primary text-pure-white">
                <Grid item xs={12} md={12}>
                    <Typography 
                        variant='h5'
                        className="m-1 mb-2 font-medium text-center font-['Oxygen']"
                    >
                        Worked with clients accross the globe. Mostly UK, US & Europe. As per the terms of customer I should not share the original URLs but below are the concepts where I contributed as a developer.
                    </Typography>
                    <DividerComponent color="#ed4747"/>
                </Grid>
                <Grid item xs={12} md={12} className="overflow-hidden">
                    <Slider {...settings}>
                        { 
                            getProjectDetails().map((el) => {
                                return (
                                    <Card sx={{ maxWidth: 400 }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={el.projectImage}
                                                alt="project image"
                                            />
                                            <CardContent className="bg-[url('https://i.pinimg.com/originals/6d/35/ea/6d35ea77a917bc57c35bee326081adb5.png')] bg-[left_19%]">
                                                <Typography gutterBottom variant="h5" component="div">
                                                    <div className='flex justify-between'>
                                                        <div className='text-xl my-2 font-medium font-["Oxygen"] text-primary'>{el.projectName}</div>
                                                        <div className='text-sm my-2 font-sm bg-secondary text-[#fff] py-1 px-2 capitalize rounded-2xl'>
                                                            {el.projectDomain}
                                                        </div>
                                                    </div>
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" className="font-['Oxygen'] font-semibold">
                                                    {el.projectDescription}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions className="bg-[#f4e2f2]">
                                            <Button variant="contained" className="bg-secondary hover:bg-[red]">Learn More</Button>
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
                        className="mb-2 font-light text-center font-['Oxygen']"
                    >
                        Domains, I am experienced with
                    </Typography>
                    <Stack direction="row" justifyContent="center" alignItems="center" spacing={1} m={2}>
                        {
                            getProjectDomain().map((el) => {
                                return (
                                    <Chip label={el} className="border-1 bg-secondary hover:bg-[red] text-[#fff]"/>
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