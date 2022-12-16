import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import styles from './Navbar.module.scss';
import constants from '../../constants';

const Navbar = () => {

    const { scrollY } = useScroll;
    // const [hidden, setHidden] = useState(false);
    // function update() {
    //     if (scrollY?.current < scrollY?.prev) {
    //         setHidden(false);
    //     } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
    //         setHidden(true);
    //     }
    // }

    console.log(scrollY);

    // useEffect(() => {
    //     return scrollY.onChange(() => update());
    // });

    // const variants = {
    //     /** this is the "visible" key and it's correlating styles **/
    //     visible: { opacity: 1, y: 0 },
    //     /** this is the "hidden" key and it's correlating styles **/
    //     hidden: { opacity: 0, y: -25 }
    // };

    return (
        <motion.div
            // variants={variants}
            // animate={hidden ? "hidden" : "visible"}
            // transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
        >
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
        </motion.div>
    )
}

export default Navbar


// const Main = ({ children, className, ...rest }) => {
//   let mainClassName = styles.main;

//   if ( className ) {
//     mainClassName = `${mainClassName} ${className}`;
//   }

//   return (
//     <div {...rest} className={mainClassName} >
//       { children }
//     </div>
//   )
// }

// export default Main;