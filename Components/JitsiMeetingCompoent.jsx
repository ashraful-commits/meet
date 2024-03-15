import React, { useEffect, useState } from 'react';

const JitsiMeetComponent = () => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://8x8.vc/vpaas-magic-cookie-ef69e4e2d8c644b68f667efbcbe334cd/external_api.js';
    script.async = true;

    script.onload = () => {
      setIsScriptLoaded(true);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (isScriptLoaded && window.JitsiMeetExternalAPI) {
      const api = new window.JitsiMeetExternalAPI("8x8.vc", {
        roomName: "vpaas-magic-cookie-ef69e4e2d8c644b68f667efbcbe334cd/SampleAppSacredPuzzlesRespectGenuinely",
        parentNode: document.querySelector('#jaas-container'),
      });

      return () => {
        api.dispose();
      };
    }
  }, [isScriptLoaded]);

  if (!isScriptLoaded) {
    return <p>Loading Jitsi Meet...</p>;
  }

  return <div id="jaas-container" style={{ height: '100vh' }} />;
};

export default JitsiMeetComponent;
