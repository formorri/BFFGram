import styles from './Navbar.module.scss';
import React from 'react';
import { images } from '../../constants';
import Image from 'next/image'
import Link from 'next/link';


import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    return (
        <nav className={styles.container}>
            <Link className={styles.container__logo} href='/'>
                <Image
                    src={images.logo}
                    alt="bffgram-logo"
                    className={styles['logo']}
                    loading="eager"
                />
            </Link>
            <div className={styles["phone"]}>
                <PopupState
                    variant="popover"
                    popupId="demo-popup-menu"
                >
                    {(popupState) => (
                        <React.Fragment>
                            <Button
                                variant="contained"
                                {...bindTrigger(popupState)}
                                className={styles['phone__burger']}
                            >
                                <MenuIcon />
                            </Button>
                            <Menu {...bindMenu(popupState)} className={styles['phone__menu']}>
                                <MenuItem onClick={popupState.close}>
                                    <Link href='/'>Home</Link>
                                </MenuItem>
                                <MenuItem onClick={popupState.close}>
                                    <Link href='/about'>About Us</Link>
                                </MenuItem>
                                <MenuItem onClick={popupState.close}>
                                    <Link href='/tokenomics'>Tokenomics</Link>
                                </MenuItem>
                                <MenuItem onClick={popupState.close}>
                                    <Link href='#contact'>Contact Us</Link>
                                </MenuItem>
                            </Menu>
                        </React.Fragment>
                    )}
                </PopupState>
            </div>
            <ul className={styles.container__links} sx={{ display: { md: 'flex', xs: 'none' } }}>
                <li className={styles.links}>
                    <Link href='/'>Home</Link>
                </li>
                <li className={styles.links}>
                    <Link href='/about'>About Us</Link>
                </li>
                <li className={styles.links}>
                    <Link href='/tokenomics'>Tokenomics</Link>
                </li>
                <li className={styles.contact}>
                    <a href='#contact'>Contact Us</a>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar
