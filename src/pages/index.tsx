import { signIn, useSession } from 'next-auth/client';
import styles from '../styles/pages/Index.module.css';
import {useRouter} from 'next/router'

export default function Index() {
  const [ session, loading ] = useSession()
  const router = useRouter()

  return (
  
    <div className={styles.container}>


      <img className={styles.bg} src="/images/bg.jpg" alt=""/>

        
      {!session && <>

      <div className={styles.session}>

          <img className={styles.logo} src="/logo-tomatte.svg" alt="logo"/>
          
          
          <span>Promova sua saúde e  mantenha o foco nas atividades.</span>
          
          <div className={styles.buttons}>

            <button type="button" 
            className={styles.loginButton}
            onClick={() => 
            signIn('github', { callbackUrl: 'http://localhost:3000/home' })}>
                <img src="/icons/github.svg" alt=""/>
                LOGIN
            </button>

            <button type="button"
            className={styles.infoButton}
            >
              <p>SAIBA MAIS</p>
            </button>

          </div>
      </div>

      <div className={styles.slider}>

        <img  src="/images/image.jfif" alt="image"/>

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