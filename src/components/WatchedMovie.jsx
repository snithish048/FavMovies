import deleteIcon from "../assets/SVG/delete.svg";
import durationIcon from "../assets/SVG/duration.svg";
import starIcon from "../assets/SVG/star.svg";
import stl from '../App.module.css'



const styles = {
  iconSize:" h-6 w-6" ,
  summaryStyle: "flex gap-1 items-baseline"
}

export default function WatchedMovie({
  movie,
  handleDeleteWatched,
  setSelectedId,
}) {
  const handleClick = (event) => {
    setSelectedId(movie.imdbID);
    console.log(event);
    console.log(movie.imdbID);
  };
  return (
    <li className="hover:bg-[#067ba5]">
      <img
        className="w-full "
        src={movie.poster}
        alt={`${movie.Title} poster`}
        onClick={(e) => handleClick(e)}
      />

      <div className="flex gap-8 flex-col ">
        <h3 className="text-3xl" onClick={(e) => handleClick(e)}>
          {movie.title}
        </h3>
        <div className="flex items-center gap-8">
          <div className={styles.summaryStyle}>
            <p>imdb </p>
            <img className={styles.iconSize} src={starIcon} alt=" ⭐️" />

            <span>{movie.imdbRating} </span>
          </div>
          <div className={styles.summaryStyle}>
            <p>user</p>
            <img className={styles.iconSize} src={starIcon} alt=" ⭐️" />
            <span>{movie.userRating}</span>
          </div>
          <div className={styles.summaryStyle}>
            <img className={styles.iconSize} src={durationIcon} alt=" ⏳" />
            <span> {movie.runtime} min</span>
          </div>
          <button
            onClick={() => handleDeleteWatched(movie.imdbID)}
            className="absolute right-10"
          >
            <img className=" h-10 w-10" src={deleteIcon} alt=" Logo" />
          </button>
        </div>
      </div>
    </li>
  );
}
