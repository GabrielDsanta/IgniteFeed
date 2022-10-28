
import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'


export function Post({ author , publishedAte}){
    return(
        <article className={styles.post}>
            <header className={styles.Header}>
                <div className={styles.author}>
                    <Avatar hasBorder src={author.authorUrl} alt="" />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title="27 De Outubro às 14:03" dateTime="2022-10-27 14:02:30">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
            <p>Fala galeraa 👋</p>

           <p> 
                Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. 
                O nome do projeto é DoctorCare 🚀
           </p>

            <p>jane.design/doctorcare</p>

            <p>
                <a href="#">#novoprojeto</a>{' '}
                <a href="#">#nlw</a>{' '}
                <a href="#">#rocketseat</a>
            </p>
        </div>

        <form className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>

            <textarea placeholder="Deixe um cometário"/>

            <footer>
                <button type='submit'>Publicar</button>
            </footer>
        </form>
        <div className={styles.commentList}>
            <Comment />
            <Comment />
            <Comment />
        </div>
    </article>
    )
}