"use client";
import { useSession, signOut } from "next-auth/react";
import { useEffect } from "react";
import { get } from "lodash";
import styled from "styled-components";

export default function Component() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      const id = get(session, "user.id", "");
      localStorage.setItem("email-user-login", id);
    }
  }, [session]);

  return (
    <div className="my-container">
      <Wrapper>
        {session ? (
          <div data-header="wrapper">
            <div>Signed in as {session?.user?.email} </div>
            <div>
              <button onClick={() => signOut()}>Sign out</button>
            </div>
          </div>
        ) : (
          <>
   
          </>
        )}
      </Wrapper>
    </div>
  );
}

export const Wrapper = styled.div`

  [data-header="wrapper"]{
    display: flex;
    justify-content: space-between;
    padding:20px 20px 20px 20px;
    background-color:#000C66;
    color:white;
  }
`;
