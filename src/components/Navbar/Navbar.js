import React from 'react';
import styles from './Navbar.module.scss';
import constants from '../../constants';

const Navbar = () => {
    return (
        <nav className={styles.container}>
            <div className={styles.container__logo}>
            </div>
            <ul className={styles.container__links}>
                {['home', 'services', 'clients'].map((item) => (
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
