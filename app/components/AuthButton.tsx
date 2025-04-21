"use client";

import React from "react";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { Session } from "next-auth";

interface AuthButtonProps {
  session: Session | null;
}

const AuthButton = ({ session }: AuthButtonProps) => {
  return (
    <div className="flex items-center text-black gap-5">
      {session?.user ? (
        <>
          <Link href="/startup/create">
            <span>Create</span>
          </Link>

          <button onClick={() => signOut()}>
            <span>Logout</span>
          </button>

          <Link href={`/user/${session?.id}`}>
            <span>{session?.user?.name}</span>
          </Link>
        </>
      ) : (
        <form
          action={async () => {
            await signIn("github");
          }}
        >
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default AuthButton;
