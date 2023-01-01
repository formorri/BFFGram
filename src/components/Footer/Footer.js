import styles from './Footer.module.scss';
import Grid12 from '../Grid-1-2';
import Image from 'next/image';
import { Button } from '@mui/material';
import { images } from '../../constants';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Card from '../../components/Card';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.container}>
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
      <Grid12>
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
          <form className={styles.field} >
            <Grid12 className={styles['field__grid']}>
              <input type='text' name='firstName' className={styles.input} placeholder='First name' />
              <input type='text' name='lastName' className={styles.input} placeholder='Last name' />
            </Grid12>
            <div className={styles['field__flex']}>
              <input type='email' name='email' className={styles.input} placeholder='Email' />
              <textarea type='textarea' rows='5' name='message' className={styles.input} placeholder='Type your message here...' />
              <Button type='submit' className={styles.submit}>
                Submit
                <ArrowOutwardIcon />
              </Button>
            </div>
          </form>
        </div>
        <div className={styles.info}>
          <div>
            <Grid12>
              <Card></Card>
              <Card></Card>
            </Grid12>
            <Card></Card>
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
      </Grid12>
    </footer>
  )
}

export default Footer;