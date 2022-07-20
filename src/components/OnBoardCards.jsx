import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import PlanningMessage from './PlanningMessage';
import useWindowSize from '../hooks/useWindowSize';

const CardComp = ({ imgUrl, title, description }) => {
    return (
        <Card sx={{ minWidth: 275, minHeight: 300 }}>
            <CardContent>
                <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
                    <img src={imgUrl} alt="cutshort" height={200} width={200} />
                </Typography>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                {description}
            </CardContent>
        </Card>
    )
}
export default function OnBoardCards() {
    const [size, setSize] = useState("row");

    const { width } = useWindowSize();
    useEffect(() => {
        if (width <= 538) {
            setSize("column");
        } else {
            setSize("row");
        }
    }, [width, size]);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <PlanningMessage />
            <Grid container spacing={2} direction={size} justifyContent="center" alignItems="center">
                <Grid item xs={width <= 538 ? 12 : 6} md={6}>
                    <CardComp imgUrl="data:image/png;base64,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" title="For myself"
                        description={
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                write better,<br /> think more clearly, <br /> Stay organized.
                            </Typography>
                        } />
                </Grid>
                <Grid item xs={width <= 538 ? 12 : 6} md={6}>
                    <CardComp imgUrl="data:image/png;base64,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" title="With my team"
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
