"use client";

import Link from "next/link";
// import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation"; // Verwende usePathname statt useRouter
import styles from "@/components/navbar.module.css";

function NavBar() {
  //   const router = useRouter();
  const pathname = usePathname(); // Hole die aktuelle URL mit usePathname

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul
            // className={styles.navbar}
            className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700"
          >
            <li>
              <Link
                href="/"
                className={`block py-2 px-3 md:p-0 rounded-sm md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent 
                  ${
                    pathname === "/"
                      ? "bg-blue-700 text-white"
                      : "text-gray-900 dark:text-white"
                  }`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/characters"
                className={`block py-2 px-3 md:p-0 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent 
              ${
                pathname === "/characters"
                  ? "bg-blue-700 text-white"
                  : "text-gray-900 dark:text-white"
              }`}
              >
                Characters
              </Link>
            </li>
            <li>
              <Link
                href="/episodes"
                className={`block py-2 px-3 md:p-0 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent 
              ${
                pathname === "/episodes"
                  ? "bg-blue-700 text-white"
                  : "text-gray-900 dark:text-white"
              }`}
              >
                Episodes
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
