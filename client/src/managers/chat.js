export const sendMessage = (question) => {
    const openAiKey = process.env.REACT_APP_OPENAI_API_KEY
    return fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${openAiKey}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: question }],
            max_tokens: 100
        })
    }).then((response) => response.json())
}