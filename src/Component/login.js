import React,{useState, useEffect} from "react";
import Profile from "./profile";

const Login=()=>{

    const [user,setUser] = useState({
       
        email:"",
        password:"",
      
    })

    const [error,setError] = useState("")
    const [success,setSuccess] = useState("")
    const [token,setToken] = useState("")
   

        async function checkUser(e){
            e.preventDefault();
            
            if(!user.email || !user.password){
                setError("Please enter email and password")
                setSuccess("")
            }

        try{

            const res = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username:user.username,
                password:user.password,
            })
            })
            const response=await(res.json());
            console.log(response);
            
           if(response.message==undefined){
            setSuccess("logged in successfuly");
            setToken(response.token);
            setError("");
            console.log('1');
             return (
                {Profile}
             )
           }
           else{
            setError(response.message);
            setSuccess("");
           }
           
        }
        catch(err){
            setError(err.response.message);
            console.log(err.response.message);
                 setSuccess("")
        }

        
       
    }
    return(
        <div>
            <div className="fields">{error}</div>
            <div className="fields">{success}</div>
            <form className="form" onSubmit={checkUser}>
                <div className="label">Your Username</div>
                <div className="input">
                    <input type="text"
                        onChange={(e)=>{
                            setUser({...user,username:e.target.value})
                        }}
                    />
                </div>
                <div className="label">Password</div>
                <div className="input">
                    <input type="password"
                        onChange={(e)=>{
                            setUser({...user,password:e.target.value})
                        }}
                    />
                </div>
                <button type='submit'>
                    CONTINUE
                </button>
            </form>
        </div>
    )
}

export default Login;

