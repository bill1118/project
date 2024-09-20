function ContainerJourneyThree(props) {
    return (
        <>
            <section className="bee-animation">
                <TrainAnimation uniqueId="3" />
            </section>
            <section id="container-journey">
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
                    <figure>{props.img}</figure>
                    <div className="title">
                        <h1>{props.h1}</h1>
                    </div>
                    <div className="content">
                        <h2>{props.h2}</h2>
                        <p>歷史悠久的街區之一，<br />
                            擁有保存完好的西洋風格古老建築，<br />
                            如今則成為了眾多博物館和<br />
                            咖啡館的所在。<br />
                        </p>
                    </div>
                </div>
                <div className="box-second">
                    <figure className="big">{props.imgb}</figure>
                    <figure className="small">{props.imgs}</figure>
                    <div className="content">
                        <h3>{props.h3}</h3>
                        <p>可以乘坐纜車上山，<br />
                            俯瞰神戶市區和港口的美景。<br />
                            在周邊散步，<br />
                            參觀海洋博物館或乘坐遊船。<br />
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}



