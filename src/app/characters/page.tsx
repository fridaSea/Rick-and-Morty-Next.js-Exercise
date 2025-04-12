import { Character } from "@/model/types/types";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/page.module.css";

export const revalidate = 0;

async function CharactersPage() {
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

  // const [characters, setCharacters] = useState<Character[] | null>(null);

  // const getCharacters = async () => {
  //   const response = await fetch("https://rickandmortyapi.com/api/character");
  // const data: APIOKResponse = await response.json();
  //setCharacters(data.results);
  //};
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const character: Character = await response.json();

  // useEffect(() => {
  //   getCharacters();
  // }, []);

  return (
    <div className={styles.page}>
      <p>List of Characters</p>
      <p>
        Client Side Rendering - this component is rendered on the browser when
        the user navigates to it
      </p>

      {/* TODO LOADER FOR IMAGE https://nextjs.org/docs/pages/api-reference/components/image */}
      {characters &&
        characters.map((character) => {
          return (
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
                <Link href={`characters/${character.id}`}>Read more</Link>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default CharactersPage;
