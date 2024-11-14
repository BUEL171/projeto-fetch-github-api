import { user } from "/src/scripts/services/user.js"
import { repositories } from "/src/scripts/services/repositories.js"

document.getElementById("btn-search").addEventListener("click", () => {
    const userName = document.getElementById("input-search").value
    getUserProfile(userName)
})

document.getElementById("input-search").addEventListener("keyup", (e) => {
    const username = e.target.value
    const key = e.which || e. keyCode
    const isEnterKeyPressed = key === 13

    if (isEnterKeyPressed) {
        getUserProfile(username)
    }
})

function getUserProfile(userName) {
    user(userName).then(userData => {
        let userinfo = `<div class="info">
                            <img src="${userData.avatar_url}" alt="Foto do perfil do usuario" />
                                <div class="data">
                                    <h1>${userData.name ?? 'Nao possui nome cadastrado'}</h1>
                                    <p>${userData.bio ?? 'Nao possui bio cadastrada'}</p>
                                </div>
                        </div>`
        document.querySelector('.profile-data').innerHTML = userinfo

        getUserRepositories(userName)
    })
}

function getUserRepositories(userName){
    repositories(userName).then(reposData => {
        let repositoriesItens = ""

        reposData.forEach(repo => {
            repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`
        });

        document.querySelector(".profile-data").innerHTML += `<div class="repositories section">
                                                                <h2>Repositorios</h2>
                                                                <ul>${repositoriesItens}</ul>
                                                              </div>`
    })
}