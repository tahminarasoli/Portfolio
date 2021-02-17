import {clear} from '../data.js'
import {Repositoires} from '../classes/repos.js'

export async function listIssues(event){
    clear();
const repoName = event.target.form.repoName.value;
const url = 'https://api.github.com/search/issues?q=author:tahminarasoli%20repo:tahminarasoli/'+repoName;
const response = await fetch(url);
const result = await response.json();
console.log(result);
result.items.forEach(i => {
    const newRepo = new Repositoires(i.id, i.title, i.html_url);
    console.log(i.name);
    const renderRepo = newRepo.render();
    //console.log(renderRepo)
    const view = document.getElementById('root')
    view.appendChild(renderRepo);
})
}