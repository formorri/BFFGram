import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image'

import Container from '../components/Container';
import Background from '../components/Background';
import Grid12 from '../components/Grid-1-2';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Grid from '../components/Grid';
import Card from '../components/Card';

import styles from '../styles/Home.module.scss'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import CountUp from 'react-countup';

import { images } from '../constants';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />

        <meta
          name="description"
          content="Use Sass to start your Next.js app with CSS superpowers!"
        ></meta>
      </Head>
      <Background />
      <Navbar />
      <Grid12>
        <div className={styles.hero}>
          <div className={styles.title}>
            <h1>All In One Application</h1>
          </div>
          <div className={styles.description}>
            <p>Lorem ipsum dolor sit amet. Hic voluptate velit qui inventore quas a mollitia suscipit hic ullam necessitatibus aut provident tempore. Quo voluptas esse id natus pariatur sed magni enim qui magni corporis</p>
          </div>
          <div className={styles['buttons-container']}>
            <div className={styles.buttons}>
              <Link href="/">Collaborate with us <ArrowOutwardIcon /> </Link>
            </div>
            <div className={styles['buttons-dark']}>
              <Link href="/">Play video <PlayArrowIcon />  </Link>
            </div>
          </div>
        </div>
        <div className={styles.stats}>
          <link href='./assets/images/circle-1.png'></link>
          <Image
            src={images.circle1}
            alt="circle-1"
            className={styles['circle-1']}
            loading="lazy"
          />
          <div className={styles['stats__1']}>
            <CountUp start={0} end={200} delay={0}>
              {({ countUpRef }) => (
                <div>
                  <h2><span ref={countUpRef} />+</h2>
                  <h3>Sales Agents</h3>
                </div>
              )}
            </CountUp>
          </div>
          <div className={styles['stats__2']}>
            <Image
              src={images.circle2}
              alt="circle-2"
              className={styles['circle-2']}
              loading="lazy"
            />
            <Image
              src={images.circle3}
              alt="circle-2"
              className={styles['circle-3']}
              loading="lazy"
            />
            <CountUp start={0} end={600} delay={0}>
              {({ countUpRef }) => (
                <div>
                  <h2><span ref={countUpRef} />+</h2>
                  <h3>Applications for sales agents</h3>
                </div>
              )}
            </CountUp>
          </div>
        </div>
      </Grid12>


      {/* <Main>
        <h1 className={styles.title}>
          <a href="https://nextjs.org">Next.js</a> Sass Hello Starter
        </h1>

        <p className={styles.description}>
          Get started by editing <code>pages/index.js</code>
        </p>

        <Grid>
          <Card>
            <a href="https://nextjs.org/docs">
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
          </Card>

          <Card>
            <a href="https://nextjs.org/learn">
              <h2>Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>
          </Card>

          <Card>
            <a href="https://github.com/vercel/next.js/tree/master/examples">
              <h2>Examples &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>
          </Card>

          <Card>
            <a
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            >
              <h2>Deploy &rarr;</h2>
              <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
            </a>
          </Card>
        </Grid>
      </Main> */}

      {/* <Footer /> */}
    </Container>
  )
}
