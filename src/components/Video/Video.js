import styles from './Video.module.scss';
import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Modal from '@mui/material/Modal';

const Video = ({videoSource}) => {
    const [modal, setModal] = useState(false);
    return (
        <>
            <div
                className={styles['buttons-dark']}
                onClick={() => setModal(true)}
            >
                <a>
                    Play video <PlayArrowIcon />
                </a>
            </div>
            <Modal
                open={modal}
                onClose={() => setModal(false)}
            >
                <div className={styles['modal']}>
                    <div className={styles['video']}>
                        <IconButton className={styles['video__close']} onClick={() => setModal(false)}>
                            <CloseIcon />
                        </IconButton>
                        <video controls autoPlay className={styles['video__video']}>
                            <source src={videoSource} type="video/mp4" />
                            {/* <source src={`${process.env.NEXT_PUBLIC_URL}/video/${videoSource}`} type="video/mp4" /> */}
                        </video>
                    </div>
                </div>
            </Modal>

        </>
    )
}

export default Video
