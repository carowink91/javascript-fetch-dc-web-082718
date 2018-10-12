const app = "I don't do much.";

a87c48a889b13ba0d17a26abacbbc3daa3575b7f

const token = 'a87c48a889b13ba0d17a26abacbbc3daa3575b7f'

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json))
