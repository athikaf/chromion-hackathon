export async function POST(req) {
  const { prompt } = await req.json();

  const basicAnswers = {
    causes: "You can donate to causes like Education, Health, and Environment.",
    where:
      "Your donation goes to support the selected cause. The contract holds the funds.",
    how: "Connect your wallet, enter donation amount and cause, and submit!",
  };

  const lower = prompt.toLowerCase();
  if (lower.includes("cause"))
    return Response.json({ reply: basicAnswers["causes"] });
  if (lower.includes("where"))
    return Response.json({ reply: basicAnswers["where"] });
  if (lower.includes("how"))
    return Response.json({ reply: basicAnswers["how"] });

  // Fallback AI (simple OpenAI API demo)
  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      }),
    });
    const data = await res.json();
    const reply = data.choices?.[0]?.message?.content || "I'm not sure.";
    return Response.json({ reply });
  } catch (err) {
    console.error(err);
    return Response.json({ reply: "Sorry, I'm unable to answer that now." });
  }
}
