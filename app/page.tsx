'use client';
import { get } from "lodash";
import dynamic from 'next/dynamic';
import { useEffect } from "react";
import styled from "styled-components";
import { useSession, signIn, signOut } from "next-auth/react";
const TicTacToe = dynamic(
  () => import('@/components/TicTacToe/TicTacToe'),
  {
    loading: () => <p>Loading...</p>,
  }
)
export default function Home() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      const email = get(session, "user.email", "");
      const id = get(session, "user.id", "");
      localStorage.setItem("email-user-login", id);
    }
  }, [session]);

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

export const Wrapper = styled.div`
min-height: calc(-70px + 100vh);
background-color: white;
[data-main='logout']
{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;
