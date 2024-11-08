let scoreData = {};

export default function handler(req, res) {
  const { user } = req.body;

  if (!scoreData[user]) {
    scoreData[user] = { score: 0, streak: 0 };
  }

  if (req.body.result === 'win') {
    scoreData[user].streak += 1;
    scoreData[user].score += 1;
    if (scoreData[user].streak >= 3) {
      scoreData[user].score += 1;
    }
  } else if (req.body.result === 'lose') {
    scoreData[user].streak = 0;
    scoreData[user].score -= 1;
  }

  res.json({ score: scoreData[user].score });
}
