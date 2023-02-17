import SearchNavigation from "../components/SearchNavigation";
import { useEffect, useContext, useState } from "react";
import { TokenContext } from "../contexts/TokenContext";
import { getCookie } from "react-use-cookie";
import axios from "axios";

const Schedule = () => {
    const {token} = useContext(TokenContext)
    const cookieToken = getCookie("token")
const [userData, setUserData] = useState();
console.log("token", token)
    
    useEffect(() => {
        if(token.token || cookieToken.token){
            try {
                axios.get(`http://localhost:4000/api/v1/users/${token.userId}`, {
                    headers: {
                        Authorization : `Bearer ${token.token}`
                    }
                })
                .then(response => setUserData(response.data))
            } catch (error) {
                console.log("error", error)
            }
        }
    }, []);
    
    return ( <div>
        <SearchNavigation/>
        {userData ? userData.classes.map((items) => (
            <section key={items.className} className="ml-2 mr-2 border-b-2 border-dotted">
                <div className="flex justify-between " >
                    <p className="text-medium">{items.classDay}</p>
                    <p className="text-medium">{items.classTime}</p>
                </div>
                <p className="text-big">{items.className}</p>
                {console.log(items.classDay)}</section>
        )) : null}

    </div> );
}
 
export default Schedule;