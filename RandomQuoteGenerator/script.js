const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const tagSelect = document.getElementById("tag-select");

async function fetchQuote(tag) {
  let url = "https://api.quotable.io/random";
  if (tag) url += `?tags=${tag}`;
  const response = await fetch(url);
  const data = await response.json();
  quote.innerText = data.content;
  author.innerText = data.author;
}

newQuoteBtn.addEventListener("click", () => fetchQuote(tagSelect.value));

fetchQuote("");
