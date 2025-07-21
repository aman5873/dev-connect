import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET, // ✅ This line is required in production
  callbacks: {
    async session({ session, token }) {
      session.user.login = token.login;
      session.accessToken = token.accessToken;
      return session;
    },
    async jwt({ token, account, profile }) {
      if (account?.provider === "github") {
        token.login = profile.login;
        token.accessToken = account.access_token;
      }
      return token;
    },
  },
});
