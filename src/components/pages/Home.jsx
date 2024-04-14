import styles from "./Home.module.css"

function Home(){
    return(
        <main className={styles.home}>
            <div className={styles.container}>
                <section>
                    <h1>Home</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, natus iusto atque neque excepturi ipsam unde ullam aspernatur incidunt corrupti magnam reprehenderit, voluptatum quos cupiditate a ut est nihil perspiciatis.</p>
                </section>
                <section className={styles.img}>
                    <div>
                        <div>

                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Home
