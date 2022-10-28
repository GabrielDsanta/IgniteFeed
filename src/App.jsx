

import { Header } from './components/Header'
import { Post } from './Post'

import './global.css'
import styles from './App.module.css'


export function App() {
  return (
    <div>
      <Header />
      <Sidebar/>
      <div className={styles.wrapper}>
        <Post />
      </div>


    </div>
  )
}




