function Deposit(){
    return (
      <h1>Deposit</h1>
    )
  }
  document.addEventListener('DOMContentLoaded', function () {
    // Create and append the stylesheet link for Bootstrap
    let link = document.createElement('link');
    link.href = 'https://stackpath.bootstrapcdn.com/bootstrap/5.2.1/css/bootstrap.min.css';
    link.rel = 'stylesheet';
    link.integrity = 'sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  
    // Create style tag for custom styles
    let style = document.createElement('style');
    style.innerHTML = `
      .card {
        max-width: 400px;
        margin: 50px auto;
        padding: 20px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      }
    `;
    document.head.appendChild(style);
  
    // Create container div
    let container = document.createElement('div');
    container.className = 'container';
  
    // Create card div
    let card = document.createElement('div');
    card.className = 'card';
  
    // Create card title
    let cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.innerText = 'Deposit';
  
    // Create balance info div
    let balanceInfo = document.createElement('div');
    balanceInfo.id = 'balanceInfo';
    balanceInfo.className = 'mb-3';
    balanceInfo.innerHTML = 'Balance: $<span id="balance">1000</span>';
  
    // Create form element
    let form = document.createElement('form');
    form.id = 'depositForm';
  
    // Create form group div
    let formGroup = document.createElement('div');
    formGroup.className = 'form-group';
  
    // Create label element
    let label = document.createElement('label');
    label.setAttribute('for', 'depositAmount');
    label.innerText = 'Deposit Amount';
  
    // Create input element
    let input = document.createElement('input');
    input.type = 'number';
    input.className = 'form-control';
    input.id = 'depositAmount';
    input.placeholder = 'Enter deposit amount';
    input.required = true;
  
    // Create submit button
    let button = document.createElement('button');
    button.type = 'submit';
    button.className = 'btn btn-primary';
    button.id = 'depositBtn';
    button.disabled = true;
    button.innerText = 'Deposit';
  
    // Create messages div
    let messages = document.createElement('div');
    messages.id = 'messages';
    messages.className = 'mt-3';
  
    // Append elements to form group
    formGroup.appendChild(label);
    formGroup.appendChild(input);
  
    // Append form group and button to form
    form.appendChild(formGroup);
    form.appendChild(button);
  
    // Append card title, balance info, form, and messages to card
    card.appendChild(cardTitle);
    card.appendChild(balanceInfo);
    card.appendChild(form);
    card.appendChild(messages);
  
    // Append card to container
    container.appendChild(card);
  
    // Append container to body
    document.body.appendChild(container);
  
    // Load jQuery and Bootstrap JS
    let jqueryScript = document.createElement('script');
    jqueryScript.src = 'https://code.jquery.com/jquery-3.5.1.slim.min.js';
    document.body.appendChild(jqueryScript);
  
    let popperScript = document.createElement('script');
    popperScript.src = 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js';
    document.body.appendChild(popperScript);
  
    let bootstrapScript = document.createElement('script');
    bootstrapScript.src = 'https://stackpath.bootstrapcdn.com/bootstrap/5.2.1/js/bootstrap.min.js';
    document.body.appendChild(bootstrapScript);
  
    // Wait for jQuery to load before adding event listeners
    jqueryScript.onload = function () {
      $(document).ready(function () {
        // Initialize balance
        let balance = 1000; // Initial balance
  
        // Update balance display function
        function updateBalance(amount) {
          balance += amount;
          $('#balance').text(balance.toFixed(2)); // Update balance with 2 decimal places
        }
  
        // Deposit form submission handling
        $('#depositForm').submit(function (event) {
          event.preventDefault();
          let depositAmount = parseFloat($('#depositAmount').val());
  
          if (isNaN(depositAmount)) {
            $('#messages').html('<div class="alert alert-danger" role="alert">Please enter a valid number for deposit amount.</div>');
          } else if (depositAmount < 0) {
            $('#messages').html('<div class="alert alert-danger" role="alert">Please enter a positive number for deposit amount.</div>');
          } else {
            updateBalance(depositAmount);
            $('#messages').html('<div class="alert alert-success" role="alert">Deposit successful! Your new balance is $' + balance.toFixed(2) + '.</div>');
            $('#depositAmount').val(''); // Clear input field
            $('#depositBtn').prop('disabled', true); // Disable button again
          }
        });
  
        // Enable/disable deposit button based on input presence
        $('#depositAmount').on('input', function () {
          $('#messages').html(''); // Clear previous messages
          if ($(this).val().trim() !== '') {
            $('#depositBtn').prop('disabled', false);
          } else {
            $('#depositBtn').prop('disabled', true);
          }
        });
      });
    };
  });
  