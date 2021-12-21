import * as React from 'react';
import { Container, Grid, Box, TextField, Divider, } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Stack from '@mui/material/Stack';
import Header from '../../Header/Header';
import useAuth from '../../../hooks/useAuth';


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


const AttendanceSheet = () => {

    const { user } = useAuth();

    const [value, setValue] = React.useState(new Date());
    const [recordTime, setRecordTime] = React.useState([]);

    React.useEffect(() => {
        const url = `http://localhost:5000/allAttendance?userEmail=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setRecordTime(data))
    }, [user.email]);
    console.log(recordTime);


    return (
        // <>

        <Grid container spacing={2} sx={{ mt: 0, }}>
            <Header />
            <Divider sx={{ width: '100%' }} />


            <Grid item xs={12} md={12}>
                <Container sx={{ width: '100%', }}>


                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Stack sx={{ width: '150px', }} spacing={3}>
                            <DesktopDatePicker
                                // label="For desktop"
                                value={value}
                                minDate={new Date('2017-01-01')}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </Stack>
                    </LocalizationProvider>

                    <Paper sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <TableContainer component={Paper} sx={{ width: { sm: '100%', md: '100%' } }}>
                            <Table aria-label="customized table">
                                <TableHead>
                                    <TableRow>

                                        <StyledTableCell align="center">SI </StyledTableCell>
                                        <StyledTableCell align="center">Day</StyledTableCell>
                                        <StyledTableCell align="center">Start Working </StyledTableCell>
                                        <StyledTableCell align="center">Finish Working </StyledTableCell>
                                        <StyledTableCell align="center">Break In </StyledTableCell>
                                        <StyledTableCell align="center">Break Out </StyledTableCell>
                                        <StyledTableCell align="center">Total Working Hours </StyledTableCell>
                                        <StyledTableCell align="center">Break Hours </StyledTableCell>
                                        <StyledTableCell align="center">Memo</StyledTableCell>
                                    </TableRow>


                                </TableHead>
                                <TableBody>
                                    {recordTime.map((row, index) => (
                                        <StyledTableRow key={row._id}>

                                            <StyledTableCell align="center">
                                                {index + 1}
                                            </StyledTableCell>
                                            <StyledTableCell align="center">
                                                {row.day}
                                            </StyledTableCell>
                                            <StyledTableCell align="center">
                                                {row.startTime}
                                            </StyledTableCell>
                                            <StyledTableCell align="center">
                                                {row.endTime}
                                            </StyledTableCell>
                                            <StyledTableCell align="center">
                                                {row.startBreakTime}
                                            </StyledTableCell>
                                            <StyledTableCell align="center">
                                                {row.endBreakTime}
                                            </StyledTableCell>
                                            <StyledTableCell align="center">
                                                {row.totalWorkingHour}:{row.totalWorkingMin} Hours
                                            </StyledTableCell>
                                            <StyledTableCell align="center">
                                                {(row.endBreakHour) - (row.startBreakHour)}:{(row.endBreakMin) - (row.startBreakMin)} Hours
                                            </StyledTableCell>
                                            <StyledTableCell align="center">
                                                {row.memo}
                                            </StyledTableCell>

                                        </StyledTableRow>
                                    ))}

                                </TableBody>
                            </Table>
                        </TableContainer>


                    </Paper>
                </Container>
            </Grid>
        </Grid>
        // </>
    );
};

export default AttendanceSheet;