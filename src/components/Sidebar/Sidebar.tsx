import {useContext} from 'react'
import { signOut } from 'next-auth/client';
import { FiLogOut, FiMoon} from 'react-icons/fi';
import styles from './Sidebar.module.css';
import {ThemeContext} from '../../contexts/ThemeContext'


export function Sidebar() {

  const {toggleTheme} = useContext(ThemeContext)

  return(

    <div className={styles.container}>

      <img src="/logo-full.svg" alt=""/>

      <div className={styles.buttons}>
        
       

        <button type="button" onClick={toggleTheme}>
          <div></div>
          <FiMoon size={32} />
        </button>

        <button type="button" className="signout" onClick={() => 
            signOut({ callbackUrl: 'http://localhost:3000' })}>
          <div></div>
          <FiLogOut size={32} />
        </button>
        
      </div>
     

    </div>
  );
}