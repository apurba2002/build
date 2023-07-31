function Review(props){
    return(
        <>
            <div className="review" >
                <h1>{props.name}</h1>
                <p>{props.city}</p>
                <p>{props.msg}</p>
               <div className="star">
               <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>

               </div>


            </div>
        </>
    )
}
export default Review ;