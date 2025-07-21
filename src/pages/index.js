import { useSession } from "next-auth/react";
import Link from "next/link";

import LoginForm from "@/components/LoginForm";
import PortfolioForm from "@/components/PortfolioForm";
import UserHeader from "@/components/UserHeader";

export default function HomePage() {
  const { data: session } = useSession();

  if (!session) return <LoginForm />;

  const username = session?.user?.login; // ✅ Use GitHub username directly

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <UserHeader
        image={session.user.image}
        name={session.user.name}
        login={session.user.login}
      />

      <p>
        Portfolio is live at:{" "}
        <Link
          href={`/portfolio/${username}`}
          className="text-blue-600 underline"
          style={{ color: "#206fbd" }}
        >
          dev-connect-lac-alpha.vercel.ap/portfolio/{username}
        </Link>
      </p>

      {username && <PortfolioForm githubUser={username} />}
    </div>
  );
}
