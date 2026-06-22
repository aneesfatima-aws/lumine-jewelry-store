const API_URL = "https://fhmwgkwf86.execute-api.us-east-1.amazonaws.com/dev";

document.getElementById("form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    const response = await fetch(API_URL + "/inquiry", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, name, message })
    });

    const result = await response.text();
    alert(result);
});
