import { React, useState, useMemo } from 'react';
import styles from './Footer.module.scss';
import Grid12 from '../Grid-1-2';
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
// import TwitterIcon from '@mui/icons-material/Twitter';
// import YouTubeIcon from '@mui/icons-material/YouTube';

import Card from '../../components/Card';
import Link from 'next/link';
// import { sendContactForm } from '../../../lib/api';

import { API } from 'aws-amplify'
import { createCandidate } from '../../graphql/mutations'


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

// function MyFormHelperText() {
//   const { filled } = useFormControl() || {};

//   const helperText = useMemo(() => {
//     if (!filled) {
//       return 'This field is required';
//     }

//     return '';
//   }, [filled]);

//   return <StyledFormHelperText>{helperText}</StyledFormHelperText>;
// }

const Footer = () => {
  // const [formState, setFormState] = useState({
  //   name: '',
  //   email: '',
  //   message: '',
  //   error: null,
  //   submitted: false
  // })
  // const { error, submitted } = formState

  // const handleContactFormSubmit = async (e) => {
  //   e.preventDefault()
  //   const { name, email, message } = formState
  //   if (name && email && message) {
  //     try {
  //       // TODO: Add code to send email here
  //       console.log(name, email, message)
  //       await API.graphql({
  //         query: createCandidate,
  //         variables: {
  //           input: {
  //             name,
  //             email,
  //             message
  //           },
  //         },
  //       })
  //       setFormState(() => ({
  //         submitted: true,
  //       }));

  //     } catch (e) {
  //       setFormState(() => ({
  //         error: e.message,
  //       }));
  //     }
  //   }
  // }

  const scriptURL = 'https://script.google.com/macros/s/AKfycbxvX3hDe9C9PKBSRdxoshsbOuhNI8BZnIryEq5YFGXBpJxJa3tE_86Zl0tJeY6KeTFO/exec'
  const form = document.forms['email-subscribers']
  // const form = [
  //   name,
  //   email,
  //   message,
  // ]
  // const {name, email, message}= form;

  const handleContactFormSubmit = async (e) => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  }

  // form.addEventListener('submit', e => {
  //   e.preventDefault()
  //   fetch(scriptURL, { method: 'POST', body: new FormData(form) })
  //     .then(response => console.log('Success!', response))
  //     .catch(error => console.error('Error!', error.message))
  // })

  return (
    <footer id='contact' className={styles.container}>
      <div className={styles.absolute}>
        <Image
          src={images.circle1}
          alt="circle1"
          className={styles['circle-1']}
          loading="lazy"
        />
        <Image
          src={images.circle2}
          alt="circle2"
          className={styles['circle-2']}
          loading="lazy"
        />
        <Image
          src={images.circle3}
          alt="circle3"
          className={styles['circle-3']}
          loading="lazy"
        />
      </div>
      <div className={styles.grid}>
        <div className={styles.form}>
          <div className={styles['form__header']}>
            <h2>Get in touch</h2>
            <Image
              src={images.plane}
              alt="plane-message"
              className={styles['plane']}
              loading="lazy"
            />
          </div>

          <form 
          name='email-subscribers'
          className={styles.field}
          >
            <FormControl
            >
              <Input
                type='text'
                name='name'
                placeholder="Enter your name"
                value={form.name}
                required
              />
            </FormControl>
            <FormControl>
              <Input
                type='email'
                name='email'
                placeholder="Enter your email"
                value={form.email}
                required
              />
            </FormControl>
            <FormControl>
              <Input
                type='text'
                name='message'
                placeholder="Drop us a message"
                value={form.message}
                multiline
                maxRows={4}
              />
            </FormControl>
            <Button
              className={styles.submit}
              onClick={handleContactFormSubmit}
            >
              <ArrowOutwardIcon />
              Submit
            </Button>
          </form>

        </div>
        <div className={styles.flex}>
          <div className={styles.info}>
            <div className={styles.info__info}>
              <Grid12>
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
              </Grid12>
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
              <Card className={`${styles["text"]} ${styles["contacts"]}`}>
                <div>
                  <h2>Telephone</h2>
                  <ul className={styles.tel}>
                    <li>
                      <Link href='tel:+971507086658'>
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
                  {/* <p>+971507086658</p> */}
                </div>

                <ul>
                  <li>
                    <Link href='https://www.instagram.com/invites/contact/?i=v777t1mecqqp&utm_content=76l7sbn'>
                      <InstagramIcon></InstagramIcon>
                    </Link>
                  </li>
                  {/* <li>
                    <Link href='/'>
                      <FacebookIcon></FacebookIcon>
                    </Link>
                  </li> */}
                  <li>
                    <Link href='https://www.linkedin.com/in/monahaljneibi'>
                      <LinkedInIcon></LinkedInIcon>
                    </Link>
                  </li>
                  {/* <li>
                    <Link href='/'>
                      <TwitterIcon></TwitterIcon>
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link href='/'>
                      <YouTubeIcon></YouTubeIcon>
                    </Link>
                  </li> */}
                </ul>
              </Card>
            </div>
            <div className={styles['back-to-top']}>
              <Link href='#home'>
                <div className={styles.scroll}>
                  <ArrowUpwardIcon />
                  <p>Go back to top</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;