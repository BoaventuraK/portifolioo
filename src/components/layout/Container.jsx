import styles from "./Container.module.css"

function Container(props){
    return(
        <div className={`${styles.container} ${styles[props.classNome]}`}>
            {props.children}
        </div>
    )
}

export default Container
