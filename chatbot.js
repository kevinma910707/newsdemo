// Toggle chatbot window
const chatbotToggle = document.getElementById("chatbot-toggle");
const chatbotWindow = document.getElementById("chatbot-window");
const chatBody = document.getElementById("chat-body");
const chatText = document.getElementById("chat-text");
const chatSend = document.getElementById("chat-send");

chatbotToggle.addEventListener("click", () => {
    chatbotWindow.classList.toggle("hidden");
});

// Add message to chat window
function addMessage(text, sender = "bot") {
    const msg = document.createElement("div");
    msg.classList.add("chat-message", sender);
    msg.innerText = text;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Fake AI response (demo)
function fakeAIResponse(userMsg) {
    userMsg = userMsg.trim();

    // Simple keyword matching for demo
    if (userMsg.includes("紡織") || userMsg.includes("紡纖")) {
        return "紡纖產業目前以循環材料、回收聚酯為全球重點趨勢。台灣企業在機能布領域具競爭力。";
    }
    if (userMsg.includes("石化")) {
        return "石化產業面臨去碳化與供需循環調整。原油價格仍是關鍵影響因素。";
    }
    if (userMsg.includes("水泥")) {
        return "水泥產業受建設周期與碳費制度影響，企業正推行節能與替代燃料技術。";
    }
    if (userMsg.includes("零售")) {
        return "零售業朝 OMO（線上線下一體化）發展，並高度依賴會員數據與 AI 分析。";
    }
    if (userMsg.includes("金融")) {
        return "金融業聚焦綠色金融、ESG 資產品、以及生成式 AI 在風控與客服的應用。";
    }
    if (userMsg.includes("電信")) {
        return "電信產業正推動 5G-A、AI 網管、自動化基地台節能與企業專網布局。";
    }
    if (userMsg.includes("公益")) {
        return "公益領域重視影響力評估（Impact Measurement）與永續教育推廣。";
    }

    // Default response
    return "我已收到您的問題！目前為示範版本，我可以回答產業趨勢、分類新聞等問題。";
}

// Handle send button
chatSend.addEventListener("click", () => {
    const userMsg = chatText.value.trim();
    if (!userMsg) return;

    addMessage(userMsg, "user");
    chatText.value = "";

    setTimeout(() => {
        const reply = fakeAIResponse(userMsg);
        addMessage(reply, "bot");
    }, 500);
});

// Enter key to send
chatText.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        chatSend.click();
    }
});
