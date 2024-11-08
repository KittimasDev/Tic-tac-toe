import NextAuth from 'next-auth/next'
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),

    ],
    // callbacks: {
    //     async jwt({ token, account }) {
    //         try {
    //             if (account) {
    //                 let data =
    //                 {
    //                     firstName: token.name,
    //                     lastName: "-",
    //                     email: token.email,
    //                     token: account.access_token
    //                 }
    //                 const myHeaders = new Headers();
    //                 myHeaders.append("Content-Type", "application/json");

    //                 const raw = JSON.stringify(data);

    //                 const requestOptions = {
    //                     method: "POST",
    //                     headers: myHeaders,
    //                     body: raw,
    //                     redirect: "follow"
    //                 };

    //                 const result = await fetch("http://localhost:3001/auth", requestOptions)
    //                     .then((response) => response.json())
    //                 token.access_token = result.access_token
    //                 token.id = result.user.id
    //             }
    //         } catch (error) {
    //             console.log("errorerror", error)

    //         }
    //         return token
    //     },
    //     async session({
    //         session,
    //         token,
    //     }) {
    //         session.access_token = token.access_token
    //         session.user.id = token.id

    //         return session
    //     }

    // }
})
export { handler as GET, handler as POST }