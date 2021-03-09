import { signIn, signOut, useSession } from 'next-auth/client';
import styles from '../styles/pages/Index.module.css';

export default function Index() {
  const [ session, loading ] = useSession()

  return (
    <div className={styles.container}>

        <div className={styles.session}>
            {!session && <>
            Not signed in <br/>
            <button type="button" 
            className={styles.signinButton}
            onClick={() => 
            signIn('auth0', { callbackUrl: 'http://localhost:3000/home' })}>
                Sign in
                </button>
            </>}

            {session && <>
            Signed in as {session.user.email} <br/>

            <button type="button" 
            onClick={() => 
            signOut()}>
                Sign out
                </button>
            </>}

        </div>

    </div>


  )
  
}