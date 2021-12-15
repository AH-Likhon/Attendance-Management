import * as React from 'react';
import { Alert, Button, CircularProgress, Container, Grid, Box, TextField, Typography, Link, Divider } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Stack from '@mui/material/Stack';
import isWeekend from 'date-fns/isWeekend';




// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.${tableCellClasses.head}`]: {
//         backgroundColor: theme.palette.common.black,
//         color: theme.palette.common.white,
//     },
//     [`&.${tableCellClasses.body}`]: {
//         fontSize: 14,
//     },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     '&:nth-of-type(odd)': {
//         backgroundColor: theme.palette.action.hover,
//     },
//     // hide last border
//     '&:last-child td, &:last-child th': {
//         border: 0,
//     },
// }));


// const columns = [
//     { id: 'name', label: 'Name', minWidth: 170 },
//     { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
//     {
//         id: 'population',
//         label: 'Population',
//         minWidth: 170,
//         align: 'right',
//         format: (value) => value.toLocaleString('en-US'),
//     },
//     {
//         id: 'size',
//         label: 'Size\u00a0(km\u00b2)',
//         minWidth: 170,
//         align: 'right',
//         format: (value) => value.toLocaleString('en-US'),
//     },
//     {
//         id: 'density',
//         label: 'Density',
//         minWidth: 170,
//         align: 'right',
//         format: (value) => value.toFixed(2),
//     },
// ];

// function createData(name, code, population, size) {
//     const density = population / size;
//     return { name, code, population, size, density };
// }

// const rows = [
//     createData('India', 'IN', 1324171354, 3287263),
//     createData('China', 'CN', 1403500365, 9596961),
//     createData('Italy', 'IT', 60483973, 301340),
//     createData('United States', 'US', 327167434, 9833520),
//     createData('Canada', 'CA', 37602103, 9984670),
//     createData('Australia', 'AU', 25475400, 7692024),
//     createData('Germany', 'DE', 83019200, 357578),
//     createData('Ireland', 'IE', 4857000, 70273),
//     createData('Mexico', 'MX', 126577691, 1972550),
//     createData('Japan', 'JP', 126317000, 377973),
//     createData('France', 'FR', 67022000, 640679),
//     createData('United Kingdom', 'GB', 67545757, 242495),
//     createData('Russia', 'RU', 146793744, 17098246),
//     createData('Nigeria', 'NG', 200962417, 923768),
//     createData('Brazil', 'BR', 210147125, 8515767),
// ];

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
    const [value, setValue] = React.useState(new Date());
    // const today = new Date();
    // const year = today.getFullYear();
    // const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

    // const [page, setPage] = React.useState(0);
    // const [rowsPerPage, setRowsPerPage] = React.useState(10);

    // const handleChangePage = (event, newPage) => {
    //     setPage(newPage);
    // };

    // const handleChangeRowsPerPage = (event) => {
    //     setRowsPerPage(+event.target.value);
    //     setPage(0);
    // };

    const [recordTime, setRecordTime] = React.useState([]);



    React.useEffect(() => {
        const url = `http://localhost:5000/startRecording`;
        fetch(url)
            .then(res => res.json())
            .then(data => setRecordTime(data))
    }, []);
    console.log(recordTime);

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

                        <Link href="/home" underline="none" color="black">
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

                    <Paper sx={{ width: '100%' }}>
                        <TableContainer component={Paper} sx={{ width: { sm: '100%', md: '100%' } }}>
                            <Table aria-label="customized table">
                                <TableHead>
                                    <TableRow>

                                        <StyledTableCell align="center">Email</StyledTableCell>
                                        <StyledTableCell align="center">Car Model</StyledTableCell>
                                        <StyledTableCell align="center">Status</StyledTableCell>

                                        <StyledTableCell align="center">Action</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {recordTime.map((row) => (
                                        <StyledTableRow key={row._id}>

                                            <StyledTableCell align="center">
                                                {row.startTime}
                                            </StyledTableCell>

                                            <StyledTableCell align="center">
                                                {row.day}
                                            </StyledTableCell>


                                            <StyledTableCell align="center">
                                                {/* <Button onClick={() => handleUpdate(row._id)} style={{ textDecoration: 'none', backgroundColor: '#cf2626d6' }} variant="contained" >{row.status}</Button>
                                    </StyledTableCell>

                                            <StyledTableCell align="center">
                                    {/* <Button onClick={() => handleDelete(row._id)} style={{ textDecoration: 'none', backgroundColor: '#cf2626d6' }} variant="contained" >Remove</Button> */}
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    ))}

                                </TableBody>
                            </Table>
                        </TableContainer>
                        {/* <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        /> */}
                    </Paper>
                </Container>
            </Grid>
        </Grid>
        // </>
    );
};

export default AttendanceSheet;