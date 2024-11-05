import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <nav style={styles.nav}>
            <div style={styles.container}>
                <Link to="/" style={styles.link}>Home</Link>
                {!isLoggedIn ? (
                    <>
                        <Link to="/login" style={styles.link}>Login</Link>
                        <Link to="/signup" style={styles.link}>Signup</Link>
                    </>
                ) : (
                    <button
                        onClick={() => setIsLoggedIn(false)}
                        style={styles.button}
                    >
                        Logout
                    </button>
                )}
            </div>
        </nav>
    );
}

const styles = {
    nav: {
        backgroundColor: '#333',
        padding: '1rem',
        marginBottom: '2rem'
    },
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        maxWidth: '1200px',
        margin: '0 auto'
    },
    link: {
        color: 'white',
        textDecoration: 'none'
    },
    button: {
        backgroundColor: '#666',
        color: 'white',
        border: 'none',
        padding: '0.5rem 1rem',
        cursor: 'pointer'
    }
};

export default Header;