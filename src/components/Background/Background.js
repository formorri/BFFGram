import styles from './Background.module.scss';
import constants from '../../constants';
import Image from 'next/image';

const Background = () => {
    return (
        <div className={styles.container}>
            <div className={styles.glassmorphism}></div>
            {/* // the pink circle */}
            <div className={styles['circle-2']} loading='eager'></div>
            {/* // the cyan circle */}
            <div className={styles['circle-3']} loading='eager'></div>
            {/* // the purple circle */}
            <div className={styles['circle-1']} loading='eager'></div>
        </div>
    )
}

export default Background
