import React,{ useEffect, useState} from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";

function Login{



    return(
        <div className="login">

            <h1>Login</h1>

            <form action="POST">
                <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" />
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" />
            </form>
        </div>
    )
}