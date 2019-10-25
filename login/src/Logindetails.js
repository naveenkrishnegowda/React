import React from 'react';
import './Header.css';

function Logindetails(){
    return(
        <div class="backgroundimag">
            <div class="form">
                <form id="formdetails">
                    <label for="uname"><b>Username: </b></label>
                    <input type="text" name="username" required/>

                    <label for="psw"><b>Email: </b></label>
                    <input type="email" name="email"/>

                    <label for="psw"><b>Password: </b></label>
                    <input type="password" name="password"/>
                    <button type="submit">LogIn</button>
                    </form>
                </div>
        </div>
    );
}
export  default Logindetails; 