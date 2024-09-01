import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import './axiosDemo.css';


const AxiosDemo = () => {

    const [products, setProducts] = useState([]);

    const callFakeStoreApi = async () => {
        const { data } = await axios.get(process.env.REACT_APP_GET_PRODUCTS_URL);
        setProducts(data);
    }

    useEffect(() => {
        callFakeStoreApi();
    }, []);

    console.log(products);
    return (
        <Box sx={{ height: '100vh', width: '100vw', display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {products.map(product => (
                <Card id='prodcard' sx={{
                    maxWidth: 345, boxShadow: 3,
                    transition: 'box-shadow 0.1s ease-in-out',
                    '&:hover': {
                        boxShadow: 6,
                    },
                }}>
                    <CardMedia
                        sx={{ height: 200 }}
                        image={product.image}
                        title={product.title}
                    />

                    <CardContent>
                        <Typography>{product.description}</Typography>
                    </CardContent>

                    <CardActions>
                        <Button size='small'>proceed to buy</Button>
                        <Button size='small'>Share</Button>
                    </CardActions>
                </Card>
            ))}
        </Box>
    )
}

export default AxiosDemo;