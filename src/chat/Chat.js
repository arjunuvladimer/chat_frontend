import {useState} from 'react'
import ChannelList from './ChannelList'
import './Chat.scss'
const Chat = () => {
    const [channels, setChannels] = useState([
        {id: 1, name: 'firstChannel', participants: 10},
        {id: 2, name: 'secondChannel', participants: 10}
    ])
    return(
        <>
            <div className="chat-app">
                   <ChannelList channels = {channels}/>
            </div>
        </>
    )
}

export default Chat