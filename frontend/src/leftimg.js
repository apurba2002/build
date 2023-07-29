function Leftimg(props) {
    return(
        <>
            <div className="leftimg">
            <img alt="" src={props.img}></img>
                <div>
                    <p>Why chosse us</p>
                    <h1>{props.head}</h1>
                    <p>{props.txt}</p>

                </div>
               

            </div>
        </>
    )
}
export default Leftimg;