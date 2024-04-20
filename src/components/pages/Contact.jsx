import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./Contact.module.css"

function Contact(){
    return(
        <section className={styles.contact}>
            <div className={styles.container}>
                <article className={styles.principal}>
                    <h1>Vamos trabalhar juntos!?</h1>
                    <h2>Entre em contato: </h2>
                    <p><span>Email:</span> britokauan078@gmail.com</p>
                </article>

                <article className={styles.secundario}>
                    <ul>
                        <li><a href="https://github.com/BoaventuraK" target="_blank"><FaGithub /></a></li>
                        <li><a href="https://www.linkedin.com/in/kauan-brito-3a0a91240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><FaLinkedin /></a></li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Contact
