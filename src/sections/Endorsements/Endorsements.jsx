import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DividerComponent from '../../components/DividerComponent'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';

function Endorsements() {
    return(
        <Grid container spacing={2} className="bg-[#e6e6e6]">
            <Grid item xs="12" md="12">
                <Typography 
                    variant='h5'
                    className="my-4 font-medium text-center text-secondary"
                >
                    Do not just believe in my words let's have a look what my peer says.
                </Typography>
                <DividerComponent color="#223732"/>
            </Grid>
            <Grid item xs="12" md="12" className="text-center">
                <Box>
                    <div className="text-center relative mt-20">
                        <Avatar 
                            alt="Remy Sharp" 
                            src="https://media-exp1.licdn.com/dms/image/D4D35AQH5V-SC7lAxwA/profile-framedphoto-shrink_800_800/0/1648301349166?e=1656622800&v=beta&t=Wrjy6OW3sCEF1UlsMkco_yrcgDZznE4mnF1sWFpz5_s" 
                            sx={{
                                width: 56, height: 56, position: 'absolute', left: '48%', bottom: '3%'
                            }}
                        />
                    </div>
                        <p className='text-xl'>Mayank Garg</p>
                        <p className="italic m-2">IT Analyst, Tata Consultancy Services</p>
                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                        <p className="text-center font-medium text-lg p-4">Subhankar worked with me as a React.js UI developer where he created multiple applications from scratch considering all kinds of scenarios. He used to guide few junior resources as well and manage them as Tech Lead. He has good problem solving skills and used to develop applications/features rapidly.</p>
                </Box>
            </Grid>
            <Grid item xs="12" md="12" className="text-center">
                <Box>
                    <div className="text-center relative mt-20">
                        <Avatar 
                            alt="Remy Sharp" 
                            src="https://thumbs.dreamstime.com/b/female-avatar-icon-flat-style-female-user-icon-cartoon-woman-avatar-pink-hair-vector-stock-91462795.jpg" 
                            sx={{
                                width: 56, height: 56, position: 'absolute', left: '48%', bottom: '3%'
                            }}
                        />
                    </div>
                        <p className='text-xl'>Nisha Bhatter</p>
                        <p className="italic m-2">Application Developer (MuleSoft), Accenture. Ex-Tcser</p>
                        <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                        <p className="text-center font-medium text-lg p-4">I worked with Subhankar in the same account but different teams. He is a great UI developer and used to play an important part in his team. He is a good team player with excellent leadership qualities. Wish you all the best for your future.</p>
                </Box>
            </Grid>
            <Grid item xs="12" md="12" className="text-center">
                <Box>
                    <div className="text-center relative mt-20">
                        <Avatar 
                            alt="Remy Sharp" 
                            src="https://media-exp1.licdn.com/dms/image/C5603AQFgn0aztiTSNQ/profile-displayphoto-shrink_800_800/0/1652279371619?e=1661385600&v=beta&t=1i0eqozsymvn2_lS4XpFe-v1Oba21l8hhCnr1d8y8VM" 
                            sx={{
                                width: 56, height: 56, position: 'absolute', left: '48%', bottom: '3%'
                            }}
                        />
                    </div>
                        <p className='text-xl'>Taniya Mistry</p>
                        <p className="italic m-2">Business Relationship Manager, Tier5 LLC.</p>
                        <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
                        <p className="text-center font-medium text-lg p-4">Subhankar worked with me as a React.js UI developer where he created multiple applications from scratch considering all kinds of scenarios. He used to guide few junior resources as well and manage them as Tech Lead. He has good problem solving skills and used to develop applications/features rapidly.</p>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Endorsements