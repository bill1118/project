function FreeEdit(props) {

    const { itInItinerary, setItinerary, dayIndex, itemId } = props;

    const [isIntroducePopup, setIsIntroducePopup] = useState(false);

    /* 介紹視窗 */
    const introduse = () => {
        setIsIntroducePopup(!isIntroducePopup);
    }

    /* 刪除功能 */
    const handleDelete = () => {
        setItinerary(prevItinerary => {
            const updatedItinerary = [...prevItinerary];
            updatedItinerary[dayIndex] = updatedItinerary[dayIndex].filter(item => item.id !== itemId);
            return updatedItinerary;
        });
    }




    return (
        <>
            <div className={itInItinerary ? 'itinerary-style' : 'free-edit'}>
                <div className="list-item">
                    <a href="#" onClick={introduse}>
                        <figure>{props.img}</figure>
                    </a>
                    <div className="list-text">
                        <div className="text-content">
                            <div className="title">
                                {props.img1}
                                <p>{props.p}</p>
                            </div>
                            <div className="text">
                                <h2>{props.h2}</h2>
                            </div>
                        </div>
                        <div className="icon">
                            <a href="#" onClick={introduse}>{props.img2}</a>
                        </div>
                    </div>
                    <div className='delete'>
                        <img src="./images/icon/trash.svg" alt="垃圾桶" onClick={handleDelete} className="delete-btn" />
                    </div>
                </div>

                {/* 介绍弹窗 */}
                {isIntroducePopup && (
                    <div id="myModal" className="modal">
                        <div className="modal-content">
                            <div className="img_L">
                                <img src="./images/introduce/usj-1914942_1000.jpg" alt="" />
                            </div>
                            <div className="inf_R">
                                <span className="close" onClick={introduse}>×</span>
                                <div className="write">
                                    <h2>環球影城</h2>
                                    <hr />
                                    <div className="icon">
                                        <img src="./images/introduce/map-marker.png" alt="" />
                                        <p>&nbsp;大阪</p>
                                    </div>
                                    <p>簡介:</p>
                                    <p>是一座大型主題樂園，於2001年開幕，擁有多個受歡迎的主題區和遊樂設施。</p>
                                    <br />
                                    <p>營業時間:08:00-22:00</p>
                                    <br />
                                    <p>地址:</p>
                                    <p>大阪府大阪市此花區櫻島二丁目1番33號</p>
                                    <br />
                                    <p>電話：0570+123+123</p>
                                    <br />
                                    <p>門票：NT$1,500元</p>
                                    <br />
                                    <label htmlFor="date">選擇日期&人數:</label>
                                </div>
                                <form action="" name="form-date" id="form-date" title="選人数">
                                    <input type="date" name="date" id="date" title="date" placeholder="請選擇日期" />
                                    <div className="quantity">
                                        <button className="minus">-</button>
                                        <input type="text" value="1" min="1" />
                                        <button className="plus">+</button>
                                    </div>
                                    <div className="btn">
                                        <button type="submit" name="btn__contact--submit" id="btn__contact--submit" title="送出按钮">
                                            <span>加入行程</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>


        </>
    );
};
