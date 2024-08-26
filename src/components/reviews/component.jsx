import styles from "./styles.module.css"

export const Reviews = ({ reviews }) => {
    return (
        <div>
            <h3>Reviews</h3>
            <ul className={styles.reviewsList}>
                {!reviews || reviews.length === 0 ? (
                    <li>Отзывов ещё нет</li>
                ) : (
                    reviews.map((review) => (
                        <li className={styles.reviewItem}>
                            {review.user} ({review.rating}): {review.text}
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};
