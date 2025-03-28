import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rick and Morty - Characters",
  description: "See all the Characters from Rick and Morty",
  // icons: {
  //   icon: "/favicon.ico", // /public path
  // },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
