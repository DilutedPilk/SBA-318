const URL = "http://localhost:3000"

async function getLoggedIn() {
    const response = await fetch(`${URL}/content/`)
    try {
        const result = await response.json();
        return result
    } catch (error) {
        console.error(error.message);
    }
}

async function getDocuments() {
    const response = await fetch(`${URL}/documents/`)
    try {
        const result = await response.json();
        return result
    } catch (error) {
        console.error(error.message);
    }
}

async function displayDocs() {

    const loggedUser = await getLoggedIn();
    const documents = await getDocuments();
    const userDocs = documents.filter((d)=>d.user_id == loggedUser.id)

    console.log(loggedUser)
    console.log(userDocs)

    userDocs.forEach((e)=>{
        const doc = document.createElement('div')
        doc.id = 'doc'
        const title = document.createElement('h3')
        title.textContent = `${e.title}`
        const para = document.createElement('p')
        para.textContent = `${e.body}`
        const editBtn = document.createElement('button')
        editBtn.textContent = `Edit`
        const delBtn = document.createElement('button')
        delBtn.textContent = `Delete`
        delBtn.id=`${e.doc_id}`
        content.appendChild(doc)
        doc.appendChild(title)
        doc.appendChild(para)
        doc.appendChild(editBtn)
        doc.appendChild(delBtn)
        content.appendChild(document.createElement('hr'))
    })
}

displayDocs()

const new_doc = document.getElementById('docs')

new_doc.addEventListener('click', async (e) => {
    
    if (e.target==btn){
        const inputs = signUp.getElementsByTagName('input')
        const title = inputs.title.value
        const user = inputs.body.value


    }
})