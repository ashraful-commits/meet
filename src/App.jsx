import React, { useState } from 'react';
import JitsiMeetingComponent from '../Components/JitsiMeetingCompoent';

const App = () => {
  const [domain, setDomain] = useState("meet.jit.si"); // Change this to your custom domain
  const [roomName, setRoomName] = useState("wordsphere Meeting");
  const [configOverwrite, setConfigOverwrite] = useState({
    startWithAudioMuted: true,
    disableModeratorIndicator: true,
    startScreenSharing: true,
    enableEmailInStats: false
  });
  const [interfaceConfigOverwrite, setInterfaceConfigOverwrite] = useState({
    DISABLE_JOIN_LEAVE_NOTIFICATIONS: true
  });
  const [userInfo, setUserInfo] = useState({
    displayName: 'YOUR_USERNAME'
  });
  const [jitsiApi, setJitsiApi] = useState(null); 

  const handleApiReady = (externalApi) => {
    console.log("...........",externalApi)
    setJitsiApi(externalApi); 
  };

  const handleIFrameRef = (iframeRef) => {
    iframeRef.style.height = '400px';
  };

  const handleJitsiAction = () => {
    if (jitsiApi) {
      // console.log(jitsiApi);
    } else {
      console.log("Jitsi API is not ready yet.");
    }
  };

  return (
    <div>
      <JitsiMeetingComponent
        domain={domain}
        roomName={roomName}
        configOverwrite={configOverwrite}
        interfaceConfigOverwrite={interfaceConfigOverwrite}
        userInfo={userInfo}
        onApiReady={handleApiReady}
        getIFrameRef={handleIFrameRef}
        // jwt={}
      />
      <button onClick={handleJitsiAction}>Perform Action with Jitsi API</button>
    </div>
  );
};

export default App;
