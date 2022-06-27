import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DividerComponent from '../../components/DividerComponent';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Footer.css';
import FormControl from '@mui/material/FormControl';
import CallIcon from '@mui/icons-material/Call';
import DirectionsIcon from '@mui/icons-material/Directions';
import { styled } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

  const CssTextField = styled(TextField)({
    '& label': {
        color: '#fff',
    },
    '& label.Mui-focused': {
      color: '#218f48',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#fff',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        color: 'red !important',
        border: 'transparent',
        borderRadius: 0,
        borderBottom: '1px solid #fff',
      },
      '&:hover fieldset': {
        borderColor: '#fff',
      },
      '&.Mui-focused fieldset': {
        border: 'transparent',
        borderRadius: 0,
        borderBottom: '1px solid #fff',
        color: '#fff',
      },
    },
  });
function Footer() {
    return (
        <Grid container spacing={2} className="bg-primary">
            <Grid item xs="12" md="12">
                <Typography 
                    variant='h5'
                    className="my-4 font-medium text-center text-white"
                >
                    Reach me out!
                </Typography>
                <DividerComponent color="#fff"/>
            </Grid>
            <Grid item xs="12" md="12" className="flex justify-center mb-4">
                <Box className="bg-trans-black w-[60%]">
                    <FormControl variant="standard" className="w-[80%] mx-4 my-6">
                        <CssTextField label="Name" id="standard-adornment-amount"/>
                    </FormControl>
                    <FormControl variant="standard" className="w-[80%] mx-4 my-6">
                        <CssTextField label="Email" id="standard-adornment-amount"/>
                    </FormControl>
                    <FormControl variant="standard" className="w-[80%] mx-4 my-6">
                        <CssTextField label="Message" id="standard-adornment-amount" multiline rows={4}/>
                    </FormControl>
                    <FormControl variant="standard" className="block mx-4 my-6">
                        <Button variant="outlined" sx={{
                            border: '2px solid #fff',
                            borderRadius: 0,
                            color: '#fff',
                            fontWeight: 600,
                            '&:hover' : {
                                backgroundColor: '#ffff',
                                color: '#161e21',
                                border: '2px solid #fff'
                            },
                        }}>Submit</Button>
                    </FormControl>
                </Box>
                <Box className="bg-contact-green w-[30%] text-center">
                    <p className="text-white font-semibold m-4 p-2 bg-trans-black">Reach me at</p>
                    <p className="text-white font-semibold m-1"><CallIcon/> +91-8240281312</p>
                    <p className="text-white font-semibold m-1"><DirectionsIcon/> Kolkata, India</p>

                    <p className="text-white font-semibold m-4 p-2 bg-trans-black">Email Me at</p>
                    <p className="text-white font-semibold m-1"><EmailIcon/> roysubho687@gmail.com</p>

                    <p className='text-white font-semibold m-4 p-2 bg-trans-black'><ElectricalServicesIcon/> Powerd By</p>
                    <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
                        <Chip
                            avatar={<Avatar alt="Material UI" src="https://img.icons8.com/color/480/material-ui.png" />}
                            label="Material UI"
                        />
                        <Chip
                            avatar={<Avatar alt="Tailwind CSS" src="data:image/png;base64,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" />}
                            label="Tailwind CSS"
                        />
                        <Chip
                            avatar={<Avatar alt="Linked In" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEUAd7f///8AcrUAbrMAdLbA2+uRuNex0eY+kcR3rNIAc7V5qdCty+EAcLQAbLLf7fX3+v1opc4eg71fncq51eg7jsKew94Aernm8vj3/P3J3u3Z6PKjyOEaf7uLudnu9/tNmMjR4e5bnMqXv9wviMCDstU8j8OHsdRim8i21OcBZiGFAAAHVUlEQVR4nO2dW3uyvBKGQxIt5SUgCCLuUEv7rf7/P7igllaRzRBIdXLlOepBA7nNbpgkM8S60SKaB3aYEJxKQjuYR4tbJHL1d+ouOaMOf3RFR4g7lPGlmzYTRjlzHl3DSeSwPGog9GOBufFuxUXs1wlnVI/2q+TQ2S3hij26SpOLra4JV96j66NA3uqXcKZfC5Zis4rQp4+uiyJR/5sw1muS+ZUTXwgj8eiaKJOISsI012cdrIvnaUHo6jnNXMTcgnCp6ygs5SwtstC3j5biCxLp3EmLbhqRua6L4UV0TgKdh2ExEANiaz4ObRI+ug6KFRKsPhmodOczahQv9Og6KBMXnpeEcRwmHtPEL3ctLvhxtancrVt3SYRWkJzZbnbrTLaiM9XHIGL2xmrQNmB6jEmHu018pTZ7HTwE7Fjvn9cK8COy9w6+Qjvsg1G8dQOid2WxQx9ggYjZZS5e+wGLjorXUcBjCGAx3aAdi9Tvpyu1CJGuiwIwCC9COtvwfdrP9q0jykYUKzCgtUE5nzI4oGXFCBuRglaKSjuEI5GdhhBmCNswWfRzXQnfXOMsBwFaB3SrPgUvhhfh2+MRL8MIt+ja0NsOI1yjcy8LoE1aKds/usZDBbW6K6XaE+JrQzZwHGboxiFrdJG2y390hQdryJdFqRM6w3SY4Y3R9Ib6aCohPPPAulzdd0oRumrYbgjhCZ1ZWp7sG0L4js4sJcMs0xQjIHHOcMIDupn0S+IEBcweXVVJcRtKiNatz3q31i6a4eyjpWDGaZbgWwsr8WQNIMzxmTO/4mG/ZXPEOggvcsKeL+EMOWDZUTvHop9jByzPe3V4Tl9Q36r9kdi3NOPWRmhvN4p7x9n9bulJl0NfX+IsP5xumm8VC/wj8EacUnJ8d1+i2ac7PyZUo5vRV+JUCMYEo1rSGRkZGWkpXa92lCFYiuUoSfZhGO73CRFMUMWsxTvb1P7t21GovZTD2P4jOETbrb/OSjsxTTN/u9m9nkOmzoQS4vivVWfSbHtzLw/aSy33TaUoc5a7dcsXd+rv/iWeEkja4416aXLS0LzHm+ySWikuyPusu4xlbV7J9MY+7/VFrfd3L3WOfYUs/2bLmIt8BzrqmbrxxIyQfdL7k5cUsG31cuWBZHHUX6BSFE/7UQp550ftV6U9VzQu+jnZ4HgDt5t3E046TgB546rmEIYdp6q2VMUZ4rG80WK6mzpiDnnhS+19rHfKKPV6aQg2sAEv2k31AUdVE3IH9L/3Ok3kZ1dNyPcDT+38ah1O4mlXTAjbNGhRdr9KPR+hkG7BUv4UxqpaQiE5BittJlg0lBJ6gw57NOlz/KKhlHDAMYE2jT8BopLwfdCJpGalo2cblYTDLju0aPRtJJWE0+h1ZD99fsKxB3efn3DsWSUEhCMPKyEgHLliYCDMRk2nGAjHBUZEQTgb04goCBdjFgwUhKNWfRyEY86Y4yBcjLC/cRBaZ/nZFAnhiPs6f0yY+Vupj8YtBsL1Kgi9LxF7vhn67Si/XvwV4eZM2c8pR069/duwtpQPBvA3hOtjPX4fF0lrBLUmyQcL/hPCz8Zdb+8Mjx0zwun2F4RtuSfEBxzRlzZN/4CwPbkG7d9J/tETt2FXcg0B2mn9knR2AOWE687Xe+Db1tLfiMoJz52TIA+hz/lPdjJVTdiXAIZ9Ah/0JjsQVRP2DR/wdWvp5UIxYb9PHnoF8iS7XCgm7De2YAdXihnrOQkBQXvKRCoQZc/ZSyEOeQ+20y8dakwtYf0sVZMEzAKX3qBRSriGrGHAgbiQTfKglBDkewDetpZO6qSU8B/IDuGgZ0nHbVRKCPvZPRih7Fe+0n18mB8XOJn+7wkJgZ5qYIBK2fA4KgnrpdoIYV3+GQnr525bBFwQn5EQuDuNmBC4J2YIhz3NED6CkGlPaNrQEBpCQ2gIDaEhNISG0BAaQkNoCA2hITSEhtAQGkJDaAgNoSE0hIbQEBpCQ2gIDaEhNISG0BAaQkNoCA2hITSEhtAQGkJDaAivCUH3GzETwlICv9WeDourDwz0AMxiL534nEKuUtcvEsISzwNv7nJQhBP5xOe0I7tjpc+7a3asJ7NnKeDFrqIKkPAf4Kc1PL+3x53uC/G4t+kbSrWIh/13LEcE+yraI+h8QXZoysPgJN1JR9LDgImB857JJh0badfbf9gt+gjb0vcwErcVsu2cDZv5BM3bH2bnYnxodt4uqULDZ4Wuh+mZ2MvoVyPjfT+9EiIbTgKLQmLrPUy5TaTNORxyAiIfUhGF6JxEuiTWbhaLyELzcbgg40K2P7ucpUUsV+duytyCUDr8EAKVodCIZUWTJdp7OoniE65M4BjrOhKdMuhiSejruiRS/5uwN8QmUl18mpc0o+2hfBHrO7npdyLVlX6tWCX/rFLFzjrST2OUQyu3+08yXD8W+qyLXMQ/DturdL9RzvRoR4flV67M64TGqbvkjDqYm7JMPM+X7rU7upayeRHNAzvE6rtJQjuYR7XEEf8Hv9yYWp88rfoAAAAASUVORK5CYII=" />}
                            label="Avatar"
                        />
                    </Stack>
                </Box>
            </Grid>
        </Grid>
    )
}
export default Footer