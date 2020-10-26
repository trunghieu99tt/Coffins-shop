import { Button, message } from "antd";
import React, { useEffect, useState } from "react";
import CustomInput from "../../components/Form/Input/CustomInput";
import scrollToTop from "../../hooks/scrollToTop";

const AdminLogin = ({ setSignedIn }) => {
    const [formValue, setFormValue] = useState({
        username: "",
        password: "",
    });

    useEffect(() => {
        scrollToTop();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({
            ...formValue,
            [name]: value,
        });
    };

    const errorMessage = () => message.error("Check info again!");

    const handleSubmit = (e) => {
        e.preventDefault();
        const u = process.env.REACT_APP_USERNAME;
        const p = process.env.REACT_APP_PASSWORD;
        const { username, password } = formValue;
        if (username === u && p === password) {
            setSignedIn(true);
        } else {
            errorMessage();
            setSignedIn(false);
        }
    };

    const { username, password } = formValue;

    return (
        <section className="admin-sign-in">
            <div className="container">
                <form className="admin-sign-in-form" onSubmit={handleSubmit}>
                    <CustomInput
                        title="username"
                        name="username"
                        value={username}
                        onChange={handleChange}
                        type="text"
                    />
                    <CustomInput
                        title="Password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        type="password"
                    />

                    <Button type="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                </form>
            </div>
        </section>
    );
};

export default AdminLogin;
