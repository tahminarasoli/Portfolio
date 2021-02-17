import {repoDiv} from '../data.js'

export class Repositoires{
    
    id = '';
    name = '';
    url = '';

    constructor(id, name, html_url) {
        this.id = id;
        this.name = name;
        this.url = html_url;
    }


    render(){
        // const repoDiv = document.createElement('div');
        // repoDiv.classList.add('repo-div');
        // repoDiv.style.borderTop = 'solid blue 1px';

        const title = document.createElement('h2');
        title.innerHTML = this.name;
        repoDiv.appendChild(title);

        const id = document.createElement('h2');
        //id.innerHTML = this.id  + '-';
        const anchor = document.createElement('a');
        anchor.href = this.url;
        anchor.textContent = this.id;
        id.appendChild(anchor);
        repoDiv.appendChild(id);

       
        
        return repoDiv;
    }
   
}