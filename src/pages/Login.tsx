import {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [Email,setEmail] = useState<string>();
  const [Password , setPassword] = useState<string>();
  const navigate = useNavigate();

  const login = async()=>{
    try{
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
        if(res){
            if (res.data.username !== undefined) {
                localStorage.setItem("Username", res.data.username);
            } else {
                location.reload();
            }
            navigate("/home");
        }else{
            alert("Invaild User!! or does not have a login");
            location.reload();
        }
    }catch{
        alert("Invaild User!! or does not have a login");
        location.reload();
    }
        
  }

  return (
    <div className='relative top-24'>
        <div className='flex justify-center relative  text-2xl'>
            <h1 className='text-white'>Login</h1>
        </div>
        <div className='flex justify-center relative  '>
            <div className='w-1/3 h-68 rounded-lg p-5 bg-gradient-to-r from-gray-900 to bg-gray-700'>
                <input className='m-1 p-2 w-full text-white' name='Email' type='text' placeholder="Email" required onChange={(e)=>{setEmail(e.target.value)}} /><br/>
                <input className='m-1 p-2 w-full text-white' name='Password' type='password' placeholder="Password" required onChange={(e)=>{setPassword(e.target.value)}} /><br/>
                <button className='m-2 p-2 w-28 text-white bg-sky-600' onClick={login}>Login</button>

                <div className='m-2 p-2 text-white bg-gradient-to-r from-gray-900 to bg-gray-700'> 
                    If you don't have Account :-
                    <a href='/Signup'  className='text-sky-600 '> New Registration</a>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Login
