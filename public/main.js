
const updateButton = document.querySelector('#update-button')
const deleteButton = document.querySelector('#delete-button')

deleteButton.addEventListener('click', _ =>{
    fetch('/quotes', {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Darth Vadar'
      })
    })
      .then(res => {
        if (res.ok) return res.json()
      })
      .then(data => {
        window.location.reload()
      })
  })
  

updateButton.addEventListener('click', _ => {
    fetch('/quotes', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Darth Vadar',
        quote: 'I find your lack of faith disturbing.'
      })
    })
  })
  quotesCollection.findOneAndUpdateOne(
    { name: 'Yoda' },
    {
      $set: {
        name: req.body.name,
        quote: req.body.quote
      }
    },
    {
      upsert: true
    }
  )
    .then(result => {/* ... */})
    .catch(error => console.error(error)).

    fetch({})
    .then(res => {
      if (res.ok) return res.json()
    })
    .then(response => {
      window.location.reload(true)
    })
    const messageDiv = document.querySelector('#message')

deleteButton.addEventListener('click', _ => {
  fetch(/* ... */)
    .then(/* ... */)
    .then(response => {
      if (response === 'No quote to delete') {
        messageDiv.textContent = 'No Darth Vadar quote to delete'
      } else {
        window.location.reload(true)
      }
    })
    .catch(/* ... */)
})