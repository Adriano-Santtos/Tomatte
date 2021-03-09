import { signOut } from 'next-auth/client';
import { FiLogOut, FiMoon} from 'react-icons/fi';
import styles from '../styles/components/Sidebar.module.css';


export function Sidebar() {

  return(

    <div className={styles.container}>

      <img src="/logo-full.svg" alt=""/>

      <div className={styles.buttons}>
        
       

        <button type="button">
          <div></div>
          <FiMoon size={32} />
        </button>

        <button type="button" className="signout" onClick={() => 
            signOut()}>
          <div></div>
          <FiLogOut size={32} />
        </button>
        
      </div>
     

    </div>
  );
}