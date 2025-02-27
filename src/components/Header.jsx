import { Link, useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate()
    return (
        <>
            <header className="header">
                <nav className="navbar">
                    <h1 className="logo"><Link to="/">TheBlog Media</Link></h1>
                    <ul className="navbar__tabs">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                        <li><Link to="/write">Write</Link></li>
                        <li><Link to="/community">Community</Link></li>
                    </ul>
                    <section className="in-out">
                        <button onClick={() => { navigate('/signin') }}>Sign in</button>
                        <button onClick={() => { navigate('/signout') }}>Sign up</button>
                    </section>
                </nav>
            </header>
        </>
    );
}

export default Header;