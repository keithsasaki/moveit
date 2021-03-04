import styles from '../styles/components/Profile.module.css'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { useContext } from 'react'

export function Profile() {
  const { level } = useContext(ChallengesContext)

  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/keithsasaki.png" alt="profile picture" />
      <div>
        <strong>Keith Sasaki</strong>
        <p>
          <img src="icons/level.svg" alt="Level"></img>
          {level}
        </p>
      </div>
    </div>
  )
}