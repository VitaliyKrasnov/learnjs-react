export const Reviews = ({ reviews }) => {
    return (
        <div>
            <h3>Reviews</h3>
            <ul style={{ listStyleType: "none" }}>
                {!reviews || reviews.length === 0 ? (
                    <li>Отзывов ещё нет</li>
                ) : (
                    reviews.map((review) => (
                        <li style={{ paddingBottom: "10px" }}>
                            {review.user} ({review.rating}): {review.text}
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};
