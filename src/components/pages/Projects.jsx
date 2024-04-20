import ProjectBox from "../layout/ProjectBox"
import styles from "./Projects.module.css"
import img from "../../imgs/projetoTeste.png"

function Projects(){

    const obj=[
        {
            site: "https://boaventurak.github.io/cordel-moderno/",
            nome: "Cordel Moderno",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, natus iusto atque neque excepturi ipsam unde ullam aspernatur incidunt corrupti magnam reprehenderit, voluptatum quos cupiditate a ut est nihil perspiciatis.",
            alt: "Projeto coredel moderno",
            url: img
        },
    ]

    return(
        <section className={styles.container}>
            <div className={styles.divContainer}>
                <ProjectBox site={obj[0].site} nome={obj[0].nome} desc={obj[0].desc} alt={obj[0].alt} url={obj[0].url}/>
            </div>
        </section>
    )
}

export default Projects
