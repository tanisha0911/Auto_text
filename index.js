const containerEl = document.querySelector(".container");
const careers = ["STUDENT", "DEVELOPER", "TECH ENTHUSIAST", "EXPLORER "];
let careerIndex = 0;
let characterIndex = 0;
updateText();
function updateText() {
  characterIndex++;
  const article = ["A", "E", "I", "O", "U"].includes(
    careers[careerIndex].slice(0, 1)
  )
    ? "AN"
    : "A";
  containerEl.innerHTML = `
<h1>I AM ${article} ${careers[careerIndex].slice(0, characterIndex)}</h1>
`;
  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }
  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 400);
}
