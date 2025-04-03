import { Character } from "@/model/types/types";
import Image from "next/image";
import { Suspense } from "react";
import styles from "@/styles/page.module.css";

async function SlowComponent() {
  const character: Character = await new Promise(async (resolve) => {
    const randomId = Math.floor(Math.random() * 800);

    setTimeout(async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${randomId}`
      );
      const data: Character = await response.json();
      resolve(data);
    }, 3000);
  });
  return (
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
  );
}

async function Streaming() {
  return (
    <div className={styles.page}>
      <h2>
        <strong>Streamin</strong> in this page the parts wrapped inside a
        Suspense element, will be served whenever they are ready, instead of
        waiting until the whole component is ready
      </h2>
      <Suspense fallback={<h1>...LOADING....</h1>}>
        <SlowComponent />
      </Suspense>
    </div>
  );
}

export default Streaming;
