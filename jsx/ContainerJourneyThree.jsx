function ContainerJourneyThree(props) {
    return (
        <>
            <section className="bee-animation">
                <TrainAnimation uniqueId="3"  />
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
                        <p>{props.p1}</p>
                        <p>{props.p2}</p>
                        <p>{props.p3}</p>
                        <p>{props.p4}</p>
                        <p>{props.p5}</p>
                        <p>{props.p6}</p>
                        <p>{props.p7}</p>
                    </div>
                </div>
                <div className="box-second">
                    <figure className="big">{props.imgb}</figure>
                    <figure className="small">{props.imgs}</figure>
                    <div className="content">
                        <h3>{props.h3}</h3>
                        <p>{props.p8}</p>
                        <p>{props.p9}</p>
                        <p>{props.p10}</p>
                    </div>
                </div>
            </section>
        </>
    )
}



