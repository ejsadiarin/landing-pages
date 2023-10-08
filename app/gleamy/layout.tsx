
import type { Metadata } from "next";
import GleamyTemplate from "./template";

export const metadata: Metadata = {
  title: "Gleamy",
  description: "Creative Agency UI",
}

export default function GleamyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <body className="bg-black"> 
        {children}
      </body>
  )
}
