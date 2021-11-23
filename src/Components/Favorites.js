
import { Grid,Card, CardMedia, Typography, Container} from '@mui/material'
import { CardContent } from 'semantic-ui-react'

export default function Favorites({ favoriteCakes }) {

    return (
        <>
        <h1 style={{textAlign:'center'}}>Favorites list</h1>
        <Container>
        <Grid container spacing={2} direction='column'>
            <Grid item xs={6} md={4}>
                {favoriteCakes.length > 0 ?
                    favoriteCakes.map(cake =>
                        <Card key={cake.id} sx={{padding: 4, marginTop: 3}}>
                            <CardMedia component='img'
                                src={cake.image} sx={{borderRadius: 5}}/>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                   {cake.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {cake.detailDescription}
                                </Typography>
                            </CardContent>
                        </Card>
                    ): <h1 style={{textAlign :'center'}}>Choose your favorite cake.</h1>}
            </Grid>
        </Grid>
        </Container>
        </>
    )
}
