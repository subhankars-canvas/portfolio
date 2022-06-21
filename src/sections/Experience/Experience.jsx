import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { getJobDetails, getTechs } from '../../utils/utils'
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';


const ColorButton = styled(Button)(({ theme }) => ({
    color: '#fff',
    backgroundColor: '#ed4747',
    '&:hover': {
      backgroundColor: 'red',
    },
  }));
function Experience() {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs="12">
                    <Typography 
                        variant='h5'
                        sx={{
                            mb: 4,
                            fontFamily: 'Oxygen',
                            fontWeight: '300',
                            textAlign: 'center',
                        }}
                    >
                        A full stack developer experieced in Javascript frameworks as well as in backend techs like PHP, Laravel, MySql. Self made journey begins with Tier5 Technology Solutions Pvt. Ltd and right now at Larsen & Toubro group of Company.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={1} className="p-4">
                {
                    getJobDetails().map((el,i, arr) => {
                        return (
                        <Grid item xs={4}>
                            <Card className="border-2 border-[#bdbfc3]">
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={el.image}
                                    alt={el.imgAlt}
                                    className={'border-b-2'}
                                >
                                </CardMedia>
                                <CardContent className='relative'>
                                    {
                                        el.isCurrent && <div className='absolute -right-7 -top-16 bg-secondary text-[#fff] p-2 pt-3 rotate-90 rounded uppercase font-thin text-sm animate-pulse'>Current</div>
                                    }
                                    <div className='flex justify-between'>
                                        <div className='text-xl my-2 font-medium font-oxygen text-primary'>{el.companyName}</div>
                                        <div className='bg-no-repeat bg-center h-14 w-14'>
                                            <img src={el.companyLogo} alt="logo"/>
                                        </div>
                                    </div>
                                    <Typography variant="body2" color="text.secondary" className='font-inherit'>{el.role}</Typography>
                                </CardContent>
                                <CardActions>
                                    <ColorButton variant="contained">Learn More</ColorButton>
                                </CardActions>
                            </Card>
                        </Grid>)
                    })
                }
            </Grid>
            <Grid container spacing={2} className="p-4">
                <Grid item xs="12">
                    <Typography 
                        variant='h6'
                        sx={{
                            mb: 4,
                            fontFamily: 'Oxygen',
                            fontWeight: '300',
                            textAlign: 'center',
                        }}
                    >
                        Techs I am aware of.
                    </Typography>
                </Grid>
                <Grid item xs="12">
                    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
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