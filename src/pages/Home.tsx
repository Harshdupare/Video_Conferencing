import {useState} from 'react'
import {useNavigate} from 'react-router-dom'


const Home = () => {
  const [roomId, setRoomId] = useState<string>('');
  const navigate = useNavigate();

  const redirect =()=>{
    navigate(`/meet/${roomId}`)
  }

  return (
    <div>
        <div className='joinMeet'>
            <input 
             type='text'
             value={roomId} 
             onChange={(e)=>{setRoomId(e.target.value)}}
             placeholder='Meet-ID'
             />
            <br></br>
            <button onClick={redirect}>join Meeting</button>
        </div><br/>

        <div className='connected_user'>
            <button className=''>Logout</button>
            <h3>Connected User</h3>
            <ul></ul>
        </div><br/>
	  </div>
  )
}

export default Home


