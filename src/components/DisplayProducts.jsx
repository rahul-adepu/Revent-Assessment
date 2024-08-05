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
                    <Grid item key={product.id} xs={6} sm={6} md={4} lg={3}>
                        <Card sx={{ maxWidth: 345, maxHeight: 500, margin: 'auto', boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
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
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{
                                            overflow: 'hidden',
                                            whiteSpace: 'nowrap',
                                            textOverflow: 'ellipsis',
                                            maxWidth: '100%'
                                        }}
                                    >
                                        {product.shortDescription}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Price: ${product.price}
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
