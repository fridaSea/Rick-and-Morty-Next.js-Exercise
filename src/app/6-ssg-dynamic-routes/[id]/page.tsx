import { Character } from "@/model/types/types";
import Image from "next/image";
import styles from "@/styles/page.module.css";

type ComponentProps = {
  params: Promise<{
    id: string;
  }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const idsArray = ["10", "20", "30"];
  //you could send a request to our database and receive an array of posts
  //or we could (via exteranal API or our DB) a list of IDs/names, that later we use to fetch in the component
  const paramsArray = idsArray.map((id) => {
    return { id: id };
  });
  return paramsArray;
}

async function SSGDynamicRoute({ params }: ComponentProps) {
  const { id } = await params;

  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const character: Character = await response.json();
  return (
    <div className={styles.page}>
      <h2>
        <strong>Static Site Generation (SSG) with dynamic routes</strong> . This
        page is gonna run at build time as many times as params (in this case
        Ids) are received from the generateStaticParams function, storing
        several pages in the Server.
      </h2>

      <div>
        <Image
          src={character.image}
          alt={`a pic from ${character.name}`}
          width={300}
          height={300}
          quality={75}
        />
        <h3>{character.name}</h3>
      </div>
    </div>
  );
}

export default SSGDynamicRoute;
