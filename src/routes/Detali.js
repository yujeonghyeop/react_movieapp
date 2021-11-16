import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import styles from "./Detail.module.css";


function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then((response) => response.json())
      .then((json) => {
        setDetail(json.data.movie);
      });
  }, []);
  return (
    <div className={styles.container}>
      <img src={detail.large_cover_image} alt={detail.id} />
      <div className={styles.movie}>
        <h2 >{detail.title_long}</h2>
        {console.log(detail)}
        <h4 className={styles.movie__rating}>Rating : {detail.rating}</h4>
        <h5 className={styles.movie__genres}>Genres : {detail.genres}</h5>
        <h6 className={styles.movie__runtime}>Runtime : {detail.runtime}M</h6>
        <h3 className={styles.movie__summary}>Summary <br></br><br></br> {detail.description_full}</h3>
      </div>
    </div>
  );
}

export default Detail;
