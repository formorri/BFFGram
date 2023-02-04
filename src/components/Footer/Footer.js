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
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

import Card from '../../components/Card';
import Link from 'next/link';
import { sendContactForm } from '../../../lib/api';


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


const initValues = {
  name: '',
  email: '',
  message: ''
}
const initState = { values: initValues };


const Footer = () => {
  const [state, setState] = useState({
    values: initState,
    error: null,
    submitted: false,
  });
  const { values, error, submitted } = state;
  const handleChange = ({ target }) => setState((prev) => ({
    ...prev,
    values: {
      ...prev.values,
      [target.name]: target.value,
    }
  }));
  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
    }));
    try {
      await sendContactForm(values);
      setState(() => ({
        values: initState,
        submitted: true,
      }));
    } catch (err) {
      setState((prev) => ({
        ...prev,
        error: err.message,
      }));
    }
  };

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

          {error && <p className={styles.error}>{error}</p>}
          {submitted && (
            <p className={styles.success}>Thanks for contacting us!</p>
          )}
          <form className={styles.field} >
            <FormControl
            >
              <Input
                type='text'
                name='name'
                value={values.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
              <MyFormHelperText />
            </FormControl>
            <FormControl>
              <Input
                type='email'
                name='email'
                value={values.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
              <MyFormHelperText />
            </FormControl>
            <FormControl>
              <Input
                type='text'
                name='message'
                value={values.message}
                onChange={handleChange}
                placeholder="Drop us a message"
                multiline
                maxRows={4}
              />
            </FormControl>
            <Button
              className={styles.submit}
              disabled={
                !values.name || !values.email
              }
              onClick={onSubmit}
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
                      Consequat aliqua veniam officia,
                    </li>
                    <li>
                      Occaecat laboris ad adipisicing.
                    </li>
                    <li>
                      Occaecat laboris ad adipisicing.
                    </li>
                    <li>
                      Occaecat laboris ad adipisicing.
                    </li>
                  </ul>
                </Card>
              </Grid12>
              <Card className={`${styles["text"]} ${styles["contacts"]}`}>
                <div>
                  <h2>Telephone</h2>
                  <p>012-8346587348</p>
                  <p>012-8346587348</p>
                </div>

                <ul>
                  <li>
                    <Link href='/'>
                      <InstagramIcon></InstagramIcon>
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <FacebookIcon></FacebookIcon>
                    </Link>
                  </li>
                  <li>
                    <Link href='https://www.linkedin.com/in/monahaljneibi'>
                      <LinkedInIcon></LinkedInIcon>
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <TwitterIcon></TwitterIcon>
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <YouTubeIcon></YouTubeIcon>
                    </Link>
                  </li>
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