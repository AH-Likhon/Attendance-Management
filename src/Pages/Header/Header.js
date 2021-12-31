import React from 'react';
import { Box, Button, Container, Grid, IconButton, Link, Menu, Typography } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, admin, logOut } = useAuth();

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);

    return (
        <Grid item xs={12} md={12}>
            <Container sx={{ width: '100%', color: 'black', display: 'flex', justifyContent: 'space-between', py: 1 }}>
                <Box sx={{ display: ' flex', flexGrow: 1 }}>

                    <Link href="/home" underline="none" color="black">
                        <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 1, fw: 'bold' }} variant="p" gutterBottom component="div">
                            <HomeIcon /> Home
                        </Typography>
                    </Link>


                    <Link href="/StartWork" underline="none" color="black">
                        <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 1, fw: 'bold' }} variant="p" gutterBottom component="div">
                            <ListAltIcon /> Start Work
                        </Typography>
                    </Link>

                    <Link href="/AttendanceSheet" underline="none" color="black">
                        <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 1, fw: 'bold' }} variant="p" gutterBottom component="div">
                            <ListAltIcon /> Attendance Sheet
                        </Typography>
                    </Link>

                    {
                        user?.email && admin ?
                            <Link href="/employeeList" underline="none" color="black">
                                <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 1, fw: 'bold' }} variant="p" gutterBottom component="div">
                                    <ListAltIcon /> Employee List
                                </Typography>
                            </Link>
                            :
                            ''
                    }

                </Box>

                {
                    user?.email && !admin ?
                        <Box>
                            <IconButton
                                size="small"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <SettingsIcon /> Setting
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                sx={{ mt: '28px' }}
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >

                                <Link sx={{ color: 'text.primary' }} href="/dashboard" underline="none"><Button onClick={handleClose} color="inherit">{user?.displayName}</Button></Link>
                                <br />

                                <Button onClick={logOut} color="inherit">LogOut</Button>
                            </Menu>
                        </Box>
                        :
                        <Box>
                            <IconButton
                                size="small"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <SettingsIcon /> Setting
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                sx={{ mt: '28px' }}
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >

                                <Link sx={{ color: 'text.primary' }} href="/dashboard" underline="none"><Button color="inherit">{user?.displayName}</Button></Link>
                                <br />

                                <Link sx={{ color: 'text.primary' }} href='/employeeList' underline="none"><Button color="inherit">Employee List</Button></Link>
                                <br />

                                <Link sx={{ color: 'text.primary' }} onClick={logOut} href='/login' underline="none"><Button color="inherit">LogOut</Button></Link>
                            </Menu>
                        </Box>
                }

            </Container>
        </Grid>
    );
};

export default Header;