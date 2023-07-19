/* eslint-disable react/jsx-key */
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import styles from './Post.module.css';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';


/* eslint-disable react/prop-types */
export function Post({ author, publishedAt, content }) {
  const [comments,setComments] = useState([
    'Muito legal esse negóçu aí!'
  ]);
  const [newComment, setNewComment] = useState('');
  
  const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  });
  const publishedDateRelativetoNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  
  function deleteComment(content){
    console.log('seu cu bebe'+content);
    const newCommentList = comments.filter(item => item !== content);
    setComments(newCommentList);
  }
  
  function handleCreateNewComment(){
    event.preventDefault();
    setComments([...comments,newComment]);
    setNewComment('');
    
  }
  
  function handleNewCommentChange(){
    event.target.setCustomValidity('');
    setNewComment(event.target.value)
  }
  function handleNewCommentInvalid(){
    event.target.setCustomValidity('Obrigatório informar um texto para salvar bebe!');
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormated} dateTime={publishedAt.toISOString()} >
          {publishedDateRelativetoNow}
        </time>
      </header>

      <div className={styles.content} >
        {content.map(item =>{
          if(item.type === 'paragraph'){
            return <p key={item.content}>{item.content}</p>
          }else{
            return <p key={item.content}><a href="#">{item.content}</a></p>
          }
        })}
        
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
        onChange={handleNewCommentChange} 
        value={newComment}
        placeholder='Deixe um comentário' 
        required
        onInvalid={handleNewCommentInvalid}
        ></textarea>
        <footer>
          <button disabled={!newComment} type='submit'>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList} >
        {comments.map(item =>{
          return <Comment key={item} content={item} onDeleteComment={deleteComment} />;
        })}
      </div>
    </article>
  )
}
