import styles from './ScreenSizeMask.module.css'

const ScreenSizeMask = () => {
  return (
    <div className={styles.screenSizeMask}>
      <div className={styles.maskContent}>
        <h2>Screen Too Small</h2>
        <p>This application requires a minimum screen width of 400px.</p>
        <p>Please use a larger screen or increase your browser window size.</p>
      </div>
    </div>
  )
}

export default ScreenSizeMask