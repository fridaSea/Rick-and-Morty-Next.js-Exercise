import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found - Rick and Morty",
};

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>The page you were looking for doesn`t exist.</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
