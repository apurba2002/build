import { projecthide, projectshow } from "./App";

export function Card_grp(props) {
    return (
        <>
            <div className="card-grp">
                <div className="card">
                    <img src={props.img1} alt=""></img>
                    <h1>
                        ascend series c
                    </h1>
                    <p>
                        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                    </p>

                </div>
                <div className="card">
                    <img src={props.img2} alt=""></img>
                    <h1>
                        marbelia series a
                    </h1>
                    <p>
                        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                    </p>


                </div>

                <div className="card">
                    <img src={props.img3} alt=""></img>
                    <h1>
                        elite series c
                    </h1>
                    <p>
                        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                    </p>


                </div>
            </div>
        </>
    )
}
function Projeect() {
    return (
        <>
            <div className="project"         id="project">
                <p>
                    properties
                </p>
                <h1>
                    featured properties
                </h1>
                <p>
                    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                </p>
                <div id="project-show">
                    {<Card_grp img1="b1.jpg" img2="b2.jpg" img3="b3.jpg" />}
                    <button id="psb" onClick={projectshow}>View all</button>

                </div>
                <div id="project-hide">
                    {<Card_grp img1="b4.jpg" img2="b5.jpg" img3="b6.jpg" />}
                    <button onClick={projecthide}>View less</button>

                </div>


            </div>

        </>
    )
}

export default Projeect;