

function Topbar() {
    return (
        <>
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
                        <li><a id="member" className="member" href=""><img src="./images/icon/User.png" alt="會員" /></a></li>
                    </ul>
                </nav>
                <div id="loginPopup" className="loginPopup">
                    <div className="list"> 
                        <div className="popupContent">
                            <span id="closePopup" className="closePopup">&times;</span>
                        </div>
                        <form>
                            <input type="text" id="username" name="username" placeholder="請輸入電子郵件或電話號碼" required />
                            <input type="password" id="password" name="password" placeholder="請輸入密碼" required />
                            <div className="select">
                                <input type="radio" name="remeberMe" />
                                <a href="">忘記密碼</a>
                            </div>
                            <button type="submit">登入</button>
                        </form>
                        <div className="other">
                            <a href=""><img src="" alt="" /></a>
                            <a href=""><img src="" alt="" /></a>
                            <a href=""><img src="" alt="" /></a>
                        </div>
                        <span></span>
                    </div>
                </div>
            </header>

        </>
    )
}
