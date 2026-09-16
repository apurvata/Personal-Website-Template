import Nav from 'react-bootstrap/Nav';
import headerImage from '../assets/headerName.png'

const Header = () => {
    return (
        <div>
            <div>
                <nav className="fixed top left -translate w- max-w z- rounded- border bg- backdrop-blur shadow-[] before:content- before:absolute before:inset- before:rounded- before:border before:border-white before:bg-gradient-">
                    <div className="px py flex center gap font-bold">
                        <Nav.Item className="x-item">Home</Nav.Item>
                        <Nav.Item className="x-item">About</Nav.Item>
                        <Nav.Item className="x-item">Projects</Nav.Item>
                        <Nav.Link className="nav-item" href="mailto:">Contact</Nav.Link>
                    </div>
                </nav>
            </div>
            <header className="">
                <img src={headerImage} width="px" alt="Header Image" class="center-image" className="headerImage" />
            </header>
        </div>
    )
}

export default Header
