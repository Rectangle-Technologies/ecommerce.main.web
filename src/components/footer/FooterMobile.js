import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import Footer1 from './Footer1'
import Footer3 from './Footer3'
import Footer4 from './Footer4'

const FooterMobile = (props) => {
    return (
        <Box style={{ backgroundColor: "#e5e5e5" }} width="100%">
            <Container maxWidth="lg" sx={{ p: 2 }}>
                <Grid container>
                    <Grid item xs={12} md={3} my={1}>
                        <img
                            src="/logo.png"
                            style={{ width: '70%' }}
                        />
                    </Grid>
                </Grid>
                <Grid container>
                    <Footer1 />
                    <Footer3 categories={props?.categories} />
                    <Footer4 />
                </Grid>
                <Grid container>
                    <Grid item xs={12} md={3} my={1}>
                        <center>
                            <img
                                src="https://s3-alpha-sig.figma.com/img/4c90/fc60/1aadc30cf43dacd92441bee2551cf456?Expires=1662940800&Signature=Ihm~3sNiVz0EKbw9wZODg6nlVg-oNyo4DwuQsfAEAOeCBNHAQmbExnGt37lj-Fikr9brXP1bzHixX~Fxs-PyFcGZRU3aLDhSOoMGa-DQKCUl~GgKEohxyUpVJUC6a5ja1C4rrtm43BwvkEQ5N-DZ2iPShOBwaD3WYr4hEYIXRjN-wsvgumBNHhk4zIiag~92Acr6ExbRIrnW7jFGAfjmcQouYLjIQbBJF8AgYHTf4N07p1RL46noCXlZkRpOwfz-e~aUqcG6oa5PZvVjf683XGKDOEy3BRIHzyI8bJyS9f5a1z1F6r9klg5yOhj6jqwVXD5HZ8cmITfH6jMKLbLpoQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                                alt="Payment Icons"
                                style={{ width: '100%', maxWidth: '300px' }}
                            />
                        </center>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default FooterMobile
