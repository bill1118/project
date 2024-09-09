import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();

    // 按下按鈕後跳轉到會員頁面
    const handleLogin = () => {
        navigate('/member'); // 跳轉到/member頁面
    };

    return (
        <div>
            <h1>首頁</h1>
            <button onClick={handleLogin}>登入會員頁面</button>
        </div>
    );
}

function MemberPage() {
    return (
        <div>
            <h1>會員頁面</h1>
            <p>歡迎來到會員頁面！</p>
        </div>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/member" element={<MemberPage />} />
            </Routes>
        </Router>
    );
}

export default App;
