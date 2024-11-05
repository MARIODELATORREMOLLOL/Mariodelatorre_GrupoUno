import Navbar from "../Navbar/Navbar";
import './Header.css';

export default function HeaderComponent() {
    const Logo = '/logo.png';
    return (
        <header className="cabezal">
            <div className="header-logo">
                <img src={Logo} alt="Logo Principal" width="140px" height="auto" />
            </div>
            <div className="menu">
                <Navbar />
            </div>
        </header>
    );
}
