import { Alert, Button, CircularProgress, Container, Divider, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Header from '../Header/Header';

// import login from '../../../images/login-bg.png';


const EditAttendance = () => {

    const [editData, setEditData] = useState([]);
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        const url = `http://localhost:5000/editAttendance/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setEditData(data))
    }, []);

    console.log(editData);


    const { isLoading } = useAuth();

    const updateStartHour = e => {
        const startHour = e.target.value;
        const newstartHour = { ...editData };
        newstartHour.startHour = startHour;
        setEditData(newstartHour);
    }
    const updateStartMin = e => {
        const startMin = e.target.value;
        const newstartMin = { ...editData };
        newstartMin.startMin = startMin;
        setEditData(newstartMin);
    }
    const updateStartBreakHour = e => {
        const startBreakHour = e.target.value;
        const newstartBreakHour = { ...editData };
        newstartBreakHour.startBreakHour = startBreakHour;
        setEditData(newstartBreakHour);
    }
    const updateStartBreakMin = e => {
        const startBreakMin = e.target.value;
        const newstartBreakMin = { ...editData };
        newstartBreakMin.startBreakMin = startBreakMin;
        setEditData(newstartBreakMin);
    }
    const updateEndBreakHour = e => {
        const endBreakHour = e.target.value;
        const newendBreakHour = { ...editData };
        newendBreakHour.endBreakHour = endBreakHour;
        setEditData(newendBreakHour);
    }
    const updateEndBreakMin = e => {
        const endBreakMin = e.target.value;
        const newendBreakMin = { ...editData };
        newendBreakMin.endBreakMin = endBreakMin;
        setEditData(newendBreakMin);
    }
    const updateEndHour = e => {
        const endHour = e.target.value;
        const newendHour = { ...editData };
        newendHour.endHour = endHour;
        setEditData(newendHour);
    }
    const updateEndMin = e => {
        const endMin = e.target.value;
        const newendMin = { ...editData };
        newendMin.endMin = endMin;
        setEditData(newendMin);
    }
    const updateMemo = e => {
        const memo = e.target.value;
        const newMemo = { ...editData };
        newMemo.memo = memo;
        setEditData(newMemo);
    }




    const handleUpdate = e => {
        const url = `http://localhost:5000/editAttendance/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(editData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Successfully Updated');
                    setEditData(editData);
                }
            })

        e.preventDefault();
    }

    return (
        <>
            <Header />
            <Divider sx={{ width: '100%' }} />
            <Grid container spacing={2} sx={{ mt: 0, zIndex: 0 }}>
                <Grid item xs={12} md={12}>
                    <Container sx={{ width: '50%', textAlign: 'center', marginTop: '10px', }}>
                        <Typography variant="h4" gutterBottom component="div">
                            Edit Your Attendance
                        </Typography>

                        {!isLoading && <form onSubmit={handleUpdate}>


                            <TextField
                                sx={{ width: '25%', m: 1 }}
                                id="outlined-start-adornment"
                                label="Start Working Hour"
                                type="number"
                                name="startHour"
                                value={editData.startHour || ''}
                                onChange={updateStartHour}
                                variant="filled"
                            />

                            <TextField
                                sx={{ width: '25%', m: 1 }}
                                id="filled-size-small"
                                label="Start Working Min"
                                type="number"
                                name="startMin"
                                value={editData.startMin || ''}
                                onChange={updateStartMin}
                                variant="filled"
                            />
                            <br />
                            <TextField
                                sx={{ width: '25%', m: 1 }}
                                id="filled-size-small"
                                label="Start Break Hour"
                                type="number"
                                name="startBreakHour"
                                value={editData.startBreakHour || ''}
                                onChange={updateStartBreakHour}
                                variant="filled"
                            />
                            <TextField
                                sx={{ width: '25%', m: 1 }}
                                id="filled-size-small"
                                label="Start Break Min"
                                type="number"
                                name="startBreakMin"
                                value={editData.startBreakMin || ''}
                                onChange={updateStartBreakMin}
                                variant="filled"
                            />
                            <br />
                            <TextField
                                sx={{ width: '25%', m: 1 }}
                                id="filled-size-small"
                                label="End Break Hour"
                                type="number"
                                name="endBreakHour"
                                value={editData.endBreakHour || ''}
                                onChange={updateEndBreakHour}
                                variant="filled"
                            />

                            <TextField
                                sx={{ width: '25%', m: 1 }}
                                id="filled-size-small"
                                label="End Break Min"
                                type="number"
                                name="endBreakMin"
                                value={editData.endBreakMin || ''}
                                onChange={updateEndBreakMin}
                                variant="filled"
                            />
                            <br />
                            <TextField
                                sx={{ width: '25%', m: 1 }}
                                id="filled-size-small"
                                label="Finish Working Hour"
                                type="number"
                                name="endHour"
                                value={editData.endHour || ''}
                                onChange={updateEndHour}
                                variant="filled"
                            />
                            <TextField
                                sx={{ width: '25%', m: 1 }}
                                id="filled-size-small"
                                label="Finish Working Min"
                                type="number"
                                name="endMin"
                                value={editData.endMin || ''}
                                onChange={updateEndMin}
                                variant="filled"
                            />
                            <br />
                            <TextField
                                sx={{ width: '50%', m: 1 }}
                                id="outlined-textarea"
                                maxRows={4}
                                label="Memo"
                                type="text"
                                name="memo"
                                value={editData.memo || ''}
                                onChange={updateMemo}
                                variant="filled"
                                multiline
                            />
                            <br />

                            <Button sx={{ width: '25%', m: 1 }} variant="contained" type="submit">Submit</Button>



                        </form>
                        }



                        {isLoading && <CircularProgress />}

                    </Container>
                </Grid>

            </Grid>
        </>
    );
};

export default EditAttendance;