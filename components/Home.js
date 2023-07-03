import React from 'react'

import Image from 'next/image'
import profilePic from '../public/jatin.jpg'
import styles from '../styles/Home.module.scss'
import { ActionIcon } from '@mantine/core'
import {
  BrandGithub,
  BrandLinkedin,
  Code,
} from 'tabler-icons-react'
import Typewriter from 'typewriter-effect';

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.homeContainer}>
        <div className={styles.textContainer}>
          <h3>Hey there, I am </h3>
          <h1>Jatin Dhingra...</h1>
          <h2><Typewriter
            options={{
              strings: ['FullStack Developer and Competitive Programmer'],
              autoStart: true,
              loop: true,
              
            }}
          /></h2>
          <div className={styles.iconContainer}>
            <a
              href="https://github.com/jatin-dhingra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.iconInnerContainer}>
                <BrandGithub size={30} />
                <span>Github</span>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/jatin-dhingra-3a48a519a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.iconInnerContainer}>
                <BrandLinkedin size={30} />
                <span>LinkedIn</span>
              </div>
            </a>
            
            <a
              href="https://leetcode.com/jatin_dhingra/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.iconInnerContainer}>
                <Code size={30} />
                <span>LeetCode</span>
              </div>
            </a>
            <a
              href="https://codeforces.com/profile/jatindhingra19"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.iconInnerContainer}>
                <Code size={30} />
                <span>Codeforces</span>
              </div>
            </a>
            <a
              href="https://www.codechef.com/users/jatin_192000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.iconInnerContainer}>
                <Code size={30} />
                <span>CodeChef</span>
              </div>
            </a>
            <a
              href="https://auth.geeksforgeeks.org/user/jatindhingradhingra99/practice"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.iconInnerContainer}>
                <Code size={30} />
                <span>GFG</span>
              </div>
            </a>
          </div>
        </div>
        <div className={styles.imageContainer}>
         
          <Image
            className={styles.profilepic}
            src={profilePic}
            objectFit="contain"
            alt="Picture of the author"
            // width={500} automatically provided
            // automatically={true}
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
            layout="responsive"
            priority
          />
          
        </div>
      </div>
    </div>
  )
}

export default Home
