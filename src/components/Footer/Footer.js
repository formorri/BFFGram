import { React, useState, useMemo } from 'react';
import styles from './Footer.module.scss';
import Grid12 from '../Grid-1-2';
import Image from 'next/image';

import { Button } from '@mui/material';

import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import { alpha, styled } from '@mui/material/styles';
// import InputBase from '@mui/material/InputBase';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import TextField from '@mui/material/TextField';
// import FormControl from '@mui/material/FormControl';
// import Input from '@mui/material/Input';

import { images } from '../../constants';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Card from '../../components/Card';
import Link from 'next/link';


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
  marginLeft:'0',
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
  const [state, setState] = useState(initState);
  const { values, isLoading } = state;
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
      isLoading: true,
    }))
  }

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
              <MyFormHelperText/>
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
            <MyFormHelperText/>
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
              isLoading={isLoading}
              onClick={onSubmit}
            >
              <ArrowOutwardIcon />
              Submit
            </Button>
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