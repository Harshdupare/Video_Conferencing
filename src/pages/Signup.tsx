import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [Username,setUsername] = useState<string>();
  const [Email,setEmail] = useState<string>();
  const [Password , setPassword] = useState<string>();
  const navigate = useNavigate();

  const signup = async()=>{
      const res = await axios.post("http://127.0.0.1:8080/api/v1/users",{
          Username,
          Email,
          Password
        },
        { 
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )

      if(res){
        alert("User is Created" );
        navigate("/");
      }else{
        alert("Invalid");
        location.reload();
      }

  }


  return (
    <div className="relative top-24 ">
        <div className='flex justify-center relative text-2xl'>
            <h1 className='text-white'>Signup</h1>
        </div>
        <div className="flex justify-center relative ">
          <div className='w-1/3 h-68 rounded-lg p-5 bg-gradient-to-r from-gray-900 to bg-gray-700'> 
            <input className='m-1 p-2 w-full text-white' name='Username' type='text' placeholder="Create a Username" required onChange={(e)=>{setUsername(e.target.value)}} /><br/>
            <input className='m-1 p-2 w-full text-white' name='Email' type='text' placeholder="Email" required onChange={(e)=>{setEmail(e.target.value)}} /><br/>
            <input className='m-1 p-2 w-full text-white' name='Password' type='text' placeholder="Create a Password" required onChange={(e)=>{setPassword(e.target.value)}} /><br/>
            <button className='m-2 p-2 w-28 text-white bg-sky-600'  onClick={signup}>Submit</button>
          </div>
        </div>
    </div>
  )
}

export default Signup
