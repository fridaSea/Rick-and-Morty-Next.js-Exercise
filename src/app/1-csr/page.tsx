"use client";

import { APIOKResponse, Character } from "@/model/types/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "@/styles/page.module.css";

function CSR() {
  const [characters, setCharacters] = useState<Character[] | null>(null);
  const getCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data: APIOKResponse = await response.json();
    setCharacters(data.results);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className={styles.page}>
      <h2>
        <strong>Client Side Rendering (CSR)</strong> this component is rendered
        on the btowser when the user navigates to it
      </h2>
      {characters &&
        characters.map((character) => {
          return (
            <div key={character.id}>
              <Link href={`1-csr/${character.name}`}>
                <Image
                  src={character.image}
                  alt={`a pic from ${character.name}`}
                  width={300}
                  height={300}
                  quality={75}
                />
                <h3>{character.name}</h3>
              </Link>
            </div>
          );
        })}
    </div>
  );
}

export default CSR;
