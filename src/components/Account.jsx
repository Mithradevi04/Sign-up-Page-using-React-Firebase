import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Account = () => {
    const { user, logOut } = UserAuth();

    const navigate = useNavigate();

    const handleLogOut = async () => {
        try {
            console.log(`${user} logged out`);
            await logOut();
            navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
        <div className="max-w-[600px] mx-auto my-16 p-4">
            <h1 className="text-2xl font-bold py-4">Account</h1>
            <p>User Email: {user && user.email}</p>
            <button onClick={handleLogOut} className="border px-6 py-2 my-4">
                Logout
            </button>
        </div>
    );
};

export default Account;
