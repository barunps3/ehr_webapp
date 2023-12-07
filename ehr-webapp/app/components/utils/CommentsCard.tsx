import styles from '../styles/CommentsCard.module.css'

function CommentBox() {
  return (
    <div className={styles.commentBox}>
      27.03.2023 @XrayUser1234: Patient shows spine injury due to accident 
    </div>
  )
}

export default function CommentsCard() {
  return (
    <div className={styles.commentCard}>
      <div className={styles.previousComments}>
        <CommentBox />
        <CommentBox />
        <CommentBox />
      </div>

      <div className={styles.inputComment}>
        <label>Your Comments</label><br />
        <input type="text" placeholder="Enter your comments"></input>
        <button>Enter</button>
      </div>
    </div>
  )
}