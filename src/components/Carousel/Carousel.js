import styles from './Carousel.module.scss';
import { useState, useEffect, useRef } from 'react';
import { useWindowSize } from 'react-use';
import { motion, AnimatePresence } from 'framer-motion';

import Button from '@mui/material/Button';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const carouselRef = useRef();
  const { width } = useWindowSize();

  useEffect(() => {
    if (width <= 650) {
      setSlidesToShow(1);
    } else if (width <= 960){
      setSlidesToShow(2);
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
    if (currentIndex === children.length - slidesToShow) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  let variants = {
    enter: ({ direction, width }) => ({ x: direction * width }),
    center: { x: 0 },
    exit: ({ direction, width }) => ({ x: direction * -width }),
  };

  let prev = usePrevious(currentIndex);
  let direction = currentIndex > prev ? 1 : -1;

  function usePrevious(state) {
    let [tuple, setTuple] = useState([null, state]);

    if (tuple[1] !== state) {
      setTuple([tuple[1], state]);
    }

    return tuple[0];
  }

  return (
    <div className={styles.carousel} ref={carouselRef}>
    <div className={styles['arrow-container']}>
      <Button className={styles.arrow} onClick={handlePrevClick}>
        <NavigateBeforeIcon/>
      </Button>
      <Button className={styles.arrow} onClick={handleNextClick}>
        <NavigateNextIcon/>
      </Button>
    </div>
      <AnimatePresence>
        <div>
          <motion.div
            key={currentIndex}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            custom={{ direction, width }}
            className={styles.slider}
          >
            {children.slice(currentIndex, currentIndex + slidesToShow)}
          </motion.div>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Carousel;