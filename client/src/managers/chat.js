export const sendMessage = async (question) => {
    const openAiKey = process.env.REACT_APP_OPENAI_API_KEY

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: question }],
            max_tokens: 100
        }),
        headers: {
            "Authorization": `Bearer ${openAiKey}`,
            "Content-Type": "application/json"
        },
        method: "POST",
    })

    return response.json()
}
