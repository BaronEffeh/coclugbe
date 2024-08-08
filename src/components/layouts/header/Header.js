import { NavLink, Outlet } from "react-router-dom";
import "./header.css";

export default function Header() {
    return (
        <div className="header">
            <header>
                <nav className="navbar">
                    <h3 className="logo"><NavLink to="/"> The Church of Christ Lugbe - Abuja</NavLink></h3>
                    <span className="vertical-line"></span>
                    <div className="desktopMenu">
                        <NavLink to="/" className="desktopMenuListItem">HOME</NavLink>
                        <NavLink to="about-us" className="desktopMenuListItem">ABOUT US</NavLink>
                        <NavLink to="sermons" className="desktopMenuListItem">SERMONS</NavLink>
                        <NavLink to="blog" className="desktopMenuListItem">BLOG</NavLink>
                    </div>
                    <button>CONTACT US</button>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    );
}