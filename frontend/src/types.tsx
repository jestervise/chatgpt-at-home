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