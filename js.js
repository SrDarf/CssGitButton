function switchgit() {
    const git = document.getElementById('githubicon');
    git.querySelector('p').style.color = 'black';
    git.querySelector('a').style.color = 'black';
}

function resetgit() {
    const git = document.getElementById('githubicon');
    git.querySelector('p').style.color = 'white';
    git.querySelector('a').style.color = 'white';
}

function toggleGitColor(isActive) {
    const git = document.getElementById('githubicon');
    const color = isActive ? 'black' : 'white';
    git.querySelector('p').style.color = color;
    git.querySelector('a').style.color = color;
}
