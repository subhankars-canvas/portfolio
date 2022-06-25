import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { getJobDetails, getTechs } from '../../utils/utils'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import DividerComponent from '../../components/DividerComponent'

function Experience() {
    return (
        <>
            <Grid container spacing={2} className="bg-primary">
                <Grid item xs="12">
                    <Typography 
                        variant='h5'
                        className="mt-8 mb-2 font-light text-center text-white"
                    >
                        A full stack developer experieced in javascript frameworks as well as in backend techs like PHP, Laravel, MySql. Self made journey begins with Tier5 Technology Solutions Pvt. Ltd and right now at Larsen & Toubro group of Company.
                    </Typography>
                    <DividerComponent color="#fff"/>
                </Grid>
                {
                    getJobDetails().map((el,i, arr) => {
                        return (
                        <Grid item xs={12} md={4} className='px-4'>
                            <Card className={el.isCurrent ? 'border-r-4 border-b-4 border-secondary/[0.5] rounded-none' : 'rounded-none'}>
                                <CardContent className='relative'>
                                    {
                                        el.isCurrent && <div className='absolute -right-7 -bottom-9 bg-secondary/[0.5] text-[#fff] p-2 pt-3 rotate-90 rounded uppercase font-light text-sm'>Current</div>
                                    }
                                    <div className='flex justify-between'>
                                        <div className='text-xl my-2 font-medium text-primary'>{el.companyName}</div>
                                        <div className='bg-no-repeat bg-center h-14 w-14'>
                                            <img src={el.companyLogo} alt="logo"/>
                                        </div>
                                    </div>
                                    <Typography variant="body2" color="text.secondary" className="font-semibold fixed-height-content">{el.role}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant="contained" sx ={{
                                        border: '2px solid #161e21',
                                        background: 'transparent',
                                        color: '#161e21',
                                        borderRadius: 0,
                                        fontWeight: 600,
                                        '&:hover': {
                                            border: '2px solid #161e21',
                                            background: '#161e21',
                                            color: '#fff'
                                        }
                                    }}>Read More</Button>
                                </CardActions>
                            </Card>
                        </Grid>)
                    })
                }
                <Grid item xs={12} md={12}>
                    <Typography 
                        variant='h6'
                        className="m-1 mb-2 font-light text-center text-white"
                    >
                        Techs I am aware of.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" mb={6}>
                        {
                            getTechs().map((el, i, arr) => {
                                return (
                                    <Tooltip title={el.techName} arrow>
                                        <Avatar alt={el.techName} src={el.icon} className="border-2"/>
                                    </Tooltip>
                                )
                            })
                        }
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}
export default Experience