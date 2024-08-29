function ContainerJourneyTwo(props) {
    React.useEffect(() => {
        // 動畫的 JavaScript 代碼
        gsap.registerPlugin(MotionPathPlugin);
        gsap.to("#bee", {
            duration: 10,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true,
            motionPath: {
                path: "#motionPath",
                align: "#motionPath",
                alignOrigin: [0.5, 0.5]
            }
        });
    }, []);
    return (
        <>
            <section className="bee-animation" style={{ transform: 'scaleX(-1) translateX(-780px)'}}>
                <BeeAnimation  uniqueId="2"/>
            </section>
            <section id="container-journey2">
                <div className="box-title">
                    <div className="title-list">
                        <div className="title">
                            <h2>{props.h2}</h2>
                        </div>
                        <div className="title">
                            <h3>{props.h3}</h3>
                        </div>
                        <div className="title">
                            <h4>{props.h4}</h4>
                        </div>
                    </div>
                    <div className="content">
                        <h5>{props.h5}</h5>
                    </div>
                </div>
                <div className="box-primary">
                    <div className="content">
                        <h2>{props.h2}</h2>
                        <p>日本著名的歷史城堡，<br />
                            為封建權利的象徵之一，<br />
                            代表擁有者有著強大的武力。<br />
                            在這裡可以了解<br />
                            大阪的歷史和文化。<br />
                            周圍的公園四季皆美，<br />
                            很適合與朋友散步和拍照。<br />
                        </p>
                    </div>
                    <div className="title">
                        <h1>{props.h1}</h1>
                    </div>
                    <figure>{props.img}</figure>
                </div>
                <div className="box-second">
                    <div className="content">
                        <h3>{props.h3}</h3>
                        <p>大阪著名的美食街，<br />
                            有各種當地特色美食，<br />
                            如章魚燒、大阪燒和串燒。<br />
                        </p>
                    </div>
                    <figure className="small">{props.imgs}</figure>
                    <figure className="big">{props.imgb}</figure>
                </div>
            </section>
        </>
    )
}
