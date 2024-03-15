import React from 'react';
import { JitsiMeeting } from "@jitsi/react-sdk";

const JitsiMeetingComponent = ({ domain, roomName, configOverwrite, interfaceConfigOverwrite, userInfo }) => {
  return (
    <div style={{minHeigh:"100vh"}}>
      <JitsiMeeting
        domain={domain}
        roomName={roomName}
        configOverwrite={configOverwrite}
        interfaceConfigOverwrite={interfaceConfigOverwrite}
        userInfo={userInfo}
        onApiReady={(externalApi) => {
          // here you can attach custom event listeners to the Jitsi Meet External API
          // you can also store it locally to execute commands
        }}
        getIFrameRef={(iframeRef) => { iframeRef.style.height = '400px'; }}
      />
    </div>
  );
};

export default JitsiMeetingComponent;
