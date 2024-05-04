import {useParams} from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import "./Room.css"
const Room = () => {
   
    const { roomId } = useParams<{ roomId: string }>();
    console.log(typeof roomId);

    // const name : string | null = localStorage.getItem("Username");
    // console.log(name)
    // if( name == null){
    //     return ;
    // }
    const mymeeting  = async(element : any) =>{
        if (!roomId) {
            console.error('Room ID is undefined');
            return;
        }
        const appID = 309209290 ;
        const serverSecret = "9851e888c9f7fcf84e2edb55bb98ff49";
        const kitToken : string =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId ,Date.now().toString(), "your name" );
        
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        // start the call
        zp.joinRoom({
                container: element,
                scenario: {
                    mode: ZegoUIKitPrebuilt.VideoConference,
                },
        });
    
    }

  return (
    <>
        <div className="myCallContainer " id="myCallContainer" ref={mymeeting} ></div>
    </>
  )
}

export default Room
