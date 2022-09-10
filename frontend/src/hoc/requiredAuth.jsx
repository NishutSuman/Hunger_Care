import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const RequiredAuth=({children})=>{
    const {isAuthorized}=useContext(AuthContext);

        if(!isAuthorized){
            return <Navigate to="/login" replace={true}/>
        }
        return children;
    
}