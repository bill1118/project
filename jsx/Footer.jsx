function Footer() {
    return (
        <>
            <footer>
                <div id="foot">
                    <h1 className="logo">
                        <a href="./index.html">
                            <img src="./images/logo/logo-union-white.svg" alt="神火旅遊" />
                        </a>
                    </h1>
                    <nav className="navigation">
                        <ul className="menu-list">
                            <li className="menu">
                                <h2>神火旅遊旅行社有限公司</h2>
                                <ul className="submenu">
                                    <li>甲種旅遊業 交觀甲字第90001號</li>
                                    <li>品保甲北 3000 號</li>
                                    <li>代表人:關姬</li>
                                    <li>聯絡人:關東西</li>
                                </ul>
                            </li>
                            <li className="menu">
                                <h2>聯絡資訊</h2>
                                <ul className="submenu">
                                    <li>電話:02-3322-2777</li>
                                    <li>傳真:02-3322-2778</li>
                                    <li>地址:台北市中正區一段條條大路68號</li>
                                    <li>信箱:kansaitravel68@kstravel.com.tw</li>
                                </ul>
                            </li>
                            <li className="menu">
                                <h2>服務</h2>
                                <ul className="submenu">
                                    <li><a href="./ninetheme.html">主題行程</a></li>
                                    <li><a href="./free.html">自由規劃</a></li>
                                    <li><a href="./information.html">旅遊資訊</a></li>
                                    <li><a href="./contact-us.html">聯絡我們</a></li>
                                </ul>
                            </li>
                            <li className="menu">
                                <h2>Follow us</h2>
                                <ul className="submenu-icon">
                                    <li className="facebook">
                                        <a href=""><img src="./images/icon/fb.png" alt="fb" /></a>
                                    </li>
                                    <li className="line">
                                        <a href=""><img src="./images/icon/line.png" alt="line" /></a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="small">
                    <small>版權所有 &copy; 2024 神火旅遊</small>
                </div>
                <div id="butler"><img src="./images/side-btn/butler.svg" alt="小管家按鈕" /></div>
                <div id="gotop" onClick={() => {
                    $('html,body').animate({ scrollTop: 0 }, 1000);
                }}><img src="./images/icon/top.btn.svg" alt="" /></div>
            </footer>
        </>
    )
}