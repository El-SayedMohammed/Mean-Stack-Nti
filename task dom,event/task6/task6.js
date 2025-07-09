const input = document.getElementById("countInput");
const list = document.getElementById("postList");
const btnThen = document.getElementById("btnThen");
const btnAsync = document.getElementById("btnAsync");


btnThen.addEventListener("click", function () {
  const count = Number(input.value);
  if (isNaN(count) || count <= 0) return alert("Enter valid number");

fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${count}`)

    .then(res => res.json())
    .then(data => {
      list.innerHTML = "";
      for (let i = 0; i < count && i < data.length; i++) {
        const li = document.createElement("li");
        li.innerHTML = `
          <h3>${data[i].title}</h3>
          <p>${data[i].body.substring(0, 60)}...</p>
        `;
        list.appendChild(li);
      }
    })
    .catch(err => {
      console.error("Fetch error (then):", err);
    });
});



btnAsync.addEventListener("click", async function () {
  const count = Number(input.value);
  if (isNaN(count) || count <= 0) return alert("Enter valid number");

  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${count}`)

    const data = await res.json();
    list.innerHTML = "";
    for (let i = 0; i < count && i < data.length; i++) {
      const li = document.createElement("li");
      li.innerHTML = `
        <h3>${data[i].title}</h3>
        <p>${data[i].body.substring(0, 60)}...</p>
      `;
      list.appendChild(li);
    }
  } catch (err) {
    console.error("Fetch error (await):", err);
  }
});
