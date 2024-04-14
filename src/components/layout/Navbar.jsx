import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"

function Navbar(){
    return(
        <nav className={styles.navbar}>
            <Link to="/"><h2>Kauan Boaventura</h2></Link>
            <ul>
                <li>
                    <Link className={styles.lk} to="/">Home</Link>
                </li>

                <li>
                    <Link className={styles.lk} to="/projects">Projetos</Link>
                </li>

                <li>
                    <Link className={styles.lk} to="/contact">Entrar em contato</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
