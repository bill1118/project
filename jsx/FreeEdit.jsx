function FreeEdit(props) {
    const { itInItinerary, setItinerary, dayIndex, itemId, img, img1, p, h2, img2 } = props;

    const [isIntroducePopup, setIsIntroducePopup] = useState(false);
    const [currentImg, setCurrentImg] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);

    /* 介紹視窗 */
    const introduse = (img, products) => {
        setSelectedProduct(products); // 儲存當前選中的產品
        setCurrentImg(img); // 更新當前圖片
        setIsIntroducePopup(true); // 打開彈窗
    };

    /* 刪除功能 */
    const handleDelete = () => {
        setItinerary(prevItinerary => {
            const updatedItinerary = [...prevItinerary];
            updatedItinerary[dayIndex] = updatedItinerary[dayIndex].filter(item => item.id !== itemId);
            return updatedItinerary;
        });
    };

    /* 增減數值 */
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <>
            <div className={itInItinerary ? 'itinerary-style' : 'free-edit'}>
                <div className="list-item">
                    <a href="#" onClick={() => introduse(img, props)}>
                        <figure>{img}</figure>
                    </a>
                    <div className="list-text">
                        <div className="text-content">
                            <div className="title">
                                {img1}
                                <p>{p}</p>
                            </div>
                            <div className="text">
                                <h2>{h2}</h2>
                            </div>
                        </div>
                        <div className="icon">
                            <a href="#" onClick={() => introduse(img, props)}></a>
                        </div>
                    </div>
                    <div className='delete'>
                        <img src="./images/icon/trash.svg" alt="垃圾桶" onClick={handleDelete} className="delete-btn" />
                    </div>
                </div>

                {/* 介绍弹窗 */}
                {isIntroducePopup && selectedProduct && (
                    <div id="myModal" className="modal">
                        <div className="modal-content">
                            <div className="img_L">
                                {selectedProduct.img}
                            </div>
                            <div className="inf_R">
                                <span className="close" onClick={() => setIsIntroducePopup(false)}>×</span>
                                <div className="write">
                                    <h2>{selectedProduct.h2}</h2>
                                    <hr />
                                    <div className="icon">
                                        <img src="./images/introduce/map-marker.png" alt="" />
                                        <p>&nbsp;{selectedProduct.p}</p>
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
                                        <button className="minus" type="button" onClick={decreaseQuantity}>-</button>
                                        <input type="text" value={quantity} readOnly />
                                        <button className="plus" type="button" onClick={increaseQuantity}>+</button>
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
}
