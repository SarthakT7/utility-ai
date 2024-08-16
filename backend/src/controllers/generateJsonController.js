import Groq from "groq-sdk";

const getGroqAnswer = (input) => {
  try {
    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
    const response = groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `Please generate plain json object out of this input. Provide only the json output and do not assume any data, only work with this input. Here is the input: ${input}`,
        },
      ],
      model: "llama3-groq-70b-8192-tool-use-preview",
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}
const generateJson = async (req, res) => {
    const inputJson = req.body.input;

    if(!inputJson)
        return res.status(400).json({error : "Request body is required"});

    const outputJson = await getGroqAnswer(inputJson);

    res.json({
        data : outputJson.choices[0]?.message?.content || ""
    })
}

export default generateJson;