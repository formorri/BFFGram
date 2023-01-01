import React from 'react'
import Image from 'next/image'
import { images } from '../../constants';
import styles from './Action.module.scss';

const Action = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Wish to be a part of the digital revolution?</h1>
            </div>
            <Image
                src={images.squiggle}
                alt="squiggle-arrow-down"
                className={styles['squiggle']}
                loading="lazy"
            />
        </div>
    )
}

export default Action