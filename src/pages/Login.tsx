import {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [Email,setEmail] = useState<string>();
  const [Password , setPassword] = useState<string>();
  const navigate = useNavigate();

  const Login = async()=>{
        const res : string  = await axios.post("http://127.0.0.1:8080/api/v1/users/login",{
                Email,
                Password,
            },
            {
                headers :{
                    'Content-Type' : 'application/json'
                }
            }

        )
        console.log(res);
        if(res){
            navigate("/home")
        }else{
            console.log(Error);
        }
  }

  return (
    <div>
        <form action='' >
            <input name='Email' type='text' placeholder="Email" required onChange={(e)=>{setEmail(e.target.value)}} /><br/>
            <input name='Password' type='text' placeholder="Password" required onChange={(e)=>{setPassword(e.target.value)}} /><br/>
            <button onClick={Login}>Login</button>
        </form>
    </div>
  )
}

export default Login
