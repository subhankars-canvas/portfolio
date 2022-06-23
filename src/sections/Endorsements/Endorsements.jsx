import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DividerComponent from '../../components/DividerComponent'
import Box from '@mui/material/Box';

function Endorsements() {
    const backgroundStyleEndorment = {
        background: 'linear-gradient(45deg, #314955 75%, #ed4747 25%)'
    }
    return(
        <Grid container spacing={2}>
            <Grid item xs="12" md="12">
                <Typography 
                    variant='h5'
                    className="my-4 font-medium text-center font-['Oxygen'] text-primary"
                >
                    Do not just believe in my words let's have a look what my peer says.
                </Typography>
                <DividerComponent color="#314955"/>
            </Grid>
            <Grid item xs="12" md="4" className="text-center">
                <Box style={{...backgroundStyleEndorment}} className="flex justify-between text-[#fff] text-left font-['Oxygen'] font-light border border-primary rounded border-t-[4px] border-r-[4px] p-[8px] m-[4px]">
                    <div>
                        <p className='text-[20px]'>Mayank Garg</p>
                        <p className="text-[15px] italic bg-secondary p-[2px] mt-[1px] font-thin font-['Oxygen']">IT Analyst, Tata Consultancy Services</p>

                        <p>Subhankar worked with me as a React.js UI developer where he created multiple applications from scratch considering all kinds of scenarios. He used to guide few junior resources as well and manage them as Tech Lead. He has good problem solving skills and used to develop applications/features rapidly.</p>
                    </div>
                    <div className="h-[70px] md:h-[68px] w-[65%] md:w-full border border-primary border-[4px] rounded-full overflow-hidden">
                        <img src="https://media-exp1.licdn.com/dms/image/D4D35AQH5V-SC7lAxwA/profile-framedphoto-shrink_800_800/0/1648301349166?e=1656622800&v=beta&t=Wrjy6OW3sCEF1UlsMkco_yrcgDZznE4mnF1sWFpz5_s" className="h-full w-full" alt="Mayank Image"/>
                    </div>
                </Box>
            </Grid>
            <Grid item xs="12" md="4" className="text-center">
                <Box style={{...backgroundStyleEndorment}} className="flex justify-between text-[#fff] text-left font-['Oxygen'] font-light border border-primary rounded border-t-[4px] border-r-[4px] p-[8px] m-[4px]">
                    <div>
                        <p className='text-[20px]'>Nisha Bhatter</p>
                        <p className="text-[15px] italic bg-secondary p-[2px] mt-[1px] font-thin font-['Oxygen']">Application Developer (MuleSoft), Accenture. Ex-Tcser</p>

                        <p>I worked with Subhankar in the same account but different teams. He is a great UI developer and used to play an important part in his team. He is a good team player with excellent leadership qualities. Wish you all the best for your future.</p>
                    </div>
                    <div className="h-[75px] md:h-[75px] w-[58%] md:w-[90%] border border-primary border-[4px] rounded-full overflow-hidden">
                        <img src="https://thumbs.dreamstime.com/b/female-avatar-icon-flat-style-female-user-icon-cartoon-woman-avatar-pink-hair-vector-stock-91462795.jpg" className="h-full w-full" alt="Mayank Image"/>
                    </div>
                </Box>
            </Grid>
            <Grid item xs="12" md="4" className="text-center">
                <Box style={{...backgroundStyleEndorment}} className="flex justify-between text-[#fff] text-left font-['Oxygen'] font-light border border-primary rounded border-t-[4px] border-r-[4px] p-[8px] m-[4px]">
                    <div>
                        <p className='text-[20px]'>Taniya Mistry</p>
                        <p className="text-[15px] italic bg-secondary p-[2px] mt-[1px] font-thin font-['Oxygen']">BRM, Tier5 Technology Solutions Pvt. Ltd.</p>
                        <p>Subhankar worked with me as a React.js UI developer where he created multiple applications from scratch considering all kinds of scenarios. He used to guide few junior resources as well and manage them as Tech Lead. He has good problem solving skills and used to develop applications/features rapidly.</p>
                    </div>
                    <div className="h-[70px] md:h-[68px] w-[65%] md:w-full border border-primary border-[4px] rounded-full overflow-hidden">
                        <img src="https://media-exp1.licdn.com/dms/image/C5603AQFgn0aztiTSNQ/profile-displayphoto-shrink_800_800/0/1652279371619?e=1661385600&v=beta&t=1i0eqozsymvn2_lS4XpFe-v1Oba21l8hhCnr1d8y8VM" className="h-full w-full" alt="Mayank Image"/>
                    </div>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Endorsements