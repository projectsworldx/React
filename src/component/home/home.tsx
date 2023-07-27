import * as React from 'react';
import { Container, Button,  Grid } from '@mui/material';
//import  {Dashboard}  from 'importlib';
import  Dashboard  from './../layout/dashboard';





function Home() {
    return (
        <React.Fragment>
                <Grid container>
                    <Grid item xs={12} md={12}>
                        <div>Navigation</div>
                    </Grid>
                    <Grid item xs={4} md={3}>
                        <Dashboard />
                    </Grid>
                    <Grid item xs={8} md={9}>
                        <Container>
                         <div>Content</div>
                        </Container>
                    </Grid>
                </Grid>
        </React.Fragment>
    );
}

export default Home;