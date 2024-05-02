import {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [Email,setEmail] = useState<string>();
  const [Password , setPassword] = useState<string>();
  const navigate = useNavigate();

  const login = async()=>{

        console.log(Email);
        console.log(Password);
        const res = await axios.post("http://127.0.0.1:8080/api/v1/users/login",{
                Email : Email,
                Password : Password,
            },
            {
                headers :{
                    'Content-Type' : 'application/json'
                }
            }

        )
        console.log(res);
        if(res){
            navigate("/home");
        }else{
            console.log(res);
        }
  }

  return (
    <div>
        <input name='Email' type='text' placeholder="Email" required onChange={(e)=>{setEmail(e.target.value)}} /><br/>
        <input name='Password' type='text' placeholder="Password" required onChange={(e)=>{setPassword(e.target.value)}} /><br/>
        <button onClick={login}>Login</button>
    </div>
  )
}

export default Login
