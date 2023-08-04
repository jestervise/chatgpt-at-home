
import Plyr from "plyr-react";
import "plyr-react/plyr.css"

const plyrProps = {
    source: {
        type: 'video',
        sources: [{
            src:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            type:'video/mp4'
        }],
      
    },
  }

function VideoPlayer() {


    return (
        <>
         <Plyr {...plyrProps} />
        </>
    )
}

export default VideoPlayer
