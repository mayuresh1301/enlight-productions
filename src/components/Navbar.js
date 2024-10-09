import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const pages = [
    { name: "Home", path: "/" },
    { name: "Photos", path: "/photos" },
    { name: "Videos", path: "/videos" },
    //{ name: "Services", path: "/services" },
    { name: "Inquiry", path: "/inquiry" },
];

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    };

    return (
        <AppBar position="static" sx={{background: 'transparent', boxShadow: 'none', padding: '10px 20px'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography 
                        variant="h4"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontWeight: 'bold', color: '#f50057' }}
                    >
                        Enlight Productions 
                    </Typography>

                    {/* Mobile Menu */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none'} }}>
                        <IconButton
                            size="large"
                            aria-label='menu'
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx = {{ 
                                display: { xs: 'block', md: 'none' }, 
                            }}
                        >
                            {/*Menu Items*/}
                            {pages.map((page) => (
                                <MenuItem 
                                    key={page.name} 
                                    onClick={handleCloseNavMenu}
                                    component={Link}
                                    to={page.path}
                                >
                                    <Typography textAlign={"center"}>{page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* Desktop Menu */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        Enlight Productions
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '20px' }}>
                        {pages.map((page) => (
                            <Button 
                                key={page.name}
                                component={Link}
                                to={page.path}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    color: '#f50057',
                                    display: 'block',
                                    textTransform: 'uppercase',
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    '&:hover': {
                                        color: '#f50057',
                                        borderBottom: '2px solid #f50057',
                                    },
                                }}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
                
    );
};

export default Navbar;