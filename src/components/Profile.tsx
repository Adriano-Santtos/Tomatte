import { useContext } from 'react';
import {useSession} from 'next-auth/client';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';




export function Profile() {
    const {level} = useContext(ChallengesContext);
    const [session, loading] = useSession();

    
    
      return (
          <div className={styles.profileContainer}>
           
             {session && <>
              <img src={session.user.image} alt=""/>
                
              <div>
                  <strong>
                   {session.user.name}
                  </strong>
                    <p>
                        <img src="icons/level.svg" alt= "level" />
                    Level {level}
                    </p>

              </div>


          </>}

        
        </div>
      );

}