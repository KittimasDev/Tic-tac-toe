import NextAuth from 'next-auth/next';
import GoogleProvider from "next-auth/providers/google";

// ใช้ environment variables สำหรับ Client ID และ Client Secret
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,  // ใช้ Environment Variable
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,  // ใช้ Environment Variable
    }),
  ],
});

export { handler as GET, handler as POST };