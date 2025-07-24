document.addEventListener("DOMContentLoaded", () => {
  const moodButtons = document.querySelectorAll(".mood-btn");
  const todayMood = document.getElementById("todayMood");
  const moodHistory = document.getElementById("moodHistory");

  const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

  let moodLog = JSON.parse(localStorage.getItem("moodLog")) || {};

  function updateUI() {
    todayMood.innerText = moodLog[today] || "No mood selected yet.";
    moodHistory.innerHTML = "";

    for (let date in moodLog) {
      let li = document.createElement("li");
      li.textContent = `${date}: ${moodLog[date]}`;
      moodHistory.appendChild(li);
    }
  }

  moodButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const mood = btn.dataset.mood;
      moodLog[today] = mood;
      localStorage.setItem("moodLog", JSON.stringify(moodLog));
      updateUI();
    });
  });

  updateUI();
});
