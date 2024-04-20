import styles from "./ProjectBox.module.css"

function ProjectBox({ url,alt,nome,desc, site }){
    return (
        <div className={styles.container}>
            <div className={styles.imgs}>
                <img src={url} alt={alt} />
            </div>

            <div className={styles.info}>
                <h3>{nome}</h3>
                <p>{desc}</p>
            </div>

            <div className={styles.btn}>
                <a href={site} target="_blank">Ir para o projeto</a>
            </div>
        </div>
    )
}

export default ProjectBox