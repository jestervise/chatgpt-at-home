 import axios from 'axios';
 
 class API {
    baseUrl:string |undefined =''

    constructor(url:string | undefined){
        this.baseUrl = url;
    }

    getUser(){
        return axios.get(`${this.baseUrl}/user`)
    }

    getAccountDetail(userId:string){
        return axios.get(`${this.baseUrl}/user/${userId}`)
    }

    getVideos(){
        return axios.get(`${this.baseUrl}/video`)
    }

    getVideoDetail(id:string){
        return axios.get(`${this.baseUrl}/video/${id}`)
    }

    // uploadVideo(videoData){
    //     return axios.post(`${this.baseUrl}/video`,videoData)
    // }
}

export default new API(process.env.REACT_APP_NOT_SECRET_CODE);