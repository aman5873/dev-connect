export default function ClassicTemplate({ user }) {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">{user.name}</h1>
      <p>{user.bio}</p>
      {/* Add sections like projects, blog, skills here */}
    </div>
  );
}
