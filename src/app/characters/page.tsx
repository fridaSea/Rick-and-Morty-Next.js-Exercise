"use client";

import { APIOKResponse, Character } from "@/model/types/types";
import { useEffect, useState } from "react";

function CharactersPage() {
  // await new Promise((resolve) => {
  //   return setTimeout(resolve, 3000);
  // });
  //needs an async function

  // console.log("process.env.SECRET :>> ", process.env.SECRET);
  // above is undefinded if we use "use client" in the Konsole in the browser
  // console.log(
  //   "process.env.NEXT_PUBLIC_PASSWORD :>> ",
  //   process.env.NEXT_PUBLIC_PASSWORD
  // );
  // both are visible in the Konsole in the browser if we DON`T use "use client"

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
    <div>
      <p>List of Characters</p>
      <p>
        Client Side Rendering - this component is rendered on the browser when
        the user navigates to it
      </p>
      <br />
      {characters &&
        characters.map((character) => {
          return (
            <div key={character.id}>
              <h2>{character.name}</h2>
            </div>
          );
        })}
    </div>
  );
}

export default CharactersPage;
