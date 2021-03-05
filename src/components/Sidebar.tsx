
import { FiMoon, FiBell} from 'react-icons/fi';
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
        
      </div>
     

    </div>
  );
}