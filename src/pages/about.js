import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image'

import Container from '../components/Container';
import Background from '../components/Background';
import Section from '../components/Section';
import Grid12 from '../components/Grid-1-2';
import Grid13 from '../components/Grid-1-3';
import Navbar from '../components/Navbar';
import Scroll from '../components/Scroll';
import Main from '../components/Main';
import Grid from '../components/Grid';
import Card from '../components/Card';
import Carousel from '../components/Carousel';
import Action from '../components/Action';
import Footer from '../components/Footer';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import styles from '../styles/About.module.scss'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

            <Section className={styles.hero}>
                <Grid13 className={styles['hero__grid']}>
                    <div className={styles['hero__grid--column1']}>
                        <Image
                            src={images.circle1}
                            alt="circle-1"
                            className={styles['circle-1']}
                            loading="lazy"
                        />
                    </div>
                    <div className={styles['hero__grid--column2']}>
                        <div className={styles['sub-header']}>
                            <p>about us</p>
                        </div>
                        <div className={styles.title}>
                            <h1>Revolutionising social networking</h1>
                        </div>
                        <div className={styles.description}>
                            <p>Working with BFF Gram means joining a community who are  passionate about transforming the very idea of social networking.</p>
                        </div>
                        <div className={styles['buttons-container']}>
                            <div className={styles.buttons}>
                                <Link href="#contact">Collaborate with us <ArrowOutwardIcon /> </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles['hero__grid--column3']}>
                        <Image
                            src={images.circle3}
                            alt="circle-3"
                            className={styles['circle-3']}
                            loading="lazy"
                        />
                    </div>
                </Grid13>
                <Scroll />
            </Section>

            <Section className={styles.section1}>
                <Grid12 className={styles['section1__grid']}>
                    <Card className={styles['section1__cards']}>
                        <div className={styles['section1__cards--images']}>
                            <Image
                                src={images.aboutApple}
                                alt="apple"
                                className={styles['apple']}
                                loading="lazy"
                            />
                            <Image
                                src={images.aboutPlay}
                                alt="apple"
                                className={styles['play']}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.title}>
                            <h1>Vision</h1>
                        </div>
                        <div className={styles.description}>
                            <p>To be ranked in both Apple and Google stores as the best social media platform.</p>
                        </div>
                    </Card>
                    <Card className={styles['section1__cards']}>
                        <div className={styles['section1__cards--images']}>
                            <Image
                                src={images.aboutMission}
                                alt="mission"
                                className={styles['mission']}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.title}>
                            <h1>Mission</h1>
                        </div>
                        <div className={styles.description}>
                            <p>Creativity. Simplicity. Safety.</p>
                        </div>
                    </Card>

                </Grid12>
            </Section>

            <Section className={styles.section2}>
                <Grid12 className={styles['section2__row1']}>
                    <div className={styles.title}>
                        <h1>We are a Woman lead Company</h1>
                    </div>
                    <div className={styles.description}>
                        <p>Write up about Monah’s accomplishments, passion for the company….Lorem ipsum dolor sit amet. Hic voluptate velit qui inventore quas a mollitia suscipit hic ullam necessitatibus aut provident tempore. Quo voluptas esse id natus pariatur sed magni enim qui magni quas a mollitia suscipit hic ullam necessitatibus aut provident tempore. Quo voluptas esse id natus pariatur sed magni enim qui magni.</p>
                    </div>
                </Grid12>
                <Image
                    src={images.aboutFounder}
                    alt="founder"
                    className={styles['founder']}
                    loading="lazy"
                />
                <div className={styles['section2__row3']}>
                    <div className={styles['section2__row3--text']}>
                        <h2>
                            Quote from Monah Lorem ipsum dolor sit amet. Hic voluptate velit qui inventore quas hic ullam necessitatibus aut
                        </h2>
                    </div>
                    <Image
                        src={images.quotes}
                        alt="quotes"
                        className={styles['quotes']}
                        loading="lazy"
                    />
                </div>
                <div className={styles['section2__row4']}>
                    <h2>Monah Al Jneibi</h2>
                    <p>Founder & CEO</p>
                </div>
            </Section>

            <Section className={styles['call-to-action']}>
                <Action />
            </Section>

            <Footer />
        </Container>
    )
}