import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@mui/material'
import {FormControlLabel} from '@mui/material';
import {Checkbox} from '@mui/material';

const RegForm = () => {
    const paperStyle = { padding: '30px 20px', width: 400, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: "#063970" }
    const marginTop = { marginTop: 40 }
    return (
        <Grid margin={marginTop}>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='Username' placeholder="Enter your Username" />
                    <TextField fullWidth label='Company Name' placeholder="Enter your Company Name" />
                    <TextField fullWidth label='Phone Number' placeholder="Enter your phone number" />
                    <TextField fullWidth label='Address' placeholder="Enter your Address" />
                    <TextField fullWidth label='Email' placeholder="Enter your Email"/>                   
                    <TextField fullWidth label='Password' placeholder="Enter your password"/>
                    <TextField fullWidth label='Confirm Password' placeholder="Confirm your password"/>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Button type='submit' variant='contained' color='primary'>Sign up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default RegForm;