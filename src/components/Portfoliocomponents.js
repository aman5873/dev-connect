import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaGlobe,
} from "react-icons/fa";

export function GithubHighlights({ githubUsername }) {
  return (
    <>
      <div
        style={{
          fontSize: 18,
          fontWeight: "bold",
          marginTop: 10,
          color: "#F85D7F",
          marginTop: 20,
        }}
      >
        GitHub Highlights
      </div>
      {/* Streak Stats */}
      {/* <img
        src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=radical&border=7F3FBF&background=0D1117`}
        alt="GitHub Streak Stats"
        className="w-full rounded-lg"
        style={{ width: 400, maxWidth: 500, margin: "10px auto" }}
      /> */}
      {/* Profile Details Summary Card */}
      <img
        src={`https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${githubUsername}&theme=radical`}
        alt="GitHub Profile Summary"
        // className="w-full rounded-lg"
        style={{ width: 400, maxWidth: 500, margin: "20px auto 10px" }}
      />
      {/* GitHub Contribution Chart */}
      <img
        src={`https://ghchart.rshah.org/7F3FBF/${githubUsername}`}
        alt="GitHub Contributions"
        className="w-full rounded-lg bg-[#0D1117] p-4"
        style={{
          width: 400,
          maxWidth: 500,
          margin: "20px auto",
          marginTop: 30,
        }}
      />
      {/* Top Languages */}
      <img
        src={`https://denvercoder1-github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&langs_count=8&layout=compact&theme=react&border_color=7F3FBF&bg_color=0D1117&title_color=F85D7F&icon_color=F8D866`}
        alt="Top Languages"
        style={{ width: 400, maxWidth: 500, margin: "10px auto" }}
      />
    </>
  );
}
export function GithubRepoTable({ repos }) {
  if (repos?.length)
    return (
      <div
        style={{
          borderRadius: "1rem",
          overflow: "hidden",
          boxShadow: "0 2px 12px rgba(0, 0, 0, 0.4)",
          border: "1px solid #1F2937",
          width: 400,
          maxWidth: 500,
          margin: "10px auto",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            backgroundColor: "#0D1117",
            color: "#FFFFFF",
            fontSize: "0.875rem",
            textAlign: "left",
          }}
        >
          <thead
            style={{
              backgroundColor: "#111827",
              borderBottom: "1px solid #1F2937",
            }}
          >
            <tr>
              <th style={{ padding: "12px 20px", color: "#F85D7F" }}>Name</th>
              <th style={{ padding: "12px 20px", color: "#F85D7F" }}>Stars</th>
              <th style={{ padding: "12px 20px", color: "#F85D7F" }}>Forks</th>
              <th style={{ padding: "12px 20px", color: "#F85D7F" }}>
                Language
              </th>
            </tr>
          </thead>
          <tbody>
            {repos.map((repo, index) => (
              <tr
                key={repo.id}
                style={{
                  backgroundColor: index % 2 === 0 ? "#0D1117" : "#10151C",
                  transition: "background-color 0.2s ease-in-out",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#1F2937")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    index % 2 === 0 ? "#0D1117" : "#10151C")
                }
              >
                <td
                  style={{
                    padding: "12px 20px",
                    borderTop: "1px solid #1F2937",
                  }}
                >
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#58A6FF",
                      textDecoration: "underline",
                      fontWeight: 500,
                    }}
                  >
                    {repo.name}
                  </a>
                </td>
                <td
                  style={{
                    padding: "12px 20px",
                    borderTop: "1px solid #1F2937",
                  }}
                >
                  {repo.stargazers_count}
                </td>
                <td
                  style={{
                    padding: "12px 20px",
                    borderTop: "1px solid #1F2937",
                  }}
                >
                  {repo.forks_count}
                </td>
                <td
                  style={{
                    padding: "12px 20px",
                    borderTop: "1px solid #1F2937",
                  }}
                >
                  {repo.language || "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export function ProfileDetails({ profile }) {
  if (profile)
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: 700,
          margin: "10px auto",
        }}
      >
        {/* Bio / Description */}
        <section style={{ textAlign: "center", margin: "0px auto" }}>
          <h2 style={{ fontSize: 22, fontWeight: "bold", color: "#F85D7F" }}>
            {profile?.name}
          </h2>
          <Contacts profile={profile} />
          <p style={{ fontSize: 16, color: "#000000" }}>
            {profile?.description}
          </p>
        </section>

        {/* Skills */}
        <section style={{ textAlign: "center", margin: "20px auto" }}>
          <h3 style={{ fontSize: 18, color: "#F85D7F", marginBottom: 10 }}>
            Skills
          </h3>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 8,
            }}
          >
            {profile?.skills?.map((skill) => (
              <span
                key={skill}
                style={{
                  color: "#ffffff",
                  padding: "6px 12px",
                  backgroundColor: "#1F2937",
                  borderRadius: "8px",
                  fontSize: "0.875rem",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    );
}

function Contacts({ profile }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1.5rem",
          flexWrap: "wrap",
        }}
      >
        {profile?.contact?.gmail && (
          <a
            href={`mailto:${profile.contact.gmail}`}
            style={{ color: "#F85D7F", fontSize: "1.4rem" }}
            title="Email"
          >
            <FaEnvelope />
          </a>
        )}

        {profile?.contact?.phone && (
          <a
            href={`tel:${profile.contact.phone}`}
            style={{ color: "#58A6FF", fontSize: "1.4rem" }}
            title="Call"
          >
            <FaPhoneAlt />
          </a>
        )}

        {profile?.contact?.linkedin && (
          <a
            href={profile?.contact?.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#0A66C2", fontSize: "1.4rem" }}
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
        )}
        {/* GitHub */}
        {profile?.github_user && (
          <a
            href={`https://github.com/${profile?.github_user}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#06213c", fontSize: "1.4rem" }}
            title="GitHub"
          >
            <FaGithub />
          </a>
        )}

        {/* Portfolio / Website */}
        {profile.contact.website && (
          <a
            href={profile.contact.website}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#10B981", fontSize: "1.4rem" }}
            title="Portfolio Website"
          >
            <FaGlobe />
          </a>
        )}
      </div>
    </>
  );
}
