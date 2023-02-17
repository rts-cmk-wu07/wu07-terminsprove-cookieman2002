import { useNavigate } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { useContext, useState } from "react";
import axios from "axios";
import { TokenContext } from "../contexts/TokenContext";

const Login = () => {
const {token, setToken} = useContext(TokenContext);
const [formError, setFormError] = useState();
function LoginHandler(e){
    
    
    const info = {
        username: e.target.username.value,
        password: e.target.password.value
        
    }
    
    if(!e.target.username.value && !e.target.password.value){
        e.preventDefault()
        console.log("you username or password were incorrect")
        setFormError(true)
    }
    else if(e.target.username.value.length < 1 && e.target.password.value.length < 1){
        e.preventDefault()
        console.log("you username or password were incorrect")
        setFormError(true)
    }
    else{
        setFormError(false)
        try {
            
            
            axios.post("http://localhost:4000/auth/token", info)
            .then((response) => setToken(response.data))
            
            console.log(token)
            navigate("/home")
        } 
        
        
    catch (error) {
        console.log(error)
    }
    
}
    
}
const navigate = useNavigate()

    function goBack(){
        navigate(-1)
    }

    return ( 
    <div>
        <nav>
            <ul>
        <li>
        <button onClick={goBack}>
    <FeatherIcon className="rotate-[30deg] ml-1" icon="triangle" color="#E4E4E4" fill="#E4E4E4"/>
    </button>
        
        </li>
            </ul>
        </nav>
    <section className="flex flex-col flex-1 justify-center items-center">


        <form onSubmit={LoginHandler} className="bg-grey rounded-3xl items-center flex flex-col p-12 mt-24 gap-5">
    <span className="text-medium">Your Login</span>
            <input type="text" name="username" placeholder="Your username here" className="border-b-2 border-black rounded-2xl p-1" />
            <input type="password" name="password"  placeholder="you password here" className="border-b-2 border-black rounded-2xl p-1" />
            <button type="submit" className="bg-orange text-white p-2 mt-5 rounded-3xl">Login</button>
        </form>
        {formError ? <div>something went wrong</div> : null}
    </section>
    </div> );
}
 
export default Login;