import React, {useState} from 'react';
import {useUser} from "@clerk/nextjs";
import {useRouter} from "next/router";

const UpdateUsername: React.FC = () => {
    const [username, setUsername] = useState('');
    const {user} = useUser();
    const router = useRouter();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const updateUser = async () => {
        if (username.length > 0 && username.length < 15) {
            try {
                await user?.update({
                    username: username,
                }).catch(err => alert(err));
            } catch (error) {
                console.error('Error updating username:', error);
            }
        } else {
            console.log('Username must be between 0 and 15 characters');
        }
    };

    const handleButtonClick = async () => {
        await updateUser();
        await router.push("/");
    };

    return (
        <div>
            <input className={"text-gray-950"} type="string" value={username} onChange={handleInputChange}/>
            <button
                style={{padding: '0.5rem'}}
                type="button"
                onClick={handleButtonClick}
            >
                {user?.username ? "Change Username" : "Set Username"}
            </button>
        </div>
    );
}
export default UpdateUsername;