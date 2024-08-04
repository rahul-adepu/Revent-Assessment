


import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, Box } from '@mui/material';

function DisplayProducts({ data }) {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', margin: 'auto', width: "90%", padding: 2 }}>
            <Grid container spacing={4} justifyContent="center" alignItems="center">
                {data.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Card sx={{ maxWidth: 345, margin: 'auto' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="350"
                                    image={product.image}
                                    alt={product.productName}
                                    sx={{ objectFit: 'cover' }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {product.productName}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {product.shortDescription}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Price: {product.price}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default DisplayProducts;

