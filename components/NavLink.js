import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function NavLinkMenu() {
  const router = useRouter();
  const testRef = useRef(null);

  const mouseOk = () => {
    testRef.current.classList.add("test");
  };

  const mouseOut = () => {
    testRef.current.classList.remove("test");
  };
  return (
    <div>
      <Link href="/">
        <a
          onMouseEnter={mouseOk}
          onMouseOut={mouseOut}
          ref={testRef}
          className={` ${router.pathname == "/" ? "active" : ""}`}
        >
          Home
        </a>
      </Link>
      <Link href="/">
        <a className={router.pathname == "/" ? "active" : ""}>Home</a>
      </Link>
      <Link href="/">
        <a className={router.pathname == "/" ? "active" : ""}>Home</a>
      </Link>
    </div>
  );
}
