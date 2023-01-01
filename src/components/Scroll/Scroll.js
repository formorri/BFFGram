import styles from './Scroll.module.scss';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Scroll = () => {
    return (
        <div className={styles.container}>
            <div className={styles.scroll}>
                <p>Scroll to explore</p>
                <ArrowDownwardIcon />
            </div>
        </div>
    )
}

export default Scroll