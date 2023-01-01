import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image'

import Container from '../components/Container';
import Background from '../components/Background';
import Section from '../components/Section';
import Grid12 from '../components/Grid-1-2';
import Navbar from '../components/Navbar';
import Scroll from '../components/Scroll';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Grid from '../components/Grid';
import Card from '../components/Card';
import Carousel from '../components/Carousel';
import Action from '../components/Action';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import styles from '../styles/Home.module.scss'
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

      <Background />

      <Navbar />

      <Section className={styles.hero}>
        <Grid12>
          <div>
            <div className={styles.title}>
              <h1>All In One Application</h1>
            </div>
            <div className={styles.description}>
              <p>BFF Gram aims to be one of the most popular social networking platforms in the globe after launching in the UK. This multi-feature application will be known for its family/friends/advisors’ networking capabilities.</p>
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
            <div className={styles['stats__container']}>
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
        <Scroll />
      </Section>

      <Section>
        <Grid12 className={styles['flex-top']}>
          <div className={styles['section1-header']}>
            <div className={styles.title}>
              <h1>Why You Should Choose Us?</h1>
            </div>
            <Image
              src={images.homePic1}
              alt="woman-excited"
              className={styles['home-pic1']}
              loading="lazy"
            />
          </div>
          <div className={styles['section1-container']}>
            <Grid12>
              <div className={styles.column1}>
                <Card>
                  <h2>The new way to social media</h2>
                  <p>Create meaningful connections in the layout of trees, creating personal diaries to share knowledge, book paid appointments with Subject Matter Experts and much more</p>
                </Card>
                <Card>
                  <h2>Connect. Share. Play. Repeat</h2>
                  <p>Lorem ipsum dolor sit amet. Hic
                    voluptate velit qui inventore
                    quas a mollitia suscipit hic
                    ullam necessitatibus aut
                    provident tempore</p>
                </Card>
              </div>
              <div className={styles.column2}>
                <Card>
                  <h2>The more you use, the higher you are on the leaderboard</h2>
                  <p>Earn points whenever you use the app and be placed on a leaderboard.</p>
                </Card>
                <Card>
                  <h2>Tokenomics as Digital Currency</h2>
                  <p>Lorem ipsum dolor sit amet. Hic
                    voluptate velit qui inventore
                    quas a mollitia suscipit hic
                    ullam necessitatibus aut
                    provident tempore</p>
                </Card>
              </div>
            </Grid12>
          </div>
        </Grid12>
      </Section>

      <Section>
        <Grid12>
          <div>
            <div className={styles.title}>
              <h1>About the company</h1>
            </div>
            <div className={styles.description}>
              <p>BFF Gram is developing a social networking application that combines creating meaningful connections</p>
            </div>
            <div className={styles['buttons-container']}>
              <div className={styles.buttons}>
                <Link href="/">Read more <ArrowOutwardIcon /> </Link>
              </div>
            </div>
            <Card className={styles.quote}>
              <div className={styles['quote__decor']}>
                <div className={styles['']}>
                  <div className={styles['quote__decor--chips']}>
                    <p>Quote from CEO</p>
                  </div>
                  <div className={styles['quote__decor--chips']}>
                    <p>Quote from Founder</p>
                  </div>
                </div>
                <Image
                  src={images.quotes}
                  alt="quotes"
                  className={styles['quote__decor--image']}
                  loading="lazy"
                />
              </div>
              <div className={styles['quote__text']}>
                Lorem ipsum dolor sit amet. Hic voluptate velit qui inventore quas a mollitia suscipit hic ullam necessitatibus aut provident tempore. Quo voluptas esse id natus pariatur sed magni enim qui magni corporis
              </div>
            </Card>
          </div>
          <div className={styles['section2']}>
            <div className={styles['section2__container']}>
              <Image
                src={images.circle1}
                alt="circle-1"
                className={styles['circle-1']}
                loading="lazy"
              />
              <div className={styles['section2__container--founder']}>
                <Image
                  src={images.homeFounder}
                  alt="founder-pic"
                  className={styles['founder']}
                  loading="lazy"
                />
                <div className={styles['title']}>
                  <h2>Monah Al Jneibi</h2>
                  <p>Founder & CEO</p>
                </div>
              </div>
              <Image
                src={images.circle3}
                alt="circle-3"
                className={styles['circle-3']}
                loading="lazy"
              />

            </div>
          </div>
        </Grid12>
      </Section>

      <Section>
        <Grid12 className={styles.section3}>
          <Image
            src={images.homePic2}
            alt="bffgram-tokens"
            className={styles['section3__image']}
            loading="lazy"
          />
          <div>
            <div className={styles.title}>
              <h1>Tokenomics</h1>
            </div>
            <div className={styles.description}>
              <p>Do it all with BFF Gram and get trendy NFTs too with your consultation.</p>
            </div>
            <Grid12 className={styles['section3__grid']}>
              <div>
                <Card>Used for any purchases on app</Card>
                <Card>Utility token issued by PISK used for payment of services of Subject Matter
                  Experts
                  <div className={styles.buttons}>
                    <Link href="/">Read more <ArrowOutwardIcon /> </Link>
                  </div>
                </Card>
              </div>
              <div>
                <Card>Enjoy coins collected when you use the app and use it
                  for purchases or more</Card>
                <Card>Used for savings and crowdfunding features</Card>
              </div>
            </Grid12>
          </div>
        </Grid12>
      </Section>

      <Section>
        <Grid12>
          <div className={styles.section5}>
            <div className={styles.title}>
              <h1>FAQ</h1>
            </div>
            <Accordion
              className={styles['accordion']}
              sx={{
                borderBottom: 1,
                borderTop: 0
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={styles['accordion-summary']}
              >
                <h2>Lorem ipsum dolor?</h2>
              </AccordionSummary>
              <AccordionDetails className={styles['accordion-details']}>
                <p>
                  Lorem ipsum dolor sit amet. Hic voluptate velit qui inventore quas a mollitia suscipit hic ullam necessitatibus aut provident tempore. Quo voluptas esse id natus pariatur sed magni enim qui magni corporis
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className={styles['accordion']}
              sx={{
                borderBottom: 1,
                borderTop: 0
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={styles['accordion-summary']}
              >
                <h2>Lorem ipsum dolor?</h2>
              </AccordionSummary>
              <AccordionDetails className={styles['accordion-details']}>
                <p>
                  Lorem ipsum dolor sit amet. Hic voluptate velit qui inventore quas a mollitia suscipit hic ullam necessitatibus aut provident tempore. Quo voluptas esse id natus pariatur sed magni enim qui magni corporis
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className={styles['accordion']}
              sx={{
                borderBottom: 1,
                borderTop: 0
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={styles['accordion-summary']}
              >
                <h2>Lorem ipsum dolor?</h2>
              </AccordionSummary>
              <AccordionDetails className={styles['accordion-details']}>
                <p>
                  Lorem ipsum dolor sit amet. Hic voluptate velit qui inventore quas a mollitia suscipit hic ullam necessitatibus aut provident tempore. Quo voluptas esse id natus pariatur sed magni enim qui magni corporis
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className={styles['accordion']}
              sx={{
                borderBottom: 1,
                borderTop: 0
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={styles['accordion-summary']}
              >
                <h2>Lorem ipsum dolor?</h2>
              </AccordionSummary>
              <AccordionDetails className={styles['accordion-details']}>
                <p>
                  Lorem ipsum dolor sit amet. Hic voluptate velit qui inventore quas a mollitia suscipit hic ullam necessitatibus aut provident tempore. Quo voluptas esse id natus pariatur sed magni enim qui magni corporis
                </p>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className={styles['section5-column2']}>
            <Image
              src={images.homePic3}
              alt="faq-pic"
              className={styles['section5-column2__image']}
              loading="lazy"
            />
          </div>
        </Grid12>
      </Section>

      <Section className={styles.section6}>
        <div className={styles.title}>
          <Image
            src={images.star}
            alt="star"
            className={styles['star']}
            loading="lazy"
          />
          <h1>Testimonials</h1>
          <Image
            src={images.star}
            alt="star"
            className={styles['star']}
            loading="lazy"
          />
        </div>
        <div className={styles.section6__container}>
          <Card className={styles.quote}>
            <div className={styles['quote__decor']}>
              <div className={styles['flex']}>
                <div className={styles['quote__decor--chips']}>
                  <p>Age 32</p>
                </div>
              </div>
              <Image
                src={images.quotes}
                alt="quotes"
                className={styles['quote__decor--image']}
                loading="lazy"
              />
            </div>
            <div className={styles['quote__text']}>
              I am waiting for this application and I want to know and experience it
            </div>
          </Card>
          <Card className={styles.quote}>
            <div className={styles['quote__decor']}>
              <div className={styles['flex']}>
                <div className={styles['quote__decor--chips']}>
                  <p>Age 28</p>
                </div>
              </div>
              <Image
                src={images.quotes}
                alt="quotes"
                className={styles['quote__decor--image']}
                loading="lazy"
              />
            </div>
            <div className={styles['quote__text']}>
              The concept is very unique and good
            </div>
          </Card>
          <Card className={styles.quote}>
            <div className={styles['quote__decor']}>
              <div className={styles['flex']}>
                <div className={styles['quote__decor--chips']}>
                  <p>Age 12</p>
                </div>
              </div>
              <Image
                src={images.quotes}
                alt="quotes"
                className={styles['quote__decor--image']}
                loading="lazy"
              />
            </div>
            <div className={styles['quote__text']}>
              It’s colorful and easy to use
            </div>
          </Card>
        </div>
      </Section>

      <Section>
        <Carousel>
          <Card>text1</Card>
          <Card>text2</Card>
          <Card>text3</Card>
          <Card>text4</Card>
          <Card>text5</Card>
        </Carousel>

      </Section>
      <Section className={styles['call-to-action']}>
        <Action />
      </Section>

      <Footer />
    </Container>
  )
}
