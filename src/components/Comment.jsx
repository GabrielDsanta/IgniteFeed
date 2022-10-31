

import { Trash, ThumbsUp } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({ content , onDeleteComment }){
    const [likesCount, setLikesCount] = useState(0)


    function handleDeleteComment(){
        onDeleteComment(content)
    }

    function handleAddLikes(){
        setLikesCount((value) => {
            return value + 1
        })
    }

    return(
        <div className={styles.Comment}>
            <Avatar hasBorder={false} src="https://github.com/diego3g.png"/>

            <div className={styles.CommentBox}>
                <div className={styles.CommentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gabriel Santana</strong>
                            <time title="27 De Outubro às 14:03" dateTime="2022-10-27 14:02:30">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar Comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleAddLikes}>
                        <ThumbsUp />
                        Aplaudir <span>{likesCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}