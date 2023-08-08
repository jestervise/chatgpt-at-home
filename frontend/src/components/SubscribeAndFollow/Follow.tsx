import { Button } from "antd";

function Follow(){

    const follow = ()=>{
        console.log('follow')
    }

    return <Button onClick={()=>follow()}>Follow</Button>
}

export default Follow