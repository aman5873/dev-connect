// components/LogoutButton.js
import { signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="flex items-center gap-2 px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-xl transition duration-200"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        padding: "3px 6px",
        borderRadius: 4,
        width: "fit-content",
      }}
    >
      <FiLogOut size={18} />
      Logout
    </button>
  );
}
