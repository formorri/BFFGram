import { React, useState, useMemo } from 'react';
import styles from './Footer.module.scss';
// import Grid12 from '../Grid-1-2';
import Image from 'next/image';

import { Button } from '@mui/material';

import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import { styled } from '@mui/material/styles';

import { images } from '../../constants';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faSnapchat } from '@fortawesome/free-brands-svg-icons';


import Card from '../../components/Card';
import Link from 'next/link';
// import { sendContactForm } from '../../../lib/api';

import { API } from 'aws-amplify'
import { createCandidate } from '../../graphql/mutations'


const socials = [
  {
    href: 'https://www.linkedin.com/company/the-bff-gram/',
    icon: <LinkedInIcon />
  },
  {
    href: 'https://twitter.com/OfficialBffGram',
    icon: <TwitterIcon />
  },
  {
    href: 'https://www.instagram.com/invites/contact/?i=v777t1mecqqp&utm_content=76l7sbn',
    icon: <InstagramIcon />
  },
  // {
  //   href: 'Team.thebffgram@gmail.com',
  //   icon: <FontAwesomeIcon icon={faDiscord} />
  // },
  {
    href: 'https://t.me/bffgramofficial',
    icon: <TelegramIcon />
  },
  {
    href: 'https://www.youtube.com/@bffgram',
    icon: <YouTubeIcon />
  },
  {
    href: 'https://t.snapchat.com/UCf6B9na',
    icon: <FontAwesomeIcon icon={faSnapchat} />
  }
];


const Input = styled(OutlinedInput)({
  border: '2px solid #CFCFCF',
  color: '#CFCFCF',
  width: 'auto',
  '&:hover:focus': {
    border: '2px solid #FFF',
  },

  '& input:invalid:focus + fieldset': {
    border: '2px solid red',
  },
  '& input:valid:focus + fieldset': {
    padding: '5px !important',
  },
});

const StyledFormHelperText = styled(FormHelperText)({
  color: 'white',
  marginLeft: '0',
});

function MyFormHelperText() {
  const { filled } = useFormControl() || {};

  const helperText = useMemo(() => {
    if (!filled) {
      return 'This field is required';
    }

    return '';
  }, [filled]);

  return <StyledFormHelperText>{helperText}</StyledFormHelperText>;
}

const Footer = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    error: null,
    submitted: false
  })
  const { error, submitted } = formState

  const handleContactFormSubmit = async (e) => {
    e.preventDefault()
    const { name, email, message } = formState
    if (name && email && message) {
      try {
        // TODO: Add code to send email here
        console.log(name, email, message)
        await API.graphql({
          query: createCandidate,
          variables: {
            input: {
              name,
              email,
              message
            },
          },
        })
        setFormState(() => ({
          submitted: true,
        }));

      } catch (e) {
        setFormState(() => ({
          error: e.message,
        }));
      }
    }
  }

  return (
    <footer id='contact' className={styles.container}>
      <div className={styles.absolute}>
        <Image
          src={images.circle1}
          alt="circle1"
          className={styles['circle-1']}
          loading="eager"
        />
        <Image
          src={images.circle2}
          alt="circle2"
          className={styles['circle-2']}
          loading="eager"
        />
        <Image
          src={images.circle3}
          alt="circle3"
          className={styles['circle-3']}
          loading="eager"
        />
      </div>
      <div className={styles.grid}>
        <div className={`${styles["form"]} ${styles["form-position"]}`}>
          <div className={styles['form__header']}>
            <h2 className={styles['form__header--text']}>Get in touch</h2>
            <Image
              src={images.plane}
              alt="plane-message"
              className={styles['plane']}
              loading="lazy"
            />
          </div>
          <div className={styles.field}>
            <Link href='mailto:contactus@bffgram.com'>
              <Button
                className={styles.submit}
              >
                <ArrowOutwardIcon />
                Click here to email us
              </Button>
            </Link>
          </div>
        </div>
        <div className={`${styles["info"]} ${styles["sitemap-position"]}`}>
          <div className={styles.info__info}>
            <Card className={styles.text}>
              <div>
                <h2>Sitemap</h2>
              </div>
              <ul>
                <li>
                  <Link href='/'>
                    Home
                    <Image
                      src={images.star}
                      alt="star"
                      className={styles['star']}
                      loading="lazy"
                    />
                  </Link>
                </li>
                <li>

                  <Link href='/about'>
                    About
                    <Image
                      src={images.star}
                      alt="star"
                      className={styles['star']}
                      loading="lazy"
                    />
                  </Link>
                </li>
                <li>
                  <Link href='/tokenomics'>
                    Tokenomics
                    <Image
                      src={images.star}
                      alt="star"
                      className={styles['star']}
                      loading="lazy"
                    />
                  </Link>
                </li>
              </ul>
            </Card>
          </div>
        </div>
        <div className={`${styles["info"]} ${styles["address-position"]}`}>
          <div className={styles.info__info}>
            <Card className={styles.text}>
              <div>
                <h2>Address</h2>
              </div>
              <ul>
                <li>
                  Abu Dhabi, UAE
                </li>
              </ul>
            </Card>
          </div>
        </div>
        {/* <div className={`${styles["info"]} ${styles["email-position"]}`}>
          <div className={styles.info__info}>
            <Card className={styles.text}>
              <div>
                <h2>Email</h2>
              </div>
              <ul>
                <li>
                  <Link href='mailto:contactus@bffgram.com' className={styles.email}>
                    contactus@bffgram.com
                    <Image
                      src={images.star}
                      alt="star"
                      className={styles['star']}
                      loading="lazy"
                    />
                  </Link>
                </li>
              </ul>
            </Card>
          </div>
        </div> */}
        <div className={`${styles["info"]} ${styles["contact-position"]}`}>
          <div className={styles.info__info}>
            <Card className={styles.text}>
              <div>
                <h2>Telephone</h2>
              </div>
              <ul>
                <li>
                  <Link href='https://wa.me/971507086658'>
                    +971507086658
                    <Image
                      src={images.star}
                      alt="star"
                      className={styles['star']}
                      loading="lazy"
                    />
                  </Link>
                </li>
              </ul>
            </Card>
          </div>
        </div>
        <div className={`${styles["info"]} ${styles["socials-position"]}`}>
          <div className={styles.info__info}>
            <Card className={styles.text}>
              <div>
                <h2>Socials</h2>
              </div>
              <ul className={styles.socials}>
                {socials.map((social, index) => (
                  <li key={index}>
                    <Link href={social.href} target='_blank' rel='nofollow'>
                      <span className={styles.icon}>{social.icon}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
        <div className={`${styles["back-to-top"]} ${styles["top-position"]}`}>
          <Link href='#home'>
            <div className={styles.scroll}>
              <ArrowUpwardIcon />
              <p>Go back to top</p>
            </div>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;