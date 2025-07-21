export default function ModernTemplate({ user, repos }) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold">{user.name}</h1>
      <p className="text-gray-600">{user.bio}</p>
      <p className="italic text-sm text-gray-500">{user.tagline}</p>

      <h2 className="text-2xl mt-6 mb-2">Projects</h2>
      <ul className="grid gap-4">
        {repos?.map((repo) => (
          <li key={repo.id} className="border rounded p-4 shadow-sm">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold"
            >
              {repo.name}
            </a>
            <p className="text-sm text-gray-600">{repo.description}</p>
            <div className="text-xs mt-2 text-gray-500">
              ⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
