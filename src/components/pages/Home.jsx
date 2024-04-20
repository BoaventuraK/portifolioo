import styles from "./Home.module.css"
import minhaFoto from "../../imgs/minhaFoto.jpeg"

function Home(){

    return(
        <main className={styles.home}>
            <div className={styles.container}>
                <section className={styles.apresentacao}>
                    <h1>Sobre mim</h1>
                    <p>Me chamo Kauan Boaventura Brito, iniciei no mundo da programação em 2022, quando ingressei no curso de Desenvolvimento de sistemas, em que hj sou formado, pelo Serviço Nacional de Aprendizagem Industrial (SENAI) onde obtive alguns conhecimentos em linguagens como Java, python, sql e javascript, linguagem que estou direcionando meu foco no momento. Atualmente, sou aluno do  Instituto Federal de Educação, Ciência e Tecnologia da Bahia (IFBA), onde faço bacharelado sistemas de informação.</p>
                </section>
                <section className={styles.img}>
                    <div>
                        <div>
                            <img src={minhaFoto} alt="minha foto" />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Home
