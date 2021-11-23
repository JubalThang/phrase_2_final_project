import { ImageList, Container } from "@mui/material"
import Cake from "./Cake"

export default function Products({ cakes, addFav }) {
    return (
        <div >
            <h1> Menu </h1>
            <Container >
                <ImageList cols={3} gap={10}>
                    {cakes.map(cake =>
                        <Cake key={cake.id} cake={cake} onAddFav={addFav}/>
                    )}
                </ImageList>
            </Container>
        </div>
    )
}