import Nav from 'react-bootstrap/Nav';

const Footer = () => {
    return (
        <>
        <div>
            <p class="pt text-center font-bold text- font-">Stay tuned for updates!</p>
            <div className="px py flex center gap font-bold">
                <Nav.Link href="https://github.com/apurvata/Personal-Website-Template" className="nav-item">FAQ</Nav.Link>
            </div>
            <div class="bg flex center">
            <p>© </p>
            </div>
        </div>
        </>
    )
}

export default Footer 
