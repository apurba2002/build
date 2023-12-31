import Baner from './baner1';
import Baner2 from './baner2';
import Footer from './footer';
import Leftimg from './leftimg';
import logo from './logo.svg';
import Main from './main';
import Navbar from './navbar';
import Projeect from './project';
import Review from './review';
import Rightimg from './rightimg';


function App() {
  let ritxt1 = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
  const msg="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla dignissim pellentesque. Donec sed hendrerit mi, ac finibus tortor. Fusce mattis, justo et imperdiet volutpat.";
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
        <Rightimg img="idea3.png" head="stay connected and stay updated"
        txt={ritxt1} />
        <Baner2 />
       <div id="about" >
       <Leftimg img="sky2.jpeg" head="know more about investo club"
        txt={ritxt1} />
       </div>
        <button className="about-btn">about us</button>
        <Rightimg img="map.png" head="see our projects in your area"
        txt={ritxt1} />
        <div id="review">
        <Leftimg img="mac .jpg" head="what our customers are saying "
         />
        
        <Review name="john wick" city="new york , usa" msg={msg} />
        <Footer />
        </div>

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
  window.location.href = "#project"

}






export default App;
