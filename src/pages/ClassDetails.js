import Navigation from "../components/Navigation";
import { useParams, useLocation } from "react-router";
import SearchNavigation from "../components/SearchNavigation";
import Rating from "../components/sub-components/Rating"

const ClassDetails = () => {
    const params = useLocation().state.from
    console.log(params)
    
    return ( <div>
    <SearchNavigation/>
        
        <div className="flex h-screen -translate-y-16 relative">
    <img src={params.asset.url} className="absolute top-0 h-[75vh] object-cover w-auto" alt="" />
        
        <div className="bottom-72 flex-col w-64 ml-3 flex absolute">
        <p className="text-white text-big">{params.className}</p>
        <Rating classId={params.id} />
        </div>
        <div className=" justify-end absolute bottom-72 right-0 flex rounded-l-2xl pr-5 pl-8 p-6 bg-white">
        <button className="text-medium">
        Sign Up
        </button>
        </div>
        </div>
    </div> );
}
 
export default ClassDetails;