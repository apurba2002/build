import Baner from './baner1';
import Baner2 from './baner2';
import Leftimg from './leftimg';
import logo from './logo.svg';
import Main from './main';
import Navbar from './navbar';
import Projeect from './project';
import Rightimg from './rightimg';


function App() {
  let ritxt1 = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
  return (
    <>
      <Navbar />
      <Main />

      <Projeect />

      <Rightimg img="r1.webp" head="why investo club"
        txt={ritxt1} />
        <Baner />
        
      <Rightimg img="r2.png" head="we give you the best returns of money"
        txt={ritxt1} />
        <Leftimg img="idea1.png" head="we keep your investment safe and secure."
        txt={ritxt1} />
        <Rightimg img="idea2.png" head="stay connected and stay updated"
        txt={ritxt1} />
        <Baner2 />
        <Leftimg img="sky2.jpeg" head="we keep your investment safe and secure."
        txt={ritxt1} />
        <button className="about-btn">about us</button>
        <Rightimg img="map.png" head="see our projects in your area"
        txt={ritxt1} />
        <Leftimg img="mac .jpg" head="what our customers are saying "
         />
    </>
  );
}
export function projectshow() {
  document.querySelector("#project-hide").style.display = "block"
  document.querySelector("#psb").style.display = "none"
  window.location.href = "#project-hide"

}
export function projecthide() {
  document.querySelector("#project-hide").style.display = "none"
  document.querySelector("#psb").style.display = "block"
  window.location.href = "#project-show"

}


export default App;
