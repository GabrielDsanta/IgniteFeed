
import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'


export function Post({ author , publishedAte, content}){
    const dataFormatt = format(publishedAte, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR,})

    const dataRelativeToNow = formatDistanceToNow(publishedAte, {locale: ptBR, addSuffix: true,})

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

                <time title={dataFormatt} dateTime={publishedAte.toISOString()}>{dataRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {content.map(item => {

                    if(item.type === 'paragraph'){
                        return <p>{item.content}</p>
                    }
                    
                    else if(item.type === 'link'){
                        return <p><a href='#'>{item.content}</a></p>
                    }
                })}
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