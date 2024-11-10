'use client';

import { useState } from "react";
import styled from "styled-components";

export default function TicTacToe() {
 
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState<boolean>(true);
  const [score, setScore] = useState<number>(0);
  const [winStreak, setWinStreak] = useState<number>(0);
  const [currentPlayer, setCurrentPlayer] = useState<string>("Best");

  const checkWinner = (board: (string | null)[]): string | null => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const [a, b, c] of winningCombinations) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const checkDraw = (board: (string | null)[]): boolean => {
    return board.every((cell) => cell !== null);
  };

  const handleClick = (index: number): void => {
    if (board[index] || checkWinner(board)) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";
    setBoard(newBoard);

    const winner = checkWinner(newBoard);
    if (winner) {
      if (winner === "X") {
        setScore(score + 1);
        setWinStreak(winStreak + 1);
        if (winStreak + 1 === 3) {
          setScore(score + 2);
          setWinStreak(0);
        }
        alert("You won this round!");
      } else {
        setScore(score - 1);
        setWinStreak(0);
        alert("You lost! Bot wins this round.");
      }
      setTimeout(() => resetBoard(), 2000);
    } else if (checkDraw(newBoard)) {
      alert("It's a draw!");
      setTimeout(() => resetBoard(), 2000);
    } else {
      setIsXTurn(!isXTurn);
      setCurrentPlayer(isXTurn ? "Eve" : "Best");
    }
  };

  const resetBoard = (): void => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
    setCurrentPlayer("Best");
  };

  return (
    <Wrapper>
      <h2>Score: {score}</h2>
      <p>Current Turn: {currentPlayer}</p>
      <BoardWrapper>
        {board.map((cell, index) => (
          <Cell
            key={index}
            onClick={() => handleClick(index)}
            cell={cell}
          >
            {cell}
          </Cell>
        ))}
      </BoardWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  text-align: center;
  h2 {
    text-align: left;
    padding-top: 20px;
    padding-left: 20px;
    font-size: 22px;
  }
`;

export const BoardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  gap: 5px;
  justify-content: center;
`;

interface CellProps {
  cell: string | null;
}

export const Cell = styled.button<CellProps>`
  width: 100px;
  height: 100px;
  font-size: 2rem;
  background-color: ${({ cell }) => 
    cell === "X" ? "#A3E4D7" : cell === "O" ? "#F5B7B1" : "#F8F9F9"};
  border: 1px solid #ddd;
  cursor: pointer;

  &:hover {
    background-color: ${({ cell }) => !cell && "#E8E8E8"};
  }
`;
