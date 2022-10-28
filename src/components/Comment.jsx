
import { Trash, ThumbsUp } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment(){
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

                        <button title='Deletar Comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    
                    <p>Muito bom Devon, Parabéns !!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}