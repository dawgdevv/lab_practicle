import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [formdata, setformdata] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setformdata({ ...formdata, [e.target.name]: e.target.value });
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:3000/api/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formdata)
        });
        const data = await response.json();
        console.log(data);
        if (data.user) {
            navigate("/");
        }
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="email" name="email" placeholder="email" value={formdata.email} onChange={handleChange} />
                <input type="password" name="password" placeholder="password" value={formdata.password} onChange={handleChange} />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;