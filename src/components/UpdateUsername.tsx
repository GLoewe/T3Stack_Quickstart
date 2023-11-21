import React, { useState } from 'react';
import { useUser } from "@clerk/nextjs";
import { useNavigate } from "react-router-dom";

const UpdateUsername:React.FC = () => {
    const [username, setUsername] = useState('');
    const {user} = useUser(); // Update this based on your user hook
    const navigate = useNavigate();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handleClick = () => {
        updateUser();
    };


    const updateUrl = () => {
        if (user) {
            const newPath = `/user/${username}`;
            navigate(newPath);
        }
    };

    const updateUser = () => {
        if (username.length > 0 && username.length < 15) {
            try {
                user?.update({
                    username: username,
                }).catch(err => alert(err));
                updateUrl();
                setUsername("");
            } catch (error) {
                console.error('Error updating username:', error);
            }
        } else {
            console.log('Username must be between 0 and 15 characters');
        }
    };

    return (
        <div>
            <input type="string" value={username} onChange={handleInputChange}/>
            <button
                style={{padding: '0.5rem'}}
                type="button"
                onClick={handleClick}
            >
                Change Username
            </button>
        </div>
    );
}
export default UpdateUsername;