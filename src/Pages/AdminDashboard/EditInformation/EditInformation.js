import { DatePicker, LocalizationProvider } from '@mui/lab';
import { Alert, Button, CircularProgress, Container, Divider, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import Header from '../../Header/Header';

const EditInformation = () => {
    const [editData, setEditData] = useState([]);
    const { id } = useParams();
    // console.log(id);

    useEffect(() => {
        const url = `https://fierce-island-20603.herokuapp.com/members/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setEditData(data))
    }, []);

    console.log(editData);


    const { isLoading } = useAuth();

    const [message, setMessage] = React.useState("");

    const [value, setValue] = React.useState(null);
    const [readRole, setReadRole] = React.useState('Member');


    // const initialMember = { displayName: '', email: '', password: '', role: readRole, entryDate: value };

    // const [member, setMember] = React.useState(initialMember);
    // console.log(member);

    const handleChange = (event) => {
        setReadRole(event.target.value);
        editData.role = event.target.value;
    };

    const handleNameChange = e => {
        const value = e.target.value;
        const updateMember = { ...editData };
        updateMember.displayName = value;
        setEditData(updateMember);
    }

    const handleEmailChange = e => {
        const value = e.target.value;
        const updateMember = { ...editData };
        updateMember.email = value;
        setEditData(updateMember);
    }

    const handlePasswordChange = e => {
        const value = e.target.value;
        const updateMember = { ...editData };
        updateMember.password = value;
        setEditData(updateMember);
    }


    const handleSubmit = e => {
        fetch(`https://fierce-island-20603.herokuapp.com/members/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(editData),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Do you want to update this existing information?');
                    setMessage('Successfully Updated Information');
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
                            Edit {editData.displayName}'s Information
                        </Typography>

                        {!isLoading && <form onSubmit={handleSubmit}>

                            <TextField
                                sx={{ width: '100%', m: 1 }}
                                id="outlined"
                                label='Name'
                                // placeholder="Name"
                                name="displayName"
                                value={editData.displayName || ''}
                                onChange={handleNameChange}
                                type="text"
                            />
                            <TextField
                                sx={{ width: '100%', m: 1 }}
                                id="outlined"
                                label='Email'
                                placeholder="Email"
                                value={editData.email || ''}
                                onChange={handleEmailChange}
                                type="email"
                                name="email"
                            />
                            <TextField
                                sx={{ width: '100%', m: 1 }}
                                id="outlined"
                                label='Password'
                                type="password"
                                name="password"
                                value={editData.password || ''}
                                onChange={handlePasswordChange}
                            />

                            <InputLabel id="demo-simple-select-label">Role</InputLabel>
                            <Select
                                sx={{ width: '100%', mb: 1 }}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={readRole}
                                label="Role"
                                onChange={handleChange}
                            >
                                <MenuItem value="Member">Member</MenuItem>
                                <MenuItem value="Admin">Admin</MenuItem>
                            </Select>
                            <br />


                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label="Entry Date"
                                    value={value}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                        editData.entryDate = newValue;
                                    }}
                                    renderInput={(params) => <TextField sx={{ width: '100%', my: 1 }} {...params} />}
                                />
                            </LocalizationProvider>


                            <Button style={{ backgroundColor: 'gray', marginLeft: '8px' }} variant="contained" type="submit">Submit</Button>
                        </form>
                        }



                        {isLoading && <CircularProgress />}
                        {message && <Alert sx={{ m: 1 }} severity="success"> {message} </Alert>}

                    </Container>
                </Grid>

            </Grid>
        </>
    );
};

export default EditInformation;