import { Space } from "antd"
import { useEffect, useState } from "react"
import { VideoPreviewData, VideoType } from "../../types";
import VideoPreview from "../Video/Video";

function VideoList() {
    const [videoList, setVideoList] = useState<VideoPreviewData[]>([]);

    useEffect(()=>{
        setVideoList([
        {title:'a test video title', 
        length: 2000, 
        createdDate: 1023, 
        type: VideoType.NORMAL, 
        description:"description",
        id:"123",
        previewVideo:"ala"
        },
        {title:'a test video title', 
        length: 2000, 
        createdDate: 1023, 
        type: VideoType.NORMAL, 
        description:"description",
        id:"123",
        previewVideo:"ala"
        },
        {title:'a test video title', 
        length: 2000, 
        createdDate: 1023, 
        type: VideoType.NORMAL, 
        description:"description",
        id:"123",
        previewVideo:"ala"
        },
        {title:'a test video title', 
        length: 2000, 
        createdDate: 1023, 
        type: VideoType.NORMAL, 
        description:"description",
        id:"123",
        previewVideo:"ala"
        },
        {title:'a test video title', 
        length: 2000, 
        createdDate: 1023, 
        type: VideoType.NORMAL, 
        description:"description",
        id:"123",
        previewVideo:"ala"
        },
       ])
    },[])

    return (
        <>
         <Space direction="vertical" size={16}>
            {videoList.map((data)=><VideoPreview videoData={data} />)}
         </Space>
        </>
    )
}

export default VideoList
