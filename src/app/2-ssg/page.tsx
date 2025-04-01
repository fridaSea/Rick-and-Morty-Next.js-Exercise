import Image from "next/image";
import styles from "@/styles/page.module.css";
import { Character } from "@/model/types/types";

async function SSG() {
  const randomId = Math.floor(Math.random() * 800);
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${randomId}`
  );
  const character: Character = await response.json();

  return (
    <div className={styles.page}>
      <h2>
        <strong>Static Site Generation (SSG)</strong> this page is generated and
        stored in the server at build time. We will always get the same content
        every time we visit the URL
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

export default SSG;
