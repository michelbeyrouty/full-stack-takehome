export default async function handleHelloWorld() {
    const response = await fetch("/api/example", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: Math.floor(1 + Math.random() * 9) }),
    });

    const jsonResponse = await response.json();

    return jsonResponse.favorite
}
