function Rightimg(props) {
    return(
        <>
            <div className="rightimg">
                <div>
                    <p>Why chosse us</p>
                    <h1>{props.head}</h1>
                    <p>{props.txt}</p>

                </div>
                <img alt="" src={props.img}></img>

            </div>
        </>
    )
}
export default Rightimg;