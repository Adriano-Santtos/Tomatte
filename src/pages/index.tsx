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
        

         <div className={styles.header}>
            <img className={styles.logoImage} src="/logo-tomatte.svg" alt="logo"/>
            <img className={styles.infoHeader} src="/icons/info.svg" alt="info"/>
         </div>

          
          
          <span>Promova sua saúde e  mantenha o foco nas atividades.</span>
          <p>Promova sua saúde e  mantenha o foco nas atividades.</p>
          
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
              <img className={styles.info} src="/icons/info.svg" alt="info"/>
              <p>SAIBA MAIS</p>
            </button>

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