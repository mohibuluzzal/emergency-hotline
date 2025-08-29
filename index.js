// Heart Count
const totalHeartCount = document.getElementById("heartCount");
let heartCount = 0;
document.querySelectorAll(".heart-btn").forEach(heart => {
  heart.addEventListener("click", () => {
    heartCount++;
    totalHeartCount.innerText = heartCount;
  });
});


const coinsEl = document.getElementById("coins");
let coins = parseInt(coinsEl.textContent.trim(), 10);

// Call History
const historyBox = document.getElementById("box-4");
const historyContainer = document.createElement("div");
historyContainer.id = "historyContainer";
historyBox.appendChild(historyContainer);


const clearBtn = document.getElementById("clearHistoryBtn");
clearBtn.addEventListener("click", () => {
  historyContainer.innerHTML = ""; // Clear all call history
});


const cardsContainer = document.querySelector(".card-container");
cardsContainer.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;

 
  const isCallBtn =
    btn.querySelector(".fa-phone") || btn.textContent.toLowerCase().includes("call");
  if (!isCallBtn) return;

 
  if (coins < 20) {
    alert("Not enough coins to make this call. You need at least 20.");
    return;
  }

  const card = btn.closest(".box");
  if (!card) return;

  const serviceName = card.querySelector("h5")?.textContent.trim();
  const serviceNumber = card.querySelector("p.font-bold")?.textContent.trim();

  alert(`Calling ${serviceName} (${serviceNumber})`);


  coins -= 20;
  coinsEl.textContent = coins;


  const item = document.createElement("div");
  item.className =
    "mx-3 bg-[#fafafa] p-2 rounded-lg mt-3 flex items-center justify-between";
  item.innerHTML = `
    <div>
      <p class="madu font-semibold">${serviceName}</p>
      <p class="madu font-extralight text-gray-500">${serviceNumber}</p>
    </div>
    <div>
      <time>${new Date().toLocaleTimeString()}</time>
    </div>
  `;
  historyContainer.prepend(item)
});
