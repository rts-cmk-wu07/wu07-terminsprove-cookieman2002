import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import FeatherIcon from "feather-icons-react"
import { TokenContext } from "../contexts/TokenContext";
import { getCookie, setCookie } from "react-use-cookie";

const Navigation = () => {

const [menu, setMenu] = useState();
const [loggedIn, setLoggedIn] = useState();
const {token, setToken} = useContext(TokenContext)
const cookieToken = getCookie("token")


useEffect(() => {
    if(token.token){
        setLoggedIn(true)
    }

    if(cookieToken.token){
        setLoggedIn(true)
    }
}, []);


    const navigate = useNavigate()

    function goBack(){
        navigate(-1)
    }

return ( <nav className="mt-5 flex justify-around items-center">
    <button onClick={goBack}>
    <FeatherIcon icon="triangle" color="#E4E4E4" fill="#E4E4E4"/>
    </button>
    <h1 className="text-medium mb-10">Popular Classes</h1>
    
    {menu ? <div className=" flex flex-col h-screen z-50 bg-white w-screen absolute top-0" >
    <button className="self-end" onClick={() => setMenu(false)}>
        <FeatherIcon icon="x" color="#E4E4E4" size="40" />
    </button>
        <ul className="text-big flex flex-col items-center gap-8">
            <li>
                <Link to="/home" >Home</Link>
            </li>
            <li>
                <Link to="/Search" >Search</Link>
            </li>
            {loggedIn ? <li>
                <Link to="/Schedule">My Schedule</Link>
            </li> : null}
            
            <li>
                {loggedIn ? <button onClick={() => {
                    setToken("")
                    navigate(0)
                    setCookie("token", null, {days: -1})
                }} >Log Out</button> : <Link to="/login" >Log in</Link> }
            
            </li>
        </ul>
    </div> : <button onClick={() => setMenu(true)}>
        <FeatherIcon icon="align-right" color="#E4E4E4" />
    </button> }
    </nav> );
}
 
export default Navigation;