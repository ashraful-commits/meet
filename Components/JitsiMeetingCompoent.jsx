import { useEffect } from 'react';

const JitsiMeetComponent = () => {


  useEffect(() => {
    if (window.JitsiMeetExternalAPI) {
      const api = new window.JitsiMeetExternalAPI("8x8.vc", {
        roomName: "vpaas-magic-cookie-ef69e4e2d8c644b68f667efbcbe334cd/SampleAppSacredPuzzlesRespectGenuinely",
        parentNode: document.querySelector('#jaas-container'),
      });
  
      return () => {
        api.dispose();
      };
    } else {
      // If JitsiMeetExternalAPI is not available yet, wait for it to be available
      const interval = setInterval(() => {
        if (window.JitsiMeetExternalAPI) {
          clearInterval(interval);
          const api = new window.JitsiMeetExternalAPI("8x8.vc", {
            roomName: "vpaas-magic-cookie-ef69e4e2d8c644b68f667efbcbe334cd/SampleAppSacredPuzzlesRespectGenuinely",
            parentNode: document.querySelector('#jaas-container'),
          });
          return () => {
            api.dispose();
          };
        }
      }, 1000); // Check every second if the JitsiMeetExternalAPI is available
    }
  }, []);

  return <div id="jaas-container" style={{ height: '100vh' }} />;
};

export default JitsiMeetComponent;
