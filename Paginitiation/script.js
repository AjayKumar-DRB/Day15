const totalPages = 100;
let currPage = 50;

function generatePage(){
    const pagination = document.getElementById('buttons');
    pagination.innerHTML = ''

    const firstLink = document.createElement('a');
    firstLink.href = '#page1';
    firstLink.textContent = 'First'
    firstLink.addEventListener("click", () => updatePage(1))
    pagination.append(firstLink);

    const previousLink = document.createElement('a');
    previousLink.href = `#page${currPage - 1}`;
    previousLink.textContent = 'Previous'
    previousLink.addEventListener("click", () => updatePage(currPage - 1))
    pagination.append(previousLink);


    for(let i = currPage - 5; i<= currPage + 5; i++){
        if(i>0 && i<=totalPages){
            const link = document.createElement('a');
            link.href = `#page${i}`
            link.textContent = i;
            link.addEventListener('click', () => updatePage(i))
            if(i === currPage){
                link.classList.add('selected');
            }
            pagination.appendChild(link)
        }
    }

    const nextLink = document.createElement('a');
    nextLink.href = `#page${currPage + 1}`;
    nextLink.textContent = 'Next';
    nextLink.addEventListener("click", () => updatePage(currPage + 1));
    pagination.append(nextLink);

    const lastLink = document.createElement('a');
    lastLink.href = `#page${totalPages}`;
    lastLink.textContent = "Last";
    lastLink.addEventListener("click", () => updatePage(totalPages));
    pagination.append(lastLink);

    getPageData();
}

function updatePage(newPage){
    currPage = newPage;
    generatePage();
}

function getPageData(){
    fetch('data.json')
    .then(response => {        
        return response.json()
    }).then(data => {
        const identification = currPage;
        const name = data[currPage-1].name
        console.log(name)
        const email = data[currPage-1].email

        const tid = document.getElementById('id');
        tid.textContent = `${identification}`;

        const tname = document.getElementById('name');
        tname.textContent = `${name}`;

        const temail = document.getElementById('email');
        temail.textContent = `${email}`;
    })    
}

function handleHashChange() {
    const hash = window.location.hash;
    const hashParts = hash.split('#page');

    if (hashParts[1] > 0 && hashParts[1] <= 100) {
    const newPage = parseInt(hashParts[1]);    
      updatePage(newPage);    
  }
}
  
window.addEventListener('hashchange', handleHashChange);

generatePage();