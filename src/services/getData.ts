
export async function getData() {
    const response = await fetch("/data.json");

    if(!response) throw new Error("could not load data");

    return response.json();
}