import {useParams} from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
   
    const { roomId } = useParams<{ roomId: string }>();
    console.log(typeof roomId);
    const mymeeting  = async(element : any) =>{
        if (!roomId) {
            console.error('Room ID is undefined');
            return;
        }
        const appID = 309209290 ;
        const serverSecret = "9851e888c9f7fcf84e2edb55bb98ff49";
        const kitToken : string =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId ,Date.now().toString(), "harsh" );
        
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
        <div ref={mymeeting} style={{ width: '100vw', height: '100vh' }}></div>
    </>
  )
}

export default Room
