const BASE_URL = "https://herokuapp.com/authenticator/login"

    (async () => {
        const rawResponse = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ a: 1, b: 'Textual content' })
        });
        const content = await rawResponse.json();
        const root = document.getElementById("root")
        root.innerHTML = JSON.stringify(content)

        console.log(content);
    })();