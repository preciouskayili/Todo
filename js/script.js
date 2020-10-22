document.querySelector('#submitForm').addEventListener('submit', e => {
    e.preventDefault()

    const input = document.querySelector('#input').value;

    document.querySelector('#inner').innerHTML += `
    <div class="row mb-4" id="${input}">
        <div class="col-md-9">
            <li>${input}</li>
        </div>
        <div class="col-md-3">
            <button id="${input}" class="btn btn-danger btn-sm" onclick="document.querySelector('#' + input).classList.add('done')"><i class="fa fa-trash"></i></button>
        </div>
    </div>
    `
    document.querySelector('#submitForm').reset()
})