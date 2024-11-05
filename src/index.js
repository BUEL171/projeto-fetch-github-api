document.getElementById("btn-search").addEventListener("click", () => {
    const userName = document.getElementById("input-search").value
    getUserProfile(userName)
})

async function user(userName) {
    const response = await fetch(`https://api.github.com/users/${userName}`)
    return await response.json()
}

function getUserProfile(userName) {
    user(userName).then(userData => {
        let userinfo = `<img src="${userData.avatar_url}" alt="Foto do perfil do usuario" />
                        <div class="data">
                            <h1>${userData.name ?? 'Nao possui nome cadastrado'}</h1>
                            <p>${userData.bio ?? 'Nao possui bio cadastrada'}</p>
                        </div>`
        document.querySelector('.profile-data').innerHTML = userinfo
    })
}