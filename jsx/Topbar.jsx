

function Topbar() {
    return (
        <>
            <header id="container-topbar">
                <h1 className="logo">
                    <a href="./index.html"><img src="./images/logo/Union-logo-brown 1.svg" alt="關西旅遊網logo"/></a>
                </h1>
                <nav className="navigation">
                    <ul className="menu">
                        <li><a href="#container-topics">主題行程</a></li>
                        <li><a href="#container-free">自由編輯</a></li>
                        <li><a href="">旅遊資訊</a></li>
                        <li><a href="#foot">聯絡我們</a></li>
                    </ul>
                    <ul className="icon">
                        <li><a className="icon-shoppingcar" href=""><img src="./images/icon/shoppingcar.png" alt="購物車"/></a></li>
                        <li><a className="icon-member" href=""><img src="./images/icon/User.png" alt="會員"/></a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
