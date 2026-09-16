import Nav from 'react-bootstrap/Nav';
import headerImage from '../assets/headerName.png'

const Header = () => {
    return (
        <div>
            <header className="">
                <img src={headerImage} width="px" alt="Header Image" class="center-image" className="headerImage" />
            </header>
        </div>
        
    )
}

export default Header 
