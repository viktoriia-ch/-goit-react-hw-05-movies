import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getCastById } from '../../shared/services/movies-api';
import defautAvatar from '../../shared/images/default-avatar.jpg';
import styles from './cast-page.module.css';

const CastPage = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const data = await getCastById(id);
        setCast(data);
      } catch ({ response }) {
        Notify.failure(response.data.status_message);
      }
    };
    fetchCast();
  }, [id]);

  const items = cast.map(({ id, profile_path, name, character }) => {
    return (
      <li key={id} className={styles.item}>
        <img
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w200/${profile_path}`
              : defautAvatar
          }
          alt={name}
          className={styles.image}
        />
        <p>Name: {name}</p>
        <p>Character: {character}</p>
      </li>
    );
  });

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>The cast of the film:</h3>
      <ul className={styles.list}>{items}</ul>
    </div>
  );
};

export default CastPage;
