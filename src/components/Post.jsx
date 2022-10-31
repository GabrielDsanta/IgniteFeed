
import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'


export function Post({ author , publishedAte, content}){

    const [comments, setNewComments] = useState(['Post Muito Bacana'], )

    const [newCommentText, setNewCommentText] = useState('', )

    const dataFormatt = format(publishedAte, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR,})

    const dataRelativeToNow = formatDistanceToNow(publishedAte, {locale: ptBR, addSuffix: true,})

    const commentEmpty = newCommentText.length === 0

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
                        return <p key={item.content}>{item.content}</p>
                    }
                    
                    else if(item.type === 'link'){
                        return <p key={item.content}><a href='#'>{item.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={AddComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea required onInvalid={ValidateTextArea} value={newCommentText} onChange={NewCommentChange} name='inputComment' placeholder="Deixe um cometário"/>

                <footer>
                    <button disabled={commentEmpty} type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
               {comments.map((comment) => {
                return <Comment onDeleteComment={DeleteComment} key={comment} content={comment} />
               })}
            </div>

    </article>
    )

    function AddComment(){
        event.preventDefault()
        setNewComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function NewCommentChange(){
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function ValidateTextArea(){
        event.target.setCustomValidity('Este campo é obrigatório!')
    }

    function DeleteComment(comment){
        const commentToBeDeleted = comments.filter((commentDelete) => {
            return comment !== commentDelete
        })

        setNewComments(commentToBeDeleted)
        console.log(`Deletar o comentário ${comment}`)
    }
}