import React from 'react';
import { Alert, Button, CircularProgress, Container, Grid, Box, TextField, Typography, Link, Divider } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
// import { Link } from 'react-router-dom';

const StartWork = () => {
    const today = new Date();
    const year = today.getFullYear();
    const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

    return (
        // <>

        <Grid container spacing={2} sx={{ mt: 0, }}>
            <Grid item xs={12} md={12}>
                <Container sx={{ width: '100%', color: 'black', display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: ' flex', flexGrow: 1 }}>

                        <Link href="/home" underline="none" color="black">
                            <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 1, fw: 'bold' }} variant="p" gutterBottom component="div">
                                <HomeIcon /> Home
                            </Typography>
                        </Link>

                        <Link href="/AttendanceSheet" underline="none" color="black">
                            <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 1, fw: 'bold' }} variant="p" gutterBottom component="div">
                                <ListAltIcon /> Attendance Sheet
                            </Typography>
                        </Link>
                    </Box>
                    <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fw: 'bold' }} variant="p" gutterBottom component="div">
                        <SettingsIcon /> Setting
                    </Typography>
                </Container>
            </Grid>
            <Divider sx={{ width: '100%' }} />

            <Grid item xs={12} md={12}>
                <Container sx={{ width: '100%', color: 'black', display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: ' flex', flexGrow: 1 }}>
                        <Typography sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mx: 1, fw: 'bold', }} variant="p" gutterBottom component="div">
                            <span style={{ fontSize: '24px' }}>{year}</span> <span>{time}</span>
                        </Typography>
                        <Typography sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mx: 1, fw: 'bold' }} variant="p" gutterBottom component="div">
                            <AccessTimeIcon /> Start Working
                        </Typography>
                        <Typography sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mx: 1, fw: 'bold' }} variant="p" gutterBottom component="div">
                            <DirectionsWalkIcon /> Finish Working
                        </Typography>
                        <Typography sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mx: 1, fw: 'bold' }} variant="p" gutterBottom component="div">
                            <FreeBreakfastIcon /> Start Break
                        </Typography>
                        <Typography sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mx: 1, fw: 'bold' }} variant="p" gutterBottom component="div">
                            <ArrowCircleLeftIcon /> Finish Break
                        </Typography>
                    </Box>
                </Container>
            </Grid>
        </Grid>
        // </>
    );
};

export default StartWork;