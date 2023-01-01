import React from 'react';
import styles from './Navbar.module.scss';
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

            <div className={styles.container__logo}>
                <Image
                    src={images.logo}
                    alt="bffgram-logo"
                    className={styles['logo']}
                    loading="lazy"
                />
            </div>
            <PopupState
                variant="popover"
                popupId="demo-popup-menu"
            >
                {(popupState) => (
                    <React.Fragment>
                        <Button
                            variant="contained"
                            {...bindTrigger(popupState)}
                            className={styles.burger}
                        >
                            <MenuIcon />
                        </Button>
                        <Menu {...bindMenu(popupState)} className={styles['phone-menu']}>
                            {['about us', 'tokenomics'].map((item) => (
                                <MenuItem onClick={popupState.close} key={`link-${item}`}>
                                    <Link href={`#${item}`}>{item}</Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </React.Fragment>
                )}
            </PopupState>
            <ul className={styles.container__links} sx={{ display: { md: 'flex', xs: 'none' } }}>
                {['about us', 'tokenomics'].map((item) => (
                    <li className={styles.links} key={`link-${item}`}>
                        <Link href={`/${item}`}>{item}</Link>
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
