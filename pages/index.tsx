import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
    <div>
      <Navbar />
      <h1>Pagina principală</h1>
      <Link href="/formularinvitedigital">
       Deschide formularul
      </Link>
    </div>
    </main>
  );
}
