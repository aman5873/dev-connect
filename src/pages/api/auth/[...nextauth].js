import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.login = token.login; // ✅ GitHub username
      session.accessToken = token.accessToken; // ✅ Optional, if needed
      return session;
    },
    async jwt({ token, account, profile }) {
      if (account?.provider === "github") {
        token.login = profile.login; // ✅ GitHub username from GitHub API
        token.accessToken = account.access_token;
      }
      return token;
    },
  },
});
