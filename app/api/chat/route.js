const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY // Replace with your actual API key

fetch("https://openrouter.ai/api/v1/chat/completions", {
  method: "POST",
  headers: {
    "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    "model": "openai/gpt-3.5-turbo",
    "messages": [
      {"role": "user", "content": "What is the meaning of life?"},
    ],
  })
})
.then(response => response.json())
.then(data => {
  console.log("Response:", data);
})
.catch(error => {
  console.error("Error:", error);
});
