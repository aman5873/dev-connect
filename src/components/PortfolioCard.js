export default function PortfolioCard({ title, description, github, live }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-5 mb-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="mb-2">{description}</p>
      <div className="flex gap-4 text-blue-600 text-sm">
        <a href={github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        {live && (
          <a href={live} target="_blank" rel="noopener noreferrer">
            Live
          </a>
        )}
      </div>
    </div>
  );
}
