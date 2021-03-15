import { signIn, useSession } from 'next-auth/client';
import styles from '../styles/pages/Index.module.css';
import Link from 'next/link'
import {useRouter} from 'next/router'

export default function Index() {
  const [ session, loading ] = useSession()
  const router = useRouter()

  return (
    <div className={styles.container}>
    {!session && <>

      <div>

        <img src="/Simbolo.svg" alt=""/>
      </div>


      <div className={styles.session}>

        <img className={styles.logo} src="/Logo.svg" alt=""/>

        <span>Bem-vindo</span>
        <p>Faça login para começar</p>
       

        <div className={styles.login}>
          

            <button type="button" 
            className={styles.loginButton}
            onClick={() => 
            signIn('github', { callbackUrl: 'http://localhost:3000/home' })}>
                Entrar
                </button>j

            

        </div>
      </div>
    </>}
      {session && <>
        <button type="button" 
            className={styles.loginButton}
            onClick={() => 
              signIn('github', { callbackUrl: 'https://moveit-asanttos.vercel.app' })}
            >
        
                voltar para a aplicação
              </button>
          
      </>}

      


    </div>


  )
  
}