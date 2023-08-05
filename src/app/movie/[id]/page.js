import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";

const Page = async ({ params }) => {

  await new Promise((resolve) => setTimeout(resolve, 1000));
  const id = params.id;
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0a05df5d71msh8eeba2697e0fe01p160a1djsn6ba71765b23e",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };
  const res = await fetch(url, options);
  const data = await res.json();
  const data_main = data[0].details;


  return (
    <div className={styles.container}>
      <Link href="/movie">
      <button className={styles.better_back_button} >
        Back
      </button>
      </Link>
      <h2 className={styles.movie_title}>
        Netflix \ <span>{data_main.type}</span>
      </h2>
      
      <div className={styles.card_section}>
        <div>
          <Image src={data_main.backgroundImage.url} height={300} width={600} />
        </div>
        <div>
          <h1>{data_main.title}</h1>
          <p>{data_main.synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
