import Head from 'next/head';
import {useContext } from 'react';
import { signIn, useSession } from 'next-auth/client';
import styles from '../styles/pages/Index.module.css';
import React from 'react';
import { InfoBoxContext } from '../contexts/InfoBoxContext';


export default function Index() {

  const{openInfoBox, isInfoBoxOpen} = useContext(InfoBoxContext);

  const [ session ] = useSession()

  return (
    
    <div className={styles.container}>
      <Head>
          <title>
            Tomatte
          </title>
      </Head>
      
        {!session && <>
        <img className={styles.bg} src="/images/bg.png" alt=""/>



          <div className={styles.section}>

            <div className={styles.header}>

              <img className={styles.logoImage} src="/logo-tomatte.svg" alt="logo"/>
              <button type="button"
                 className={styles.buttonInfoHeader}
                  onClick={openInfoBox}
                  >
              <img className={styles.infoHeader} src="/icons/info.svg" alt="info"/>
                    
              </button>

            </div>
              <p className={styles.info1}>
                Promova sua saúde e  mantenha o foco nas atividades.
              </p>
              <p className={styles.info2}>
                O Tomatte combina a técnica pomodoro com alongamentos e um sistema de gamificação.
                
              </p>
         

                <div className={styles.buttons}>

                  <button type="button" 
                  className={styles.loginButton}
                  onClick={() => 
                  signIn('github', { callbackUrl: 'https://tomatte.vercel.app/home' })}>
                    <img src="/icons/github.svg" alt=""/>
                    LOGIN
                  </button>

                  <button type="button"
                  className={styles.infoButton}
                  onClick={openInfoBox}
                  >
                    <p>SAIBA MAIS</p>
                  </button>

                </div>

          </div>
        </>}

        {session && <>
         
        </>}
              
     </div>             
  );
}