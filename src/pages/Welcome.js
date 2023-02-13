import { Link } from "react-router-dom";

const Welcome = () => {
    return ( <article className="bg-top-image bg-center h-screen bg-cover">
        <section className="h-[300px] flex">
            <div className="flex flex-col justify-end">
                <h1 className="text-white text-big w-5 ml-12">
                Believe Yourself
                </h1>
                <div className="flex items-center gap-2">
                    <span className="bg-white h-1 w-12"></span>
                    <p className="text-white text-small">Train like a pro</p>
                </div>
            </div>
        </section>
        <section className="h-[400px] mt-24 bg-bottom-image bg-center bg-cover flex justify-end">
                <Link to="/login" className="rounded-l-2xl pr-5 pl-8 p-6 absolute z-10 bottom-20 bg-white text-medium">Start Training</Link>
        </section>
    </article> );
}
 
export default Welcome;