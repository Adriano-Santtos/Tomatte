import Head from 'next/head';
import {GetServerSideProps} from 'next';

import { CompletedChallenges } from "../components/CompletedChallenges/CompletedChallenges";
import { Countdown } from "../components/Countdown/Countdown";
import { ExperienceBar } from "../components/ExperienceBar/ExperienceBar";
import {Profile} from "../components/Profile/Profile";
import { ChallengeBox } from "../components/ChallengeBox/ChallengeBox";
import { Sidebar} from '../components/Sidebar/Sidebar';

import styles from '../styles/pages/Home.module.css';
import { CountdownProvider } from '../contexts/Countdown.Context';
import { ChallengesProvider } from '../contexts/ChallengesContext';


interface HomeProps{
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props) {

  console.log(props);

  return (

    <ChallengesProvider 
    level={props.level}
    currentExperience={props.currentExperience}
    challengesCompleted={props.challengesCompleted}>
       <div className={styles.container}>
        <Head>
          <title>Home</title>
        </Head>

        <Sidebar />

        <div className={styles.content}>
          <ExperienceBar />

          <CountdownProvider>
            <section>
              <div>
                <Profile/>
                <CompletedChallenges/>
                <Countdown />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
        </div>
      </div>
    </ChallengesProvider>

  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted} = ctx.req.cookies;
  
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}