import { useState } from "react"
import axios from "axios";

const Signup = () => {
  const [Username,setUsername] = useState<string>();
  const [Email,setEmail] = useState<string>();
  const [Password , setPassword] = useState<string>();

  const signup = async()=>{
      await axios.post("http://127.0.0.1:8080/api/v1/users",{
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
  }


  return (
    <div className="">
        <div> 
            <input name='Username' type='text' placeholder="Username" required onChange={(e)=>{setUsername(e.target.value)}} /><br/>
            <input name='Email' type='text' placeholder="Email" required onChange={(e)=>{setEmail(e.target.value)}} /><br/>
            <input name='Password' type='text' placeholder="Password" required onChange={(e)=>{setPassword(e.target.value)}} /><br/>
            <button onClick={signup}>Submit</button>
        </div>
    </div>
  )
}

export default Signup
