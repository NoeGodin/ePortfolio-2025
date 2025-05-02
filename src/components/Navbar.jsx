import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(18, 18, 18, 0.85)',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
  backdropFilter: 'blur(8px)',
  borderRadius: '0 0 12px 12px',
  padding: '0 16px',
  width: '90%',
  maxWidth: '1200px',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: theme.zIndex.drawer + 2,
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  textTransform: 'none',
  fontWeight: 400,
  fontSize: '0.95rem',
  padding: '8px 16px',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
}));

export default function Navbar() {
  const navItems = ['Home', 'Work', 'About', 'Contact'];

  return (
    <React.Fragment>
        <StyledAppBar position="fixed">
          <Toolbar sx={{ display: 'flex', justifyContent: 'center', padding: '4px 0' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              {navItems.map((item) => (
                <NavButton key={item} href={`#${item.toLowerCase()}`}>
                  {item}
                </NavButton>
              ))}
            </Box>
          </Toolbar>
        </StyledAppBar>
      <Toolbar />
    </React.Fragment>
  );
}