"use client";

import { X } from "lucide-react";
import Link from "next/link";
import React from "react";

const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector(".search-formm") as HTMLFormElement;
    if (form) {
      form.reset();
    }
  };
  return (
    <button type="reset" onClick={reset} className="search-btn text-white">
      <Link href="/">
        <X className="size-5" />
      </Link>
    </button>
  );
};

export default SearchFormReset;
