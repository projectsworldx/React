import * as React from 'react';
import { Container, Button,  Grid } from '@mui/material';




function Home() {
    return (
        <React.Fragment>
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    <Grid item xs={6} md={8}>
                        <div>xs=6 md=8</div>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <div>xs=6 md=4</div>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <div>xs=6 md=4</div>
                    </Grid>
                    <Grid item xs={6} md={8}>
                        <div>xs=6 md=8</div>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
}

export default Home;