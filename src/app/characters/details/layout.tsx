import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rick and Morty - Character Details",
  description:
    "See all the Details for every single Characters from Rick and Morty",
  // icons: {
  //   icon: "/favicon.ico", // /public path
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
