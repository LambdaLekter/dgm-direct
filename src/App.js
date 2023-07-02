import './style/App.css'
import {Routes, Route, Navigate} from 'react-router-dom'

import Authentication from "./pages/Authentication"
import HomePage from "./pages/HomePage"
import ChatPage from "./pages/ChatPage"

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/chat" element={<ChatPage/>}/>
                <Route path="/login" element={<Authentication login={true}/>}/>
                <Route path="/signup" element={<Authentication login={false}/>}/>
                <Route path="*" element={<Navigate to='/' replace />} />
            </Routes>
        </>
    );
}

export default App;