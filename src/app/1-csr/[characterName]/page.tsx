// "use client";

import styles from "@/styles/page.module.css";
// import { useParams } from "next/navigation";
type ComponentProps = {
  params: Promise<{ characterName: string }>;
};
async function SingleCharacterPage({ params }: ComponentProps) {
  //   console.log("params :>> ", await params);
  //   const { characterName } = useParams<{ characterName: string }>();
  const { characterName } = await params;
  return (
    <div className={styles.page}>
      <h2>
        <strong>Page Dynamic Path</strong> we can use the URL path to fetch
        additional data.
      </h2>

      <h2>This is the page from {decodeURI(characterName)} </h2>
    </div>
  );
}

export default SingleCharacterPage;
