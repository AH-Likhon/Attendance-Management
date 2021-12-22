import React from 'react';
import { Box } from '@mui/lab/node_modules/@mui/system';
import { Button, Divider, Grid, Link, Modal, Paper, Table, TableBody, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import Header from '../../Header/Header';
import AddMember from '../AddMember/AddMember';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: '#d2d2d3fc',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
};

const EmployeeList = () => {

    const [members, setMembers] = React.useState([]);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    React.useEffect(() => {
        const url = `https://fierce-island-20603.herokuapp.com/members`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMembers(data))
    }, []);

    const handleDelete = (id) => {
        const proceed = window.confirm('Do you want to delete?');
        if (proceed) {
            fetch(`https://fierce-island-20603.herokuapp.com/users/${id}`, {
                method: "DELETE",
                headers: { "content-type": "application/json" },
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('Succesfully Deleted');
                        const remaining = members.filter(book => book._id !== id);
                        setMembers(remaining);
                    }
                });
        }
        console.log(id);
    };


    return (
        <>
            <Header />
            <Divider sx={{ width: '100%' }} />
            <Grid item xs={12} md={12}>
                <Box sx={{ width: '80%', mx: 'auto', }}>
                    <Typography sx={{ mt: 3, }} variant='h6'>Total Employee: {members.length} </Typography>

                    <Link sx={{ marginLeft: '-928px', }} onClick={handleOpen} underline="none">
                        <Button style={{ textDecoration: 'none', backgroundColor: '#cf2626d6', }} variant="contained">Add New Member</Button>
                    </Link>

                    <Paper sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', my: 1 }}>
                        <TableContainer component={Paper} sx={{ width: { sm: '100%', md: '100%' }, }}>
                            <Table aria-label="customized table">
                                <TableHead>
                                    <TableRow>

                                        <StyledTableCell align="center">Employee No </StyledTableCell>
                                        <StyledTableCell align="center">Name</StyledTableCell>
                                        <StyledTableCell align="center">Email</StyledTableCell>
                                        <StyledTableCell align="center">Role Working </StyledTableCell>
                                        <StyledTableCell align="center">Edit </StyledTableCell>
                                        <StyledTableCell align="center">Delete </StyledTableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {members.map((member, index) => (
                                        <StyledTableRow key={member._id}>

                                            <StyledTableCell align="center">
                                                {index + 1}
                                            </StyledTableCell>
                                            <StyledTableCell align="center">
                                                {member.displayName}
                                            </StyledTableCell>
                                            <StyledTableCell align="center">
                                                {member.email}
                                            </StyledTableCell>
                                            <StyledTableCell align="center">
                                                {member.role}
                                            </StyledTableCell>


                                            <StyledTableCell align="center">
                                                <Link href={`/editInformaion/${member._id}`} underline="none">
                                                    <Button style={{ textDecoration: 'none', backgroundColor: '#cf2626d6' }} variant="contained">Edit</Button>
                                                </Link>                             </StyledTableCell>

                                            <StyledTableCell align="center">
                                                <Button style={{ textDecoration: 'none', backgroundColor: '#cf2626d6' }} variant="contained" onClick={() => handleDelete(member._id)} >Delete</Button>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    ))}

                                </TableBody>
                            </Table>
                        </TableContainer>

                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <AddMember />
                            </Box>
                        </Modal>


                    </Paper>
                </Box>

            </Grid>
        </>
    );
};

export default EmployeeList;