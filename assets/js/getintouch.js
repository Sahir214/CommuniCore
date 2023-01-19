const scriptURL = 'https://script.google.com/macros/s/AKfycbwNU7Sc0rLGw_1qk9CI-74UZPR3Q2Qjh_qaW3X7Lirw-yYWKJQgUOokOpu1hslsZn3_/exec'
    const form = document.forms['get-in-touch']
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
        .catch(error => console.error('Error!', error.message))
        form.reset();
    })