import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
const App=()=>
{
    if(!localStorage.getItem('username')) return <LoginForm />


    return (
        <ChatEngine 
        height="100vh"
        projectID="273a7508-31f1-49bf-9d5c-324b04a6032b"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        
        />
    );

}
export default App