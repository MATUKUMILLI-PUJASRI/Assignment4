import './stylestwo.css';
import Navlink from './Navlink';
const Navbar = () => {

    return (

        <div className="navbar-section">

            <b><i>React</i></b>

            <Navlink linkname="Docs" link="https://reactjs.org/docs/getting-started.html"/>

            <Navlink linkname="Tutorial" link="https://reactjs.org/tutorial/tutorial.html"/>

            <Navlink linkname="Blog" link="https://reactjs.org/blog/"/>

            <Navlink linkname="Community" link="https://reactjs.org/community/support.html"/>

        </div>

    );

};

 

export default Navbar;