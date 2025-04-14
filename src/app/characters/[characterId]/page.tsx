import Image from "next/image";
// import Link from "next/link";
import styles from "@/styles/page.module.css";
import { Character } from "@/model/types/types";

async function SingleCharacterPage() {
  // const randomId = Math.floor(Math.random() * 800);
  // const response = await fetch(
  //   `https://rickandmortyapi.com/api/character/${randomId}`
  // );
  const character: Character = await response.json();
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${character.id}`
  );

  return (
    <div className={styles.page}>
      <p>Details for Characters</p>
      <p>
        Page with Dynamic Path - we can use the URL path to fetch additional
        data.
      </p>

      {/* TODO LOADER FOR IMAGE https://nextjs.org/docs/pages/api-reference/components/image */}

      <div
        key={character.id}
        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
      >
        <Image
          src={character.image}
          alt={`Picture of the character ${character.name}`}
          width={500}
          height={500}
          quality={80}
        />
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {character.name}
            </h5>
          </a>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Gender: {character.gender}
          </h5>
        </div>
      </div>
    </div>
  );
}

export default SingleCharacterPage;
