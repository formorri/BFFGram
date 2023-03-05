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
import Video from '../components/Video'
import Card from '../components/Card';
import Action from '../components/Action';
import Footer from '../components/Footer';

import styles from '../styles/About.module.scss'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import { images } from './../constants';

export default function Home() {
    return (
        <Container>
            <Head>
            <link rel='canonical' hrefLang="en" href='https://www.bffgram.com/about' />
            </Head>

            <Background />
            <Navbar />

            <Section className={styles.hero} id="home">
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
                        <div>
                            <h2 className={styles.title}>Revolutionising social networking</h2>
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
                        <div>
                            <h2 className={styles.title}>Vision</h2>
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
                        <div>
                            <h2 className={styles.title}>Mission</h2>
                        </div>
                        <div className={styles.description}>
                            <p>Creativity. Simplicity. Safety.</p>
                        </div>
                    </Card>

                </Grid12>
            </Section>

            <Section className={styles.section2}>
                <Grid12 className={styles['section2__row1']}>
                    <div>
                        <h2 className={styles.title}>We are a Woman lead Company</h2>
                    </div>
                    <div className={styles.description}>
                        <p>Monah Al Jneibi is an Emirati citizen from Abu Dhabi, United Arab Emirates (UAE). Monah holds a Master Degree of Education Leadership. Her educational journey has been a series of choices and alternatives between the business and education fields. Some of the companies she worked for are: Royal Jet, Emirates Advanced Investments, Abu Dhabi Retirement, Pensions and Benefits Fund and Emirates Nuclear Energy Corporation</p>
                    </div>
                    <Video videoSource={'/videos/ceo.mp4'} />
                </Grid12>
                <Image
                    src={images.aboutFounder}
                    alt="founder"
                    className={styles['founder']}
                    loading="lazy"
                />
                <div className={styles['section2__row3']}>
                    <div className={styles['section2__row3--text']}>
                        <h2 className={styles.title}>
                            We hope to help bring back Social Media to its roots of connecting families. At BFFGram, we support one or more Sustainable Development Goals *SDGs) such as Zero Hunger.
                            Join us in becoming a role model to others as we strive to become the first social media app internationally to be lead by a woman.
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
