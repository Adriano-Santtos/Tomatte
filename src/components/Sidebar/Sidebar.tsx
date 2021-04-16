import {useContext} from 'react'
import Link from 'next/link'
import { signOut,  } from 'next-auth/client';
import { FiLogOut, FiMoon, FiSun, FiCheckSquare, FiHome} from 'react-icons/fi';
import styles from './Sidebar.module.css';
import {ThemeContext} from '../../contexts/ThemeContext'

export function Sidebar() {
  const {toggleTheme, theme }= useContext(ThemeContext)

  return(

    <div className={styles.container}>

      <img src="/logo.svg" alt=""/>

      <div className={styles.buttons}>

        <Link href="/home">
          <a>
            <button type="button">
              <div></div>
              <FiHome size={32}/>
            </button>
          </a>
        </Link>

        {theme == 'dark' ?( 
          <button type="button" onClick={toggleTheme}>
            <div></div>
            <FiSun size={32}/>
          </button>

        ):(
          
          <button type="button" onClick={toggleTheme}>
            <div></div>
            <FiMoon size={32} />
          </button>
        )
        }

        <Link href="/next-features">
          <a>
            <button type="button" className="next-features">
              <div></div>
              <FiCheckSquare size={32}/>
            </button>
          </a>
        </Link>

    
        <button type="button" className="signout" onClick={() => 
            signOut({ callbackUrl: 'http://localhost:3000' })}>
          <div></div>
          <FiLogOut size={32} />
        </button>
            
      </div>
     
    </div>
  );
}