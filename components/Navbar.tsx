import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import AuthButton from "./AuthButton";
import { Session } from "next-auth";

const Navbar = async () => {
  const session: Session | null = await auth();

  return (
    <header className="bg-bggrey px-5 py-3 shadow-sm">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={140} height={50} />
        </Link>
        <AuthButton session={session} />
      </nav>
    </header>
  );
};

export default Navbar;
