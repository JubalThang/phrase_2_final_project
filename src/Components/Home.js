import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

export default function Home(){
    return(
        <div className="home">
            <h1>Best Cake In Town!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, doloribus! Molestias ullam ad a labore sunt veniam rem placeat repellat animi! Maxime omnis quidem expedita necessitatibus? Similique non illum quod.</p>
            <Link to={'/products'}> <Button basic inverted color={'orange'} size={'big'}>Check out our products!</Button> </Link>
        </div>
    )
}