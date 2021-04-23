import {useContext } from 'react';
import { InfoBoxContext } from '../../contexts/InfoBoxContext';
import { FiX} from 'react-icons/fi';
import styles from './InfoBox.module.css';



export function InfoBox(){
    const {closeInfoBox}=useContext(InfoBoxContext);

   
    return(
        <div className={styles.overlay}>
         <div className={styles.container}>
             <header>SOBRE O TOMATTE</header>
             <p>Tomatte combina a técnica pomodoro com a<br/>
                 realização de pequenas atividades de alongemto e<br/>
                 aquecimento para seu corpo e seus olhos durante a<br/>
                 pausa.
                 <br/>
                 <br/>
                 Dessa forma te ajudando a manter o foco e<br/>
                 deixando seu corpo mais saúdavel enquanto você<br/>
                 realiza suas atividades. E com a utilização de um<br/>
                 sistema de gamificação tudo fica mais divertido!<br/>
                 <br/>
                 <br/>
                 Esse projeto foi inspirado no Move.it, realizado<br/>
                 durante a 4ª edição da Next Level Week, realizado<br/>
                 pela Rocketseat.
            </p>
           
             <button type="button"  onClick={closeInfoBox}>
                <FiX size={32}/>
             </button>
         </div>
        </div>
    )
}