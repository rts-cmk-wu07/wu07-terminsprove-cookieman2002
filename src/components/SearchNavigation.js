import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import FeatherIcon from "feather-icons-react"
import { useLocation,} from "react-router";
import classnames from "classnames";
const SearchNavigation = () => {
    const [menu, setMenu] = useState();
    const [loggedIn] = useState();
    const navigate = useNavigate()

    function goBack(){
        navigate(-1)
    }
    const params = useLocation()
    const urlPage = params.pathname.split("/")[1]
    console.log(params.pathname.split("/")[1])

    const isSchedule = urlPage.includes("Schedule")
    const classChange = classnames({
        "text-big": isSchedule,
        "text-medium": !isSchedule,
        "flex": isSchedule
    })
    
    return ( <nav className="flex flex-col ml-3 mr-3">
        <section className="mt-5 flex justify-between  items-center">

        <button className="text-orange flex items-center" onClick={goBack}>
    <FeatherIcon icon="triangle" size="15" color="#ffffff" className="rotate-[30deg] mr-1" fill="#F4A88E"/>
    <span className="mb-3" >Back</span>
    </button>

 {menu ? <div className=" flex flex-col h-screen z-10 bg-white w-screen absolute top-0" >
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
                {loggedIn ? <button>Log Out</button> : <Link to="/login" >Log in</Link> }
            
            </li>
        </ul>
    </div> : <button onClick={() => setMenu(true)}>
        <FeatherIcon icon="align-right" color="#E4E4E4" />
    </button> }
        </section>
        <section className={classChange}>
                {urlPage}
        </section>
    </nav> );
}
 
export default SearchNavigation;