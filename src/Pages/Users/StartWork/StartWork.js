import React, { useState } from 'react';
import { Alert, Button, CircularProgress, Container, Grid, Box, TextField, Typography, Link, Divider, Popper, Fade, Paper } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ArrowDropDownCircleRoundedIcon from '@mui/icons-material/ArrowDropDownCircleRounded';
// import { Link } from 'react-router-dom';

const StartWork = () => {


    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();

    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };



    const today = new Date();
    const year = today.getFullYear();
    const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

    const weekDay = today.toLocaleString("default", { weekday: "short" });
    console.log(weekDay);

    const [collectionRecord, setCollectionRecord] = useState({});
    const [breakStartRecord, setBreakStartRecord] = useState({});
    const [breakEndRecord, setBreakEndRecord] = useState({});
    const [endRecord, setEndRecord] = useState({});
    const [collectMemo, setCollectMemo] = useState('');


    const combine = { ...collectionRecord, ...breakStartRecord, ...breakEndRecord, ...endRecord, ...collectMemo };
    console.log(combine);


    const recordStart = e => {
        const today1 = new Date();
        const newDateFormat = today1.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
        console.log(newDateFormat);
        const startObj = { startTime: newDateFormat, day: weekDay };
        setCollectionRecord(startObj);

        e.preventDefault();
    }


    const startBreak = e => {

        const today2 = new Date();
        const newDateFormat = today2.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
        const startBreakObj = { startBreakTime: newDateFormat, };
        setBreakStartRecord(startBreakObj);

        e.preventDefault();
    }



    const endBreak = e => {
        const today3 = new Date();
        const newDateFormat = today3.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
        const endBreakObj = { endBreakTime: newDateFormat, };
        setBreakEndRecord(endBreakObj);

        e.preventDefault();
    }


    const recordEnd = e => {
        const today4 = new Date();
        const newDateFormat = today4.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
        const endRecordObj = { endTime: newDateFormat, };
        setEndRecord(endRecordObj);
        // console.log(newDateFormat);


        fetch("http://localhost:5000/recordTime", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(combine),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully Added');
                }
            });
        e.preventDefault();
    }


    const handleOnBlur = e => {
        const memo = e.target.value;

        setCollectMemo({ memo: memo });
        console.log(collectMemo);
    }

    const memoSubmit = e => {

        alert('Successfully Done')
        e.target.reset();
        e.preventDefault();
    }

    // const memoSubmit = e => {
    //     const today4 = new Date();
    //     const newDateFormat = today4.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
    //     const endRecordObj = { endTime: newDateFormat, };
    //     setEndRecord(endRecordObj);
    // console.log(newDateFormat);


    // fetch("http://localhost:5000/recordTime", {
    //     method: "POST",
    //     headers: { "content-type": "application/json" },
    //     body: JSON.stringify(combine),
    // })
    //     .then(res => res.json())
    //     .then(data => {
    //         if (data.insertedId) {
    //             alert('Successfully Added');
    //         }
    //     });
    //     e.preventDefault();
    // }



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
                        <Typography onClick={recordStart} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mx: 1, fw: 'bold', cursor: 'pointer' }} variant="p" gutterBottom component="div">
                            <AccessTimeIcon /> Start Working
                        </Typography>
                        <Typography onClick={recordEnd} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mx: 1, fw: 'bold', cursor: 'pointer' }} variant="p" gutterBottom component="div">
                            <DirectionsWalkIcon /> Finish Working
                        </Typography>
                        <Typography onClick={startBreak} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mx: 1, fw: 'bold', cursor: 'pointer' }} variant="p" gutterBottom component="div">
                            <FreeBreakfastIcon /> Start Break
                        </Typography>
                        <Typography onClick={endBreak} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mx: 1, fw: 'bold', cursor: 'pointer' }} variant="p" gutterBottom component="div">
                            <ArrowCircleLeftIcon /> Finish Break
                        </Typography>
                        <Typography onClick={handleClick('bottom')} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mx: 1, fw: 'bold', cursor: 'pointer' }} variant="p" gutterBottom component="div">
                            <ArrowDropDownCircleRoundedIcon /> Memo
                        </Typography>


                        <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
                            {({ TransitionProps }) => (
                                <Fade {...TransitionProps} timeout={350}>
                                    <Paper sx={{ width: '500px', p: 5, backgroundColor: '#80808057' }}>
                                        <form onSubmit={memoSubmit}>

                                            <TextField
                                                sx={{ width: '100%', m: 1, }}
                                                id="outlined-textarea"
                                                placeholder="Memo"
                                                variant="standard"
                                                name="memo"
                                                onChange={handleOnBlur}
                                                multiline
                                            />
                                            <Button style={{ backgroundColor: 'gray', marginLeft: '8px' }} variant="contained" type="submit">Submit</Button>
                                        </form>

                                        {/* {message && <Alert sx={{ m: 1 }} severity="success"> {message} </Alert>} */}
                                    </Paper>
                                </Fade>
                            )}
                        </Popper>

                    </Box>
                </Container>
            </Grid>
        </Grid>
        // </>
    );
};

export default StartWork;