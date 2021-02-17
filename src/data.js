'use strict';

export const repoDiv = document.createElement('div');
        repoDiv.classList.add('repo-div');
       // repoDiv.style.borderTop = 'solid blue 1px';

export function  clear(){
    //by cleaning this field after text entered there will be nothing to get by listIssue handler.
    //document.querySelector('#repoName').value = '';
    while(repoDiv.firstChild)
        repoDiv.removeChild(repoDiv.firstChild);
        

}