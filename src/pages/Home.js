import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react"

const Home = () => {
    return ( <article>
        <nav className="flex">
        <Link to="/">
        <FeatherIcon icon="triangle" color="grey" fill="grey"/>
        </Link>
        <h1>Popular classes</h1>
        </nav>
        <section>
            <section>

            </section>
            <section></section>
        </section>
    </article> );
}
 
export default Home;