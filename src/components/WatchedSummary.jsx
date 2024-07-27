import durationIcon from "../assets/SVG/duration.svg";
import starIcon from "../assets/SVG/star.svg";

const styles = {
  iconSize: " h-6 w-6",
  summary: "flex gap-6 text-3xl items-center",
  summaryStyle: "flex gap-1 items-baseline  ",
  h2: "text-3xl mb-3.5 font-semibold text-center",
  
};

export default function WatchedSummary({ watched }) {
  const average = (arr) =>
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="summary" >

      <h2 className={styles.h2}>MY FAVOURITE MOVIES</h2>

      <div className={styles.summary}>
        <div className={styles.summaryStyle}>
          <span>movies: {watched.length} </span>
        </div>

        <div className={styles.summaryStyle}>
          <p>imdb </p>
          <img className={styles.iconSize} src={starIcon} alt=" ⭐️" />
          <span>{avgImdbRating.toFixed(2)} </span>
        </div>

        <div className={styles.summaryStyle}>
          <p>user</p>
          <img className={styles.iconSize} src={starIcon} alt=" ⭐️" />
          <span>{avgUserRating.toFixed(2)}</span>
        </div>

        <div className={styles.summaryStyle}>
          <img className={styles.iconSize} src={durationIcon} alt=" ⏳" />
          <span> {avgRuntime.toFixed(2)} min</span>
        </div>

      </div>
    </div>
  );
}
