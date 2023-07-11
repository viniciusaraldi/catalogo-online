async function conectaApi() {
    const req = await fetch("http://localhost:3000/produtos");
    const dados = await req.json();
    return dados;
}

export default conectaApi;