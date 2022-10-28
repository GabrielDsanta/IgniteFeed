
import React from 'react'
import ReactDOM from 'react-dom/client'

import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'
import { Comment } from './components/Comment'

import './global.css'
import styles from './App.module.css'


const Posts = [
  {
    id: 1,
    author:{
      authorUrl: 'https://github.com/GabrielDsanta.png',
      name: 'Gabriel Santana',
      role: 'Web Developer'
    },
    content:[
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      },

      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },

      {
        type: 'link',
        content: 'jane.design/doctorcare'
      }
    ],

    publishedAte: new Date('2022-05-03 20:00:00'),
  },

  {
    id: 2,
    author:{
      authorUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO RocketSeat'
    },
    content:[
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      },

      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },

      {
        type: 'link',
        content: 'jane.design/doctorcare'
      }
    ],

    publishedAte: new Date('2022-05-15 19:00:00'),
  }

] 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>

        <main>
          {Posts.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAte={post.publishedAte}
              />
            )
          })}
        </main>
      </div>
      
  </React.StrictMode>
)


