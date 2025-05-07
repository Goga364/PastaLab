import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const storedHash = process.env.PASSWORD_HASH;

        const isMatch = await bcrypt.compare(credentials.password, storedHash);

        if (isMatch) {
          return { id: 1, name: "User" };
        }
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    jwt: true,
  },
  pages: {
    signIn: "/login",
  },
};

export default NextAuth(authOptions);
