/** @type {HTMLTextAreaElement | null} */
const textarea = document.querySelector("#ta1");
const error = document.querySelector("#error");
let jsonError = false;
if (textarea && error) {
  textarea.addEventListener("input", () => {
    error.innerHTML = "";
    jsonError = false;
    try {
      JSON.parse(textarea.value);
    } catch (/** @type {any} */ e) {
      jsonError = true;
      error.innerHTML = e.message;
    }
  });
  const button = document.querySelector("button");
  if (button)
    button.addEventListener("click", () => {
      if (jsonError) return alert("fix json error before prettifying");
      textarea.value = JSON.stringify(JSON.parse(textarea.value), null, 2);
    });
  else console.error("button html element missing");
} else console.error("textarea and/or #error html element(s) missing");
