import {
  GithubHighlights,
  GithubRepoTable,
  ProfileDetails,
} from "@/components/Portfoliocomponents";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Portfolio() {
  const router = useRouter();
  const { username } = router.query;

  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) return;

    const githubUrl = `https://api.github.com/users/${username}`;
    const repoUrl = `https://api.github.com/users/${username}/repos`;
    const xanoUrl = `https://x8ki-letl-twmt.n7.xano.io/api:LbYA1Egg/dev_connect?github_user=${username}`;

    const fetchData = async () => {
      try {
        const [userRes, repoRes, xanoRes] = await Promise.all([
          fetch(githubUrl),
          fetch(repoUrl),
          fetch(xanoUrl),
        ]);

        const userData = await userRes.json();
        const repoData = await repoRes.json();
        const xanoData = await xanoRes.json();

        if (userData.message === "Not Found") {
          setError("GitHub user not found");
          return;
        }

        setUser(userData);
        setRepos(repoData);
        setProfile(xanoData.length ? xanoData[0] : null);
      } catch (err) {
        setError("Error fetching data");
      }
    };

    fetchData();
  }, [username]);

  if (error) return <p>{error}</p>;
  if (!user) return <p>Loading...</p>;

  const githubUsername = user.login;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {user?.avatar_url && (
        <img
          src={user.avatar_url}
          alt=""
          style={{ width: 100, borderRadius: 50 }}
        />
      )}
      <ProfileDetails profile={profile} />
      <GithubHighlights githubUsername={githubUsername} />
      <GithubRepoTable repos={repos} />
    </div>
  );
}
