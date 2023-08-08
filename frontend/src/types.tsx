export enum VideoType {
    SHORTS="shorts",
    NORMAL="normal"
}

export interface VideoPreviewData{
    title: string,
    previewVideo: string,
    id: string,
    type: VideoType,
    description: string,
    length: number,
    createdDate: number,
}
export interface UserData {
    id: number;
    name: string;
    displayName: string;
    gender: boolean;
    country: string;
    age: number;
    userStat: UserStats;
    videoStat: VideoStats;
}

export interface UserStats {
    subscriberCount: number;
    followerCount: number;
    
}

export interface VideoStats {
    viewCount: number
    videoCount:number;
}