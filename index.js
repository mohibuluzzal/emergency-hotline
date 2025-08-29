// for heart count
const totalHeartCount = document.getElementById("heartCount");
let count = 0

const hearts = document.querySelectorAll(".heart-btn")

hearts.forEach(function(heart) {
  heart.addEventListener("click", function() {
    count++
    totalHeartCount.innerText = count
  })
});

// Call Function
document.addEventListener("DOMContentLoaded", () => {
  const coinsEl = document.getElementById("coins")
  const cardsContainer = document.querySelector(".card-container");
  const historyBox = document.getElementById("box-4");

  if (!coinsEl || !cardsContainer || !historyBox) return

  let coins = parseInt(coinsEl.textContent.trim() || "0", 10);

  function addToHistory(name, number) {
    const item = document.createElement("div");
    item.className =
      "mx-3 bg-[#fafafa] p-2 rounded-lg mt-3 flex items-center justify-between";
    item.innerHTML = `
      <div>
        <p class="madu font-semibold">${name}</p>
        <p class="madu font-extralight text-gray-500">${number}</p>
      </div>
      <div>
        <time>${new Date().toLocaleTimeString()}</time>
      </div>
    `;
    historyBox.appendChild(item);
  }

  cardsContainer.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn || !cardsContainer.contains(btn)) return;

    const isCallBtn =
      btn.querySelector(".fa-phone") ||
      btn.textContent.toLowerCase().includes("call");

    if (!isCallBtn) return;

    if (coins < 20) {
      alert("Not enough coins to make this call. You need at least 20.");
      return;
    }

    const card = btn.closest(".box");
    if (!card) return;

    const serviceName = (card.querySelector("h5")?.textContent || "").trim();
    const serviceNumber = (card.querySelector("p.font-bold")?.textContent || "")
      .trim();

    alert(`Calling ${serviceName} (${serviceNumber})`);

    coins -= 20;
    coinsEl.textContent = coins;

    addToHistory(serviceName, serviceNumber);
  });
});






