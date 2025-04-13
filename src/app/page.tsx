"use client";
import Image from "next/image";

function Home() {
  console.log("where do you see this");

  const getTodos = async () => {
    console.log("secret in Client :>> ", process.env.SECRET);
    const response = await fetch("http://localhost:3000/api/todos");
    const result = await response.json();
    console.log("result :>> ", result);
  };

  // useEffect(() => {
  //   getTodos();
  // }, [])

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div>
          <h1>Welcome to Rick & Morty</h1>
          <p>
            Homepage - Statically Rendered - don`t have to do anything because
            it is already statically rendered/ on the server
          </p>
          <br />
          <p>
            Characters - rendered Server-Side - shows a list of Rick and Morty
            characters. (WITH PAGINATION - client side) <br />
            From there, you can click each caracter to follow a
            Statically-Generated path and visit Character page rendering with
            Static-Site-Generation (WITH PAGINATION) (Pictures left, information
            right for example) . Fetched data for the pages from a REST API
          </p>
          <br />
          <p>
            Episodes - page is rendered Client-Side. I`ve used a filtered
            GraphQL query to fetch the data. FILTER: Choose a season: DROPDOWN
            MENU
          </p>
          <br />
          <p>Sonstiges: Navbar, Footer, search</p>
          <br />
          <button onClick={getTodos}>Get todos</button>
        </div>
        {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol
          className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[roboto]"
          //className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]"
        >
          <li className="mb-2 tracking-[-.01em]">
            Welcome to Rick & Morty
            <code
              className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[roboto]"
              // className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold"
            >
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly. - Rick and Morty Exercise
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div> */}
      </main>
      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div>
  );
}

export default Home;
