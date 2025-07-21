export default function GitHubProjects({ repos }) {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-4">Featured GitHub Projects</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {repos.map((repo) => (
          <a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block border rounded-md p-4 hover:shadow-md transition"
          >
            <h3 className="font-bold text-lg">{repo.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{repo.description}</p>
            <div className="text-xs text-gray-500">
              ⭐ {repo.stars} &nbsp; | &nbsp; 🍴 {repo.forks} &nbsp; | &nbsp; 🖥️{" "}
              {repo.language}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
