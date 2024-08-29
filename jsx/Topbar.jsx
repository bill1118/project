const { useState } = React;

function Topbar() {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [isLoginActive, setLoginActive] = useState(true);

    const togglePopup = () => {
        setPopupVisible(!isPopupVisible);
    };

    const switchToLogin = () => {
        setLoginActive(true);
    };

    const switchToRegister = () => {
        setLoginActive(false);
    };

    return (
        <header id="container-topbar">
            <h1 className="logo">
                <a href="./index.html"><img src="./images/logo/Union-logo-brown 1.svg" alt="關西旅遊網logo" /></a>
            </h1>
            <nav className="navigation">
                <ul className="menu">
                    <li><a href="#container-topics">主題行程</a></li>
                    <li><a href="#container-free">自由編輯</a></li>
                    <li><a href="">旅遊資訊</a></li>
                    <li><a href="#foot">聯絡我們</a></li>
                </ul>
                <ul className="icon">
                    <li><a className="icon-shoppingcar" href=""><img src="./images/icon/shoppingcar.png" alt="購物車" /></a></li>
                    <li><a className="member" href="#" onClick={togglePopup}><img src="./images/icon/User.png" alt="會員" /></a></li>
                </ul>
            </nav>
            {/* logoin */}
            {isPopupVisible && (
                <div id="loginPopup" className="popup" style={{ display: 'flex' }}>
                    <div className="popupContent">
                        <span id="closePopup" className="closePopup" onClick={togglePopup}>&times;</span>
                        <div className="tabs">
                            <button id="loginTab" className={isLoginActive ? 'active' : ''} onClick={switchToLogin}>登入</button>
                            <button id="registerTab" className={!isLoginActive ? 'active' : ''} onClick={switchToRegister}>註冊</button>
                        </div>
                        <div id="loginForm" className={`form ${isLoginActive ? 'active' : ''}`}>
                            <form>
                                <input type="text" id="username" name="username" placeholder="請輸入電子郵件或電話號碼" required />
                                <input type="password" id="password" name="password" placeholder="請輸入密碼" required />
                                <div className="options">
                                    <div className="remeber">
                                        <input type="checkbox" id="rememberMe" name="rememberMe" />
                                        <label htmlFor="rememberMe">記住我</label>
                                    </div>
                                    <a href="#">忘記密碼/修改密碼</a>
                                </div>
                                <button type="submit" className="confirm">登入</button>
                                <span>或快速登入</span>
                                <div className="icon">
                                    <a href=""><img src="./images/icon/facebook.png" alt="facebook" /></a>
                                    <a href=""><img src="./images/icon/google.png" alt="google" /></a>
                                    <a href=""><img src="./images/icon/apple-logo.png" alt="apple" /></a>
                                </div>
                                <span>登入即表示您了解並同意關西旅遊網服務條款及隱私權政策</span>
                            </form>
                        </div>
                        <div id="registerForm" className={`form ${!isLoginActive ? 'active' : ''}`}>
                            <form>
                                <input type="text" id="regUsername" name="regUsername" placeholder="請輸入電子郵件" required />
                                <input type="tel" id="regTel" name="regTel" placeholder="請輸入電話號碼" required />
                                <div className="phone">
                                    <input type="tel" id="regMessage" inputMode="numeric" autoComplete="one-time-code" placeholder="輸入手機驗證碼" />
                                    <button type="submit" className="code">取得驗證碼</button>
                                </div>
                                <input type="password" id="regPassword" name="regPassword" placeholder="請輸入密碼(6-20英數字)" required />
                                <input type="password" id="passwordConfirm" name="passwordConfirm" placeholder="請再次輸入密碼" required />
                                <button type="submit" className="confirm">註冊</button>
                                <span>或快速登入</span>
                                <div className="icon">
                                    <a href=""><img src="./images/icon/facebook.png" alt="facebook" /></a>
                                    <a href=""><img src="./images/icon/google.png" alt="google" /></a>
                                    <a href=""><img src="./images/icon/apple-logo.png" alt="apple" /></a>
                                </div>
                                <span>註冊即表示您了解並同意關西旅遊網服務條款及隱私權政策</span>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}


