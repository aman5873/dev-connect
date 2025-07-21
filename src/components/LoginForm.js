// components/LoginForm.js
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";

export default function LoginForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          Welcome to DevConnect
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Sign in with your GitHub to continue
        </p>
        <button
          onClick={() => signIn("github")}
          style={{
            display: "flex",
            gap: 10,
            width: "fit-content",
            alignItems: "center",
            padding: "3px 6px",
          }}
        >
          <FaGithub size={20} />
          Sign in with GitHub
        </button>
      </div>
    </div>
  );
}
