export async function fetchUserRepos(username) {
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  if (!res.ok) throw new Error("GitHub API error");
  const data = await res.json();

  // Sort by stars and limit to 6
  return data
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 6)
    .map((repo) => ({
      name: repo.name,
      description: repo.description,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      url: repo.html_url,
      language: repo.language,
    }));
}
