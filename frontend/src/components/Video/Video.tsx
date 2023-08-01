import { Card } from "antd"
import { VideoPreviewData } from "../../types"
import VideoPlayer from "../VideoPlayer/VideoPlayer"

interface VideoProps {
    videoData: VideoPreviewData
}

const  VideoPreview =({videoData}:VideoProps)=> {

    return (
       <Card title={videoData.title} extra={<a href="#">More</a>} style={{ width: 300 }}>
        <p>{videoData.description}</p>
        <p>{videoData.type}</p>
        <p>{videoData.createdDate}</p>
        <VideoPlayer/>
       </Card>
    )
}

export default VideoPreview
