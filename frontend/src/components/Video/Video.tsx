import { Card } from "antd"
import { VideoPreviewData } from "../../types"
import VideoPlayer from "../VideoPlayer/VideoPlayer"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
dayjs.extend(relativeTime);

interface VideoProps {
    videoData: VideoPreviewData
}

const  VideoPreview =({videoData}:VideoProps)=> {

    return (
       <Card title={videoData.title} extra={<a href="#">More</a>} style={{ width: 500 }}>
     
        <p>
            {dayjs().to(dayjs(videoData.createdDate))}
        </p>
        <VideoPlayer/>
        <p>{videoData.description}</p>
       </Card>
    )
}

export default VideoPreview
