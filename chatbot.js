// === AI 小幫手（純前端 Demo 版，不連外、不需 API Key） ===
// 使用固定回覆模擬 AI 行為，適合展示 Demo，用起來不卡、穩定。

async function sendMessage() {
    const inputField = document.getElementById("userInput");
    const message = inputField.value.trim();
    if (!message) return;

    addMessage("user", message);
    inputField.value = "";

    // 模擬 AI 思考時間
    await sleep(400);

    const reply = generateDemoReply(message);
    addMessage("bot", reply);
}

// === 產生 Demo 回覆（可自行改內容） ===
function generateDemoReply(question) {
    question = question.toLowerCase();

    if (question.includes("紡") || question.includes("纖")) {
        return "目前紡纖產業需求仍受景氣調整影響，但回補庫存動能有望在 2025 上半年逐步恢復。";
    }
    if (question.includes("石化")) {
        return "石化產業受到油價波動與下游客戶庫存調整影響，短期走勢震盪。";
    }
    if (question.includes("水泥")) {
        return "水泥需求受惠營建與基礎建設需求支撐，但原料成本仍須留意。";
    }
    if (question.includes("金融")) {
        return "金融業聚焦淨息差與資產品質，AI 與資料治理成為新的競爭關鍵。";
    }
    if (question.includes("電信")) {
        return "電信業進入 5G 穩健成長期，企業專網、AI 網管和節能成為主要亮點。";
    }
    if (question.includes("零售")) {
        return "零售市場回到常態化成長，OMO 整合與會員經濟仍是核心策略。";
    }
    if (question.includes("公益") || question.includes("csr")) {
        return "公益趨勢聚焦 ESG 與永續，企業越來越重視社會影響力。";
    }

    // 通用回覆
    return "已收到您的問題！可向我詢問：紡纖、石化、水泥、零售、金融、電信、公益等產業動向哦。";
}

// === 訊息渲染 ===
function addMessage(sender, text) {
    const box = document.getElementById("chatBody");
    const msg = document.createElement("div");
    msg.className = sender === "user" ? "msg-user" : "msg-bot";
    msg.innerText = text;

    box.appendChild(msg);
    box.scrollTop = box.scrollHeight;
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
