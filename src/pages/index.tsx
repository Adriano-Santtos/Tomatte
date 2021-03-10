import { signIn, useSession } from 'next-auth/client';
import styles from '../styles/pages/Index.module.css';

export default function Index() {
  const [ session, loading ] = useSession()

  return (
    <div className={styles.container}>

      <div>

        <img src="/Simbolo.svg" alt=""/>
      </div>


      <div className={styles.session}>

        <img className={styles.logo} src="/Logo.svg" alt=""/>

        <span>Bem-vindo</span>
        <p>Faça login para começar</p>
       

        <div className={styles.login}>
            {!session && <>

            <button type="button" 
            className={styles.loginButton}
            onClick={() => 
            signIn('auth0', { callbackUrl: 'http://localhost:3000/home' })}>
                Entrar
                </button>
            </>}

            {/* {session && <>
              <Link href="/home"
              />
            </>}  */}

        </div>
      </div>

      


    </div>


  )
  
}