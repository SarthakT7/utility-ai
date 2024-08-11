import Groq from "groq-sdk";

const getGroqAnswer = (input) => {
  try {
    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
    const response = groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `Please proofread the following email for grammatical errors, spelling mistakes, and formatting issues. Make the email more formal if needed. Provide only the corrected version of the email. Here is the input: ${input}`,
        },
      ],
      model: "llama3-groq-70b-8192-tool-use-preview",
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};

const proofReadEmail = async (req, res) => {
  const inputText = req.body.input;
  if (!inputText)
    return res.status(400).json({ error: "Request body is required" });

  const outputText = await getGroqAnswer(inputText);
  res.json({
    data: outputText.choices[0]?.message?.content || "",
  });
};

export default proofReadEmail;
