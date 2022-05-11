import React from 'react';
import { useNavigate } from 'react-router-dom';
const Contract = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h3>This is contract page</h3>
            <button onClick={()=>{
                navigate("/home");
            }}>Back To Home Page</button>
        </div>
    );
};

export default Contract;