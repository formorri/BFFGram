import { useState, useEffect, useRef } from 'react';
import { useWindowSize } from 'react-use';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@mui/material/Button';
import styles from './Carousel.module.scss';

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const carouselRef = useRef();
  const { width } = useWindowSize();

  useEffect(() => {
    if (width <= 650) {
      setSlidesToShow(1);
    } else {
      setSlidesToShow(3);
    }
  }, [width]);

  const handlePrevClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(children.length - slidesToShow);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex + slidesToShow === children.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
      var direction= -1;
    }
  };

  return (
    <div className={styles.carousel} ref={carouselRef}>
      <Button className={styles.arrow} onClick={handlePrevClick}>
        Prev
      </Button>
      <Button className={styles.arrow} onClick={handleNextClick}>
        Next
      </Button>
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }} 
          className={styles.slider}
        >
          {children.slice(currentIndex, currentIndex + slidesToShow)}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Carousel;