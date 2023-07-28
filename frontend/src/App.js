import Baner from './baner1';
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
  window.location.href = "#project-"

}


export default App;
