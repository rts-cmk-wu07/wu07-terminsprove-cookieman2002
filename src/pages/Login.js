import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
const Login = () => {
    return ( 
    <div>
        <Link to="/">
        <FeatherIcon icon="triangle" fill="grey" color="grey"/>
        </Link>
    <section className="flex flex-col flex-1 justify-center items-center">


        <form action="" className="bg-grey rounded-3xl items-center flex flex-col p-12 mt-24 gap-5">
    <span className="text-medium">Your Login</span>
            <input type="text" placeholder="Your username here" className="border-b-2 border-black rounded-2xl p-1" />
            <input type="text"  placeholder="you password here" className="border-b-2 border-black rounded-2xl p-1" />
            <button type="submit" className="bg-orange text-white p-2 mt-5 rounded-3xl">Login</button>
        </form>

    </section>
    </div> );
}
 
export default Login;