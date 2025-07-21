import {
  GithubHighlights,
  GithubRepoTable,
  ProfileDetails,
} from "@/components/Portfoliocomponents";
import React from "react";

export async function getServerSideProps({ params }) {
  const username = params.username;

  const githubUrl = `https://api.github.com/users/${username}`;
  const repoUrl = `https://api.github.com/users/${username}/repos`;
  const xanoUrl = `https://x8ki-letl-twmt.n7.xano.io/api:LbYA1Egg/dev_connect?github_user=${username}`;

  try {
    const [userRes, repoRes, xanoRes] = await Promise.all([
      fetch(githubUrl),
      fetch(repoUrl),
      fetch(xanoUrl),
    ]);

    const user = await userRes.json();
    const repos = await repoRes.json();
    const xanoData = await xanoRes.json();

    if (user.message === "Not Found") {
      return { notFound: true };
    }

    return {
      props: {
        user,
        repos,
        profile: xanoData.length ? xanoData[0] : null, // Safe fallback
      },
    };
  } catch (error) {
    return { notFound: true };
  }
}

export default function Portfolio({ user, repos, profile }) {
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
      {/* <UserHeader image={user.avatar_url} name={user.name} login={user.login} /> */}
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
