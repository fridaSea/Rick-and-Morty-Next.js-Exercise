"use client";

import Link from "next/link";
import { DropdownDivider, Nav, NavDropdown } from "react-bootstrap";
// import { useRouter } from "next/navigation";
// import { usePathname } from "next/navigation"; // Verwende usePathname statt useRouter
// import { useRouter } from "next/router";
// import { useState } from "react";
import styles from "@/components/navbar.module.css";

function NavBar() {
  //   const router = useRouter();
  // const pathname = usePathname(); // Hole die aktuelle URL mit usePathname
  //const Dropdown = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const { pathname } = useRouter();

  // const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <nav>
      <ul className={styles.navbar}>
        <li>
          <Link href="/"> Home</Link>
        </li>
        <li>
          <Link href="/contact"> Contact</Link>
        </li>
        <li>
          <Nav.Link href="/hello" as={Link}>
            Hello
          </Nav.Link>
        </li>
        <li>
          <Nav.Link href="/1-csr" as={Link}>
            CSR
          </Nav.Link>
        </li>
        <li>
          <NavDropdown title="Server Rendering" id="nav-dropdown">
            <Nav.Link href="/2-ssg" as={Link}>
              SSG
            </Nav.Link>
            <Nav.Link href="/3-isr" as={Link}>
              ISR
            </Nav.Link>
            <Nav.Link href="/4-dynamic-rendering" as={Link}>
              SSR
            </Nav.Link>
            <Nav.Link href="/5-streaming" as={Link}>
              Streaming
            </Nav.Link>
            <DropdownDivider />
            <Nav.Link href="/6-ssg-dynamic-routes/10" as={Link}>
              Character 10
            </Nav.Link>
            <Nav.Link href="/6-ssg-dynamic-routes/20" as={Link}>
              Character 20
            </Nav.Link>
            <Nav.Link href="/6-ssg-dynamic-routes/30" as={Link}>
              Character 30
            </Nav.Link>
          </NavDropdown>
          <NavDropdown title="Server Actions" id="nav-dropdown">
            <Nav.Link href="/client-login" as={Link}>
              Client Component
            </Nav.Link>
            <Nav.Link href="/server-login" as={Link}>
              Server Component
            </Nav.Link>
          </NavDropdown>
        </li>
      </ul>
    </nav>
    // <nav className="bg-white border-gray-200 dark:bg-gray-900">
    //   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    //     <div
    //       className="hidden w-full md:block md:w-auto"
    //       id="navbar-solid-bg"
    //     >
    //       <ul
    //         // className={styles.navbar}
    //         className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700"
    //       >
    //         <li>
    //           <Link
    //             href="/"
    //             className={`block py-2 px-3 md:p-0 rounded-sm md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent
    //             ${
    //               pathname === "/"
    //                 ? "bg-blue-700 text-white"
    //                 : "text-gray-900 dark:text-white"
    //             }`}
    //             aria-current="page"
    //           >
    //             Home
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             href="/characters"
    //             className={`block py-2 px-3 md:p-0 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent
    //         ${
    //           pathname === "/characters"
    //             ? "bg-blue-700 text-white"
    //             : "text-gray-900 dark:text-white"
    //         }`}
    //           >
    //             Characters
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             href="/episodes"
    //             className={`block py-2 px-3 md:p-0 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent
    //         ${
    //           pathname === "/episodes"
    //             ? "bg-blue-700 text-white"
    //             : "text-gray-900 dark:text-white"
    //         }`}
    //           >
    //             Episodes
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             href="/1-csr"
    //             className={`block py-2 px-3 md:p-0 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent
    //         ${
    //           pathname === "/1-csr"
    //             ? "bg-blue-700 text-white"
    //             : "text-gray-900 dark:text-white"
    //         }`}
    //           >
    //             CSR
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
}

export default NavBar;
