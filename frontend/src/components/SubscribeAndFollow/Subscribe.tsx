import { Button } from "antd";

function Subscribe(){

    const subscribe = ()=>{
        console.log('subscribe')
    }

    return <Button onClick={()=>subscribe()}>Subscribe</Button>
}

export default Subscribe