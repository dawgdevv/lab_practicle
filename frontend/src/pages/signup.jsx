import { useState } from "react";

function Signup() {
    const [formdata, setformdata] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setformdata({ ...formdata, [e.target.name]: e.target.value });
    }

    const handleSignup = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:3000/api/users/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formdata)
        });
        const result = await response.json();
        console.log(result);
    }

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
                <input type="text" name="username" placeholder="username" value={formdata.username} onChange={handleChange} />
                <input type="email" name="email" placeholder="email" value={formdata.email} onChange={handleChange} />
                <input type="password" name="password" placeholder="password" value={formdata.password} onChange={handleChange} />
                <button type="submit">Signup</button>
            </form>
        </div>
    );
}

export default Signup;