import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image'

import Container from '../components/Container';
import Background from '../components/Background';
import Section from '../components/Section';
import Grid12 from '../components/Grid-1-2';
import Navbar from '../components/Navbar';
import Scroll from '../components/Scroll';
import Video from '../components/Video'
import Card from '../components/Card';
import Carousel from '../components/Carousel';
import Action from '../components/Action';
import Footer from '../components/Footer';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import styles from '../styles/Home.module.scss'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import CountUp from 'react-countup';

import { images } from './../constants';
import News from '../Props/News.js';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>BFFGram Website</title>
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="BFFGram Website" />
        <meta property="og:site_name" content="BFFGram Website" />
        <meta property="og:description" content="All In One Application" />
        <meta property="og:image" content={images.logo} />
        <meta name="keywords"
          content="BFFGram, social media application, binance blockchain, social networking platform, app, bff, gram, social, token, emirati, tokenomics, available, bff gram, social media, womens day" />
        <meta name="author" content="Lam Zi Xin" />
        <link rel='canonical' hrefLang="en" href='https://www.bffgram.com/' />
      </Head>

      <Background />
      <Navbar />
      <Section className={styles.hero} id="home">
        <Grid12>
          <div>
            <div>
              <h1 className={styles.title}>All In One App</h1>
            </div>
            <div className={styles.description}>
              <p>BFF Gram aims to be one of the most popular social networking platforms in the globe after launching in the UK. This multi-feature application will be known for its family/friends/advisors’ networking capabilities.</p>
            </div>
            <div className={styles['buttons-container']}>
              <div className={styles.buttons}>
                <Link href="#contact">Collaborate with us <ArrowOutwardIcon /> </Link>
              </div>
              <Video videoSource={'/videos/main.mp4'} />
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
                <CountUp start={0} end={200} delay={0}
                  enableScrollSpy={true}
                  scrollSpyDelay={1}
                >
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
              <CountUp start={0} end={600} delay={0}
                enableScrollSpy={true}
                scrollSpyDelay={1}
              >
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
            <div>
              <h2 className={styles.title}>Why You Should Choose Us?</h2>
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
                  <p>Connect with friends and family, share your experiences, play games, and repeat the cycle on our social media platform.</p>
                </Card>
              </div>
              <div className={styles.column2}>
                <Card>
                  <h2>The more you use, the higher you are on the leaderboard</h2>
                  <p>Earn points whenever you use the app and be placed on a leaderboard.</p>
                </Card>
                <Card>
                  <h2>Tokenomics as Digital Currency</h2>
                  <p>Experience the future of digital currency with our revolutionary tokenomics system, where every token holds real-world value and use.</p>
                </Card>
              </div>
            </Grid12>
          </div>
        </Grid12>
      </Section>

      <Section>
        <Grid12>
          <div>
            <div>
              <h2 className={styles.title}>About the company</h2>
            </div>
            <div className={styles.description}>
              <p>BFF Gram is developing a social networking application that combines creating meaningful connections</p>
            </div>
            <div className={styles['buttons-container']}>
              <div className={styles.buttons}>
                <Link href="/about">Read more <ArrowOutwardIcon /> </Link>
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
                We hope to help bring back Social Media to its roots of connecting families. At BFFGram, we support one or more Sustainable Development Goals *SDGs) such as Zero Hunger.
                Join us in becoming a role model to others as we strive to become the first social media app internationally to be lead by a woman.
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
            <div>
              <h1 className={styles.title}>Tokenomics</h1>
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
                    <Link href="/tokenomics">Read more <ArrowOutwardIcon /> </Link>
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
            <div>
              <h2 className={styles.title}>FAQ</h2>
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
                <h2>When will the BFF Gram token be available?</h2>
              </AccordionSummary>
              <AccordionDetails className={styles['accordion-details']}>
                <p>
                  The listing for it is currently planned for the end of February or early March 2023. The token will be listed on Coinstore.
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
                <h2>How much does one token cost?</h2>
              </AccordionSummary>
              <AccordionDetails className={styles['accordion-details']}>
                <p>
                  It is US$0.02 for one token
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
                <h2>What is a pre-sale?</h2>
              </AccordionSummary>
              <AccordionDetails className={styles['accordion-details']}>
                <p>
                  A pre-sale is an event period where people can invest in the BFF Gram Token by purchasing it at a special pre-sale price of US$0.02 per token. A SAFT (Simple Agreement for Future Tokens) agreement will be signed for any potential investor as a form of investment contract.
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
                <h2>What is the price of the token upon listing?</h2>
              </AccordionSummary>
              <AccordionDetails className={styles['accordion-details']}>
                <p>
                  At the moment, the targeted listing price will be US$0.08 when the listing is live
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
                <h2>How many tokens can I buy/What is the minimum investment?</h2>
              </AccordionSummary>
              <AccordionDetails className={styles['accordion-details']}>
                <p>
                  There is no minimum investment however, it is encouraged to be a round figure (for example, US$200, US$2600) so that the number of tokens one is allocated will be a number that is easier to manage
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
                <h2>Is the BFF Gram app available?</h2>
              </AccordionSummary>
              <AccordionDetails className={styles['accordion-details']}>
                <p>
                  The app is currently in the testing phases. Interested users are highly encouraged to email us  <Link href='#contact'>here</Link> so we can send you details of when a test version can be available. We would love to hear feedback so we can improve on any features or fix bugs so that upon launch, you will have the best experience and love it!
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
                <h2>When will the BFF Gram app be available?</h2>
              </AccordionSummary>
              <AccordionDetails className={styles['accordion-details']}>
                <p>
                  It is slated to launch in the middle of the year and we will post updates as the production is underway along with some teasers and more
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
                <h2>Will the app be available worldwide?</h2>
              </AccordionSummary>
              <AccordionDetails className={styles['accordion-details']}>
                <p>
                  The current plan is to launch it within the UK with Subject Matter Experts but we do aim to expand in future. For those residing outside of the UK, please do register your interest <Link href='#contact'>here</Link>
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
                <h2>I have other questions, where can I find the answers?</h2>
              </AccordionSummary>
              <AccordionDetails className={styles['accordion-details']}>
                <p>
                  Thank you so much for your interest! Please don’t hesitate to email us and our team will get back to you as soon as we can to answer your queries.
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
        <div className={styles['section6__title']}>
          <Image
            src={images.star}
            alt="star"
            className={styles['star']}
            loading="lazy"
          />
          <h2 className={styles.title}>Testimonials</h2>
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

      <Section className={styles.section7}>
        <div>
          <h2 className={styles.title}>Stay up to date</h2>
        </div>
        <Carousel className={styles['section7__carousel']}>
          {News.map((item) => {
            return (
              <Card className={styles['card']} key={item.id}>
                <div className={styles.preview}>
                  <Link href={item.url} target='_blank' rel='nofollow'>
                    <div className={styles['preview__container']}>
                      <div className={styles['preview__container--arrow']}>
                        <ArrowForwardIcon />
                      </div>
                      <div className={styles['preview__image']}>
                        <Image
                          src={item.image}
                          alt={`news-${item.id}`}
                          className={styles.news}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </Link>
                </div>
                <div className={styles.info}>
                  <p>{item.date}</p>
                  <h2>{item.item}</h2>
                </div>
              </Card>
            );
          })}
        </Carousel>
      </Section>

      <Section className={styles['call-to-action']}>
        <Action />
      </Section>

      <Footer />
    </Container>
  )
}
