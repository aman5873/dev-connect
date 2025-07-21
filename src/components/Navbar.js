import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-3 flex justify-between">
      <Link href="/">DevConnect</Link>
      <div className="space-x-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/auth/login">Login</Link>
      </div>
    </nav>
  );
}
