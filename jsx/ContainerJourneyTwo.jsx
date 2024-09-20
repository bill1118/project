function ContainerJourneyTwo(props) {
    return (
        <>
            <section className="bee-animation" style={{ width: '500px', transform: 'scaleX(-1) translateY(-90px)' }}>
                <TrainAnimation uniqueId="2" />
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
                        <p>為近畿地方參拜者最多的社寺，<br />
                            以千本鳥居而聞名，<br />
                            也是京都最受歡迎的景點之一。<br />
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
                        <p>世界遺產，<br />
                        著名的賞櫻和賞楓景點，<br />
                        擁有美麗的日式庭園和歷史建築。<br />
                        </p>
                    </div>
                    <figure className="small">{props.imgs}</figure>
                    <figure className="big">{props.imgb}</figure>
                </div>
            </section>
        </>
    )
}
