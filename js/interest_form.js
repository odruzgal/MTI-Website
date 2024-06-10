//displays thank you message on interest form
document.getElementById('interestForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('emailInput').value;
    console.log('Email submitted:', email);
    document.getElementById('emailInput').value = '';
    document.getElementById('message').innerText = 'Thank you for subscribing!';
  });