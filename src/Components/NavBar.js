
import { Link } from 'react-router-dom'
import { Button, Menu } from 'semantic-ui-react'

export default function NavBar() {
    return (
        <Menu pointing secondary>
            <Menu.Item>
                <img src='Images/logo.png' alt='logo' />
            </Menu.Item>

            <Menu.Menu position={'right'}>
                <Menu.Item>
                    <Link to='/'>
                        <Button className={'ui pink button'} size={'medium'} color={'pink'}>Home</Button>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to='/products'>
                        <Button size={'medium'} color={'pink'}>Products</Button>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to='/favorites'>
                        <Button size={'medium'} color={'pink'}>Favorites</Button>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to='/makeyourown'>
                        <Button size={'medium'} color={'pink'}>Make your own</Button>
                    </Link>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}