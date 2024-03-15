import React, { useState, useEffect } from 'react';

const JitsiMeetComponent = () => {
  const [renderJitsi, setRenderJitsi] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRenderJitsi(true);
    }, 1000); // Adjust the delay time (in milliseconds) as needed

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (renderJitsi && window.JitsiMeetExternalAPI) {
      const api = new window.JitsiMeetExternalAPI("8x8.vc", {
        roomName: "vpaas-magic-cookie-ef69e4e2d8c644b68f667efbcbe334cd/SampleAppSacredPuzzlesRespectGenuinely",
        parentNode: document.querySelector('#jaas-container'),
      });

      return () => {
        api.dispose();
      };
    }
  }, [renderJitsi]);

  return (
    <div id="jaas-container" style={{ height: '100vh' }}>
      {!renderJitsi && <p>Loading Jitsi Meet...</p>}
    </div>
  );
};

export default JitsiMeetComponent;
