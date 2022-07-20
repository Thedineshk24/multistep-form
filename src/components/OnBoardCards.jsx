import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import PlanningMessage from './PlanningMessage';

const CardComp = ({ imgUrl, title, description }) => {
    return (
        <Card sx={{ minWidth: 275 }} >
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    <img src={imgUrl} alt="cutshort" />
                </Typography>
                <Typography variant="h4" component="div">
                    {title}
                </Typography>
                {description}
            </CardContent>
        </Card>
    )
}
export default function OnBoardCards() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <PlanningMessage />
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <CardComp imgUrl="https://i.imgur.com/B4tXSd1b.jpg" title="For myself" 
                    description={
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            write better,<br /> think more clearly, <br /> Stay organized.
                        </Typography>
                    } />
                </Grid>
                <Grid item xs={6}>
                    <CardComp imgUrl="https://i.imgur.com/q0DAtPMb.jpg" title="With my team" 
                    description={
                         <Typography sx={{ mb: 1.5 }} color="text.secondary">
                         Wikis, docs,tasks, &<br /> projects, all in one <br /> place.
                     </Typography>
                    } />
                </Grid>
            </Grid>
        </Box>
    );
}
