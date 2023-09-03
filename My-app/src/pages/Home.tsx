
import { NavBar } from "../components/NavBar"
import Cards from "../components/Cards"
export const Home = () => {

    if(localStorage.getItem('loginStatus')=='false'){
        window.location.href = '/'
    }
  return (
    <div>
      <NavBar></NavBar>
        <Cards></Cards>

    </div>
  )
}
