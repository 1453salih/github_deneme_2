import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Grid, Card, CardContent, Container, Avatar, Paper, Accordion, AccordionSummary, AccordionDetails, TextField } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import bgImage from './assets/bg.jpg';
export default function HomePage() {
    return (
        <div>
            {/* Navbar */}
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Salih Korkmaz
                    </Typography>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Services</Button>
                    <Button color="inherit">Contact</Button>
                </Toolbar>
            </AppBar>

            {/* Hero Section */}
            <Box
                sx={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '80vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#fff',
                    textAlign: 'center',
                    padding: 4,
                }}
            >
                <Typography variant="h2" component="h1">
                    Welcome to My Website
                </Typography>
                <Typography variant="h5" component="h2" sx={{ mt: 2 }}>
                    We provide amazing services
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 4 }}>
                    Get Started
                </Button>
            </Box>

            {/* Features Section */}
            <Container sx={{ py: 8 }}>
                <Grid container spacing={4}>
                    {[1, 2, 3].map((feature) => (
                        <Grid item key={feature} xs={12} sm={6} md={4}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        Feature {feature}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        This is a media card. You can use this section to describe the content.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Customer Testimonials */}
            <Container sx={{ py: 8 }}>
                <Typography variant="h4" component="h2" gutterBottom>
                    What Our Customers Say
                </Typography>
                <Grid container spacing={4}>
                    {[1, 2, 3].map((testimonial) => (
                        <Grid item key={testimonial} xs={12} sm={4}>
                            <Paper elevation={3} sx={{ p: 3 }}>
                                <Avatar sx={{ bgcolor: 'primary.main', mb: 2 }}>A</Avatar>
                                <Typography variant="body1">
                                    This is a testimonial from a satisfied customer.
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Customer Name
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* FAQ Section */}
            <Container sx={{ py: 8 }}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Frequently Asked Questions
                </Typography>
                {[1, 2, 3].map((faq) => (
                    <Accordion key={faq}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Question {faq}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                This is the answer to the question.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Container>

            {/* Contact Form */}
            <Container sx={{ py: 8 }}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Get in Touch
                </Typography>
                <TextField label="Name" variant="outlined" fullWidth sx={{ mb: 2 }} />
                <TextField label="Email" variant="outlined" fullWidth sx={{ mb: 2 }} />
                <TextField
                    label="Message"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    sx={{ mb: 2 }}
                />
                <Button variant="contained" color="primary">
                    Submit
                </Button>
            </Container>

            {/* Footer */}
            <Box sx={{ bgcolor: 'primary.dark', color: 'white', p: 4 }}>
                <Container>
                    <Typography variant="body2" align="center">
                        © 2024 Salih Korkmaz. All rights reserved.
                    </Typography>
                </Container>
            </Box>
        </div>
    );
}
