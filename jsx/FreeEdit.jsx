function FreeEdit(props) {
    return (
        <>
                
                    <div className="list-item">
                        <figure>{props.img}
                        </figure>
                        <div className="list-text">
                            <div className="text-content">
                                <div className="title">
                                {props.img1}
                                    <p>{props.p}</p>
                                </div>
                                <div className="content">
                                    <h2>{props.h2}</h2>
                                </div>
                            </div>
                            <div className="icon"><a href="">{props.img2}</a></div>
                        </div>
                    </div>
                
        </>
    )
}
