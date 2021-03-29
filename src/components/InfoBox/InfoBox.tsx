import { useContext, useState } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import styles from './InfoBox.module.css';

export function InfoBox(){

    const [isInfoBoxOpen, setIsInfoBoxOpen] = useState(false);

    return(
        <div className={styles.overlay}>
         <div className={styles.container}>
             <h1>Sobre o Tomatte</h1>
             <p>Tomatte combina a técnica pomodoro(LINK) com a realização de pequenas atividades de alongemto e 
                aquecimento para seu corpo e seus olhos durante a pausa.
                Dessa forma te ajudando a manter o foco e deixando seu corpo mais saúdavel enquanto você realiza suas atividades.
                Esse projeto foi inspirado no Move.it, realizado durante a 4ª edição da Next Level Week, realizado pela Rocketseat.
             </p>
             <button type="button" onClick={closeInfoBox}>
                <img src="/icons/close.svg" alt="Fechar modal"/>
             </button>
         </div>
        </div>
    )
}