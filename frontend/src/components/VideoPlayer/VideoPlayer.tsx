
import Plyr from "plyr-react";
import "plyr-react/plyr.css"

enum MediaType {
    video ='video',
    audio ='audio'
}
const plyrProps = {
    source: {
        type: 'video' as MediaType,
        sources: [{
            src:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            type:'video/mp4'
        }],
      
    },
    options: {}
  }

function VideoPlayer() {


    return (
        <>
         <Plyr {...plyrProps} />
        </>
    )
}

export default VideoPlayer
