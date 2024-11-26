async function pushEvents() {
    const response = await fetch("https://api.github.com/users/BUEL171/events")
    return await response.json()
}

export { pushEvents }