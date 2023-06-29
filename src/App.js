import './style/App.css'
import {Routes, Route} from 'react-router-dom'
import Authentication from "./pages/Authentication"
import ChatPage from "./pages/ChatPage"

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<ChatPage/>}/>
                <Route path="/chat" element={<ChatPage/>}/>
                <Route path="/login" element={<Authentication login={true}/>}/>
                <Route path="/signup" element={<Authentication login={false}/>}/>
            </Routes>
        </>
    );
}

export default App;