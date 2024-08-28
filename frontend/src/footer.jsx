import React from 'react';
import { Box, Container, Typography } from '@mui/material';

function Footer() {
    return (
        <Box sx={{ bgcolor: 'primary.dark', color: 'white', p: 4 }}>
            <Container>
                <Typography variant="body2" align="center">
                    © 2024 Salih Korkmaz. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
}

export default Footer;
