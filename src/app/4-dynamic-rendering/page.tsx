import { Character } from "@/model/types/types";
import Image from "next/image";
import styles from "@/styles/page.module.css";

export const revalidate = 0;
async function ISR() {
  const randomId = Math.floor(Math.random() * 800);
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${randomId}`
    // { next: { revalidate: 0 } }
  );
  const character: Character = await response.json();

  return (
    <div className={styles.page}>
      <h2>
        <strong>Server Side Rendering (SSR)</strong> this page is Dynamically
        Rendered on the server, generated on demand on the server when the user
        visits the url (or refreshes the page)
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
