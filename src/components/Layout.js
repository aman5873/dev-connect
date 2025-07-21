// src/components/Layout.js
import React from "react";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <header className="p-4 shadow bg-gray-100 dark:bg-gray-800">
        <nav className="container mx-auto flex justify-between">
          <Link href="/" className="font-bold text-lg">
            DevConnect
          </Link>
          <div className="space-x-4">
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/skills">Skills</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>
      </header>
      <main className="flex-grow container mx-auto p-4">{children}</main>
      <footer className="p-4 text-center text-sm bg-gray-100 dark:bg-gray-800">
        © {new Date().getFullYear()} DevConnect. All rights reserved.
      </footer>
    </div>
  );
}
