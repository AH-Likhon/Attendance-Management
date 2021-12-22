import * as React from 'react';
import { Alert, Button, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

const AddMember = () => {
    const [message, setMessage] = React.useState("");

    const [value, setValue] = React.useState(null);
    const [readRole, setReadRole] = React.useState('Member');


    const initialMember = { displayName: '', email: '', password: '', role: readRole, entryDate: value };

    const [member, setMember] = React.useState(initialMember);
    console.log(member);

    const handleChange = (event) => {
        setReadRole(event.target.value);
        member.role = event.target.value;
    };


    const handleNameChange = e => {
        const value = e.target.value;
        const updateMember = { ...member };
        updateMember.displayName = value;
        setMember(updateMember);
    }

    const handleEmailChange = e => {
        const value = e.target.value;
        const updateMember = { ...member };
        updateMember.email = value;
        setMember(updateMember);
    }

    const handlePasswordChange = e => {
        const value = e.target.value;
        const updateMember = { ...member };
        updateMember.password = value;
        setMember(updateMember);
    }


    const handleSubmit = e => {
        fetch("https://fierce-island-20603.herokuapp.com/users", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(member),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Do you want to add this?');
                    setMessage('Successfully Added');
                }
            })


        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: '100%', m: 1 }}
                    id="outlined"
                    label='Name'
                    // placeholder="Name"
                    name="displayName"
                    value={member.displayName}
                    onChange={handleNameChange}
                    type="text"
                />
                <TextField
                    sx={{ width: '100%', m: 1 }}
                    id="outlined"
                    label='Email'
                    placeholder="Email"
                    value={member.email}
                    onChange={handleEmailChange}
                    type="email"
                    name="email"
                    required />
                <TextField
                    sx={{ width: '100%', m: 1 }}
                    id="outlined"
                    label='Password'
                    type="password"
                    name="password"
                    value={member.password}
                    onChange={handlePasswordChange}
                    required
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
                            member.entryDate = newValue;
                        }}
                        renderInput={(params) => <TextField sx={{ width: '100%', my: 1 }} {...params} />}
                    />
                </LocalizationProvider>


                <Button style={{ backgroundColor: 'gray', marginLeft: '8px' }} variant="contained" type="submit">Submit</Button>
            </form>

            {/* {isLoading && <CircularProgress />} */}
            {message && <Alert sx={{ m: 1 }} severity="success"> {message} </Alert>}

        </div>
    );
};

export default AddMember;