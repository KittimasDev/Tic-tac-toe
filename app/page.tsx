'use client';
import { get } from "lodash";
import dynamic from 'next/dynamic';
import { useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import { Wrapper } from '@/components/Wrapper/Wrapper';

const TicTacToe = dynamic(
  () => import('@/components/TicTacToe/TicTacToe'),
  {
    loading: () => <p>Loading...</p>,
  }
)
export default function Home() {
  const { data: session } = useSession();

  // useEffect(() => {
  //   if (session) {
  //     const id = get(session, "user.id", "");
  //     localStorage.setItem("email-user-login", id);
  //   }
  // }, [session]);

  return (
    <div className="my-container">
      <Wrapper>
      {
        session ?
        <TicTacToe />
        :

        <div  data-main='logout'>
          <button onClick={() => signIn()}>Sign in</button>
        </div>
      }
      </Wrapper>
    </div>
  );
}

