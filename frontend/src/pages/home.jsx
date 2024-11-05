import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h2>Welcome to the home page</h2>
            <p>This page is a protected page accessible after login</p>
            <div>
                <Link to="/login">
                    <button>Login</button>
                </Link>
                <Link to="/signup">
                    <button>Signup</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;