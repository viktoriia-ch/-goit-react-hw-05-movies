import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getReviewsById } from '../../shared/services/movies-api';

import styles from './reviews-page.module.css';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const results = await getReviewsById(id);
        setReviews(results);
      } catch ({ response }) {
        Notify.failure(response.data.status_message);
      }
    };
    fetchReviews();
  }, [id]);

  const items = reviews.map(({ id, author, content }) => {
    return (
      <li key={id} className={styles.item}>
        <h4 className={styles.title}>Author: {author}</h4>
        <p>{content}</p>
      </li>
    );
  });

  return items.length ? (
    <ul className={styles.list}>{items}</ul>
  ) : (
    <p className={styles.comment}>Not reviews yet</p>
  );
};

export default ReviewsPage;
