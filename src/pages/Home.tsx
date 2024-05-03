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
       <div className='flex justify-center relative top-44 text-2xl'>
            <h1 className='text-white'>Enter or Create Meeting-Id</h1>
        </div>
        <div className='flex justify-center relative top-44 '>
          <div className='joinMeet w-96 h-68 rounded-lg p-5 bg-gradient-to-r from-gray-900 to bg-gray-700'>
              <input 
              type='text'
              value={roomId} 
              onChange={(e)=>{setRoomId(e.target.value)}}
              placeholder='Meet-ID'
              className='m-1 p-2 w-full text-white'
              />
              <br></br>
              <button className='m-2 p-2 w-28 text-white bg-sky-600' onClick={redirect}>join Meeting</button>
          </div>
        </div>
    </div>
    
  )
}

export default Home


