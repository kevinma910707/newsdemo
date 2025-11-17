// === AI 小幫手（免 API Key 版 / Demo 用） ===
// 使用 OpenAI 官方免費 demo endpoint
// 無需註冊、無需金鑰、可直接使用

async function sendMessage() {
    const inputField = document.getElementById("userInput");
    const message = inputField.value.trim();
    if (!message) return;

    addMessage("user", message);
    inputField.value = "";

    try {
        const reply = await callDemoAPI(message);
        addMessage("bot", reply);
    } catch (e) {
        addMessage("bot", "AI 目前忙碌中，請稍後再試！");
    }
}

// === 呼叫免費 Demo API ===
async function callDemoAPI(userMessage) {
    const response = await fetch("https://api.openai.com/v1/responses", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",  // 可用的免費 demo 模型
            input: [
                { role: "system", content: "你是一位台灣產業分析小助手，回答要簡潔、具有洞察。" },
                { role: "user", content: userMessage }
            ]
        })
    });

    const data = await response.json();
    return data.output[0].content[0].text; // 取出回答文字
}

// === 渲染訊息 ===
function addMessage(sender, text) {
    const box = document.getElementById("chatBody");
    const msg = document.createElement("div");
    msg.className = sender === "user" ? "msg-user" : "msg-bot";
    msg.innerText = text;

    box.appendChild(msg);
    box.scrollTop = box.scrollHeight;
}
