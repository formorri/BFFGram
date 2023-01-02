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

import styles from '../styles/Tokenomics.module.scss'
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
                            <p>tokenomics</p>
                        </div>
                        <div className={styles.title}>
                            <h1>Bringing Utility Into BFF Gram</h1>
                        </div>
                        <div className={styles.description}>
                            <p>Do it all with BFF Gram and get trendy NFTs too with your consultation.</p>
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
                <Grid12 className={styles['flex-top']}>
                    <div className={styles['section1-header']}>
                        <div className={styles.title}>
                            <h1>Outline and Uses</h1>
                        </div>
                        <div className={styles.description}>
                            <p>Short description about the purpose of using the blockchain ipsum dolor sit amet. Hic voluptate velit qui inventore quas a mollitia suscipit hic ullam necessitatibus aut provident tempore. Quo voluptas esse id natus pariatur sed magni enim qui magni.</p>
                        </div>
                        <Image
                            src={images.token1}
                            alt="blockchain"
                            className={styles['blockchain']}
                            loading="lazy"
                        />
                    </div>
                    <div className={styles['section1-container']}>
                        <Grid12>
                            <div className={styles.column1}>
                                <Card className={styles['section1__cards']}>
                                    <h2>Utility token issued by PISK used for payment of services of Subject Matter Experts</h2>
                                </Card>
                                <Card className={styles['section1__cards']}>
                                    <h2>Used for savings and crowdfunding features</h2>
                                </Card>
                            </div>
                            <div className={styles.column2}>
                                <Card className={styles['section1__cards']}>
                                    <h2>Used for any purchases on app</h2>
                                </Card>
                                <Card className={styles['section1__cards']}>
                                    <h2>Used for UNSDG 2 to align with World Food Program to feed the hungry (200m+)</h2>
                                </Card>
                            </div>
                        </Grid12>
                    </div>
                </Grid12>
            </Section>

            <Section className={styles.section2}>
                <Grid12>
                    <div className={styles['section2__column1']}>
                        <div className={styles.title}>
                            <h1>2 billion tokens minted</h1>
                        </div>
                        <div className={styles.description}>
                            <ul>
                                <li>Pre Sale and Public Sale 10% of tokens for Pre Sale</li>
                                <li>Pre Sale closes 1 month before public sale</li>
                                <li>6 months vesting</li>
                                <li>SAFT agreement for Pre Sale</li>
                            </ul>
                        </div>
                        <br />
                        <div className={styles['buttons-container']}>
                            <div className={styles.buttons}>
                                <Link href="#contact">Read More<ArrowOutwardIcon /> </Link>
                            </div>
                        </div>

                    </div>
                    <div className={styles['section2__column2']}>
                        <div className={styles['section2__column2--column']}>
                            <div>
                                <div>
                                    <Image
                                        src={images.tokenCardano}
                                        alt="cardano"
                                        className={styles['cardano']}
                                        loading="lazy"
                                    />
                                </div>
                                <h2>Cardano blockchain</h2>
                            </div>
                            <div>
                                <div className={styles.absolute}>
                                    <Image
                                        src={images.tokenPie}
                                        alt="cardano"
                                        className={styles['cardano']}
                                        loading="lazy"
                                    />
                                    <CountUp
                                        start={0}
                                        end={10}
                                        delay={0}
                                        duration={0.5}
                                        enableScrollSpy={true}
                                        scrollSpyDelay={1}
                                    >
                                        {({ countUpRef }) => (
                                            <h2><span ref={countUpRef} />%</h2>
                                        )}
                                    </CountUp>
                                </div>
                                <h2>Available for purchase after</h2>
                            </div>
                            <div>
                                <div className={styles.absolute}>
                                    <Image
                                        src={images.tokenPie}
                                        alt="cardano"
                                        className={styles['cardano']}
                                        loading="lazy"
                                    />
                                    <CountUp
                                        start={0}
                                        end={10}
                                        delay={0}
                                        duration={0.5}
                                        enableScrollSpy={true}
                                        scrollSpyDelay={1}
                                    >
                                        {({ countUpRef }) => (
                                            <h2><span ref={countUpRef} />%</h2>
                                        )}
                                    </CountUp>
                                </div>
                                <h2>Available for Pre-Sale</h2>
                            </div>
                        </div>
                    </div>
                </Grid12>
            </Section>

            <Section className={styles.section3}>
                <div className={styles.title}>
                    <h1>How does it work?</h1>
                </div>
                <div className={styles['section3__flex']}>
                    <Card className={styles.card}>
                        <div className={styles.number}>
                            1
                        </div>
                        <div className={styles.info}>
                            <h1>Lorem ipsum dolor sit amet. Hic voluptate velit</h1>
                        </div>
                    </Card>
                    <Card className={styles.card}>
                        <div className={styles.number}>
                            2
                        </div>
                        <div className={styles.info}>
                            <h1>Lorem ipsum dolor sit amet. Hic voluptate velit </h1>
                        </div>
                    </Card>
                    <Card className={styles.card}>
                        <div className={styles.number}>
                            3
                        </div>
                        <div className={styles.info}>
                            <h1>Lorem ipsum dolor sit amet. Hic voluptate velit </h1>
                        </div>
                    </Card>
                </div>
            </Section>

            <Section className={styles.section4}>
                <Grid12>
                    <Image
                        src={images.token2}
                        alt="creative-person"
                        className={styles['section4__image']}
                        loading="lazy"
                    />
                    <div className={styles['section4__info']}>
                        <div className={styles.title}>
                            <h1>Platforming The Creative Community</h1>
                        </div>
                        <ul>
                            <li>Celebrities, artistes and the like can have their own limited edition NFTs for users</li>
                            <li>More common NFTs at a lower price available as well</li>
                            <li>Collaboration with PISK for rare editions during special events</li>
                            <li>Possibility of trading or gifting for collectors</li>
                        </ul>
                    </div>
                </Grid12>
                <Grid12 className={styles.reorder}>
                    <div className={styles['section4__info']}>
                        <div className={styles.title}>
                            <h1>Empowering Knowledge Based Experts</h1>
                        </div>
                        <ul>
                            <li>NFTs from them to mark course completion/advice sought/progression or recommendations/etc</li>
                            <li>Able to be traded for discounts on courses or so</li>
                        </ul>
                    </div>
                    <Image
                        src={images.token3}
                        alt="knowledge-expert-person"
                        className={styles['section4__image']}
                        loading="lazy"
                    />
                </Grid12>
            </Section>

            <Section className={styles['call-to-action']}>
                <Action />
            </Section>

            <Footer />
        </Container>
    )
}
