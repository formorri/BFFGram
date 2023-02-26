import React from 'react'
import Image from 'next/image'
import { images } from '../../constants';
import styles from './Action.module.scss';

const Action = () => {
    return (
        <div className={styles.container}>
            <div>
                <h2 className={styles.title}>Wish to be a part of the digital revolution?</h2>
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