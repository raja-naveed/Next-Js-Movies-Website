import styles from "@/app/styles/common.module.css";
import MovieCard from "./../components/MovieCard";
const page = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const url =
    "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0a05df5d71msh8eeba2697e0fe01p160a1djsn6ba71765b23e",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };
  const res = await fetch(url, options);
  const data = await res.json();
  const data_main = data.titles;
  console.log(data_main);

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series And Movies</h1>
          <div className={styles.card_section}>
            {data_main.map((curElem, i) => {
              return <MovieCard key={curElem.id} {...curElem} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
