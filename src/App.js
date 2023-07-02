import './style/App.css'
import {Routes, Route, Navigate} from 'react-router-dom'

import Authentication from "./pages/Authentication"
import ChatPage from "./pages/ChatPage"

function App() {
    return (
        <>
            <Routes>
                <Route path="/chat" element={<ChatPage/>}/>
                <Route path="/login" element={<Authentication login={true}/>}/>
                <Route path="/signup" element={<Authentication login={false}/>}/>
                <Route path="*" element={<Navigate to='/login' replace />} />
            </Routes>
        </>
    );
}

export default App;