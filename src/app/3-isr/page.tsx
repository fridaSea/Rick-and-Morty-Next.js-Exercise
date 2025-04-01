import Image from "next/image";
import styles from "@/styles/page.module.css";
import { Character } from "@/model/types/types";

// export const revalidate = 5;
async function ISR() {
  const randomId = Math.floor(Math.random() * 800);
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${randomId}`,
    { next: { revalidate: 10 } }
  );
  const character: Character = await response.json();

  return (
    <div className={styles.page}>
      <h2>
        <strong>Incremental Static Regenration (ISR)</strong> this page is
        generated and stored in the server at build time, and reb-built every 5
        second (or the amount of time indicated in the revalidate option)
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

export default ISR;
