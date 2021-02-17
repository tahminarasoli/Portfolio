import {clear} from '../data.js'

import {Repositoires} from '../classes/repos.js'
const repoIDs = [
    336342910,
    299916508,
    302087800,
    332699466,
    304665992,
    317791499,
    309647439,
    335636967
]
export async function listRepos() {
    clear();
     //const repoName = event.target.form.repoName.value;
    //const url = 'https://api.github.com/users/tahminarasoli/'+ repoName;
    const response = await fetch('https://api.github.com/users/tahminarasoli/repos');
    const result = await response.json();
    console.log(result);
    result.forEach((i) => {
        if(!repoIDs.includes(i.id)){
            return;
        }
      const newRepo = new Repositoires(i.id, i.name, i.html_url);
        console.log(i.name);
        
        const renderRepo = newRepo.render();
        //console.log(renderRepo)
        const view = document.getElementById('root')
        view.appendChild(renderRepo);
        
    });

}


