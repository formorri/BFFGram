import React from 'react';
import styles from './Navbar.module.scss';
import { images } from '../../constants';
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav className={styles.container}>
            <div className={styles.container__logo}>
            <Image
                src={images.logo}
                alt="bffgram-logo"
                className={styles['logo']}
                loading="lazy"
              />
            </div>
            <ul className={styles.container__links}>
                {['home', 'about us', 'tokenomics'].map((item) => (
                    <li className={styles.links} key={`link-${item}`}>
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
                <li className={styles.contact}>
                    <a id='contact' href='#contact'>Contact Us</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
