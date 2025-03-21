window.onload = function() {
    const form = document.getElementById('caseForm');
    
    form.addEventListener('submit', function(event) {
      event.preventDefault();  // Prevent default form submission for validation
      
      let isValid = true;  // Variable to track form validity
  
      // Validate Case Number
      const caseNumber = document.getElementById('caseNumber');
      if (caseNumber.value.trim() === '') {
        displayError(caseNumber, 'Case Number is required.');
        isValid = false;
      } else {
        clearError(caseNumber);
      }
  
      // Validate Case Title
      const caseTitle = document.getElementById('caseTitle');
      if (caseTitle.value.trim() === '') {
        displayError(caseTitle, 'Case Title is required.');
        isValid = false;
      } else {
        clearError(caseTitle);
      }
  
      // Validate Case Type
      const caseType = document.getElementById('caseType');
      if (caseType.value === '') {
        displayError(caseType, 'Please select a Case Type.');
        isValid = false;
      } else {
        clearError(caseType);
      }
  
      // Validate Date Filed
      const dateFiled = document.getElementById('dateFiled');
      if (dateFiled.value === '') {
        displayError(dateFiled, 'Date Filed is required.');
        isValid = false;
      } else {
        clearError(dateFiled);
      }
  
      // Validate Plaintiff Name
      const plaintiffName = document.getElementById('plaintiffName');
      if (plaintiffName.value.trim() === '') {
        displayError(plaintiffName, 'Plaintiff Name is required.');
        isValid = false;
      } else {
        clearError(plaintiffName);
      }
  
      // Validate Defendant Name
      const defendantName = document.getElementById('defendantName');
      if (defendantName.value.trim() === '') {
        displayError(defendantName, 'Defendant Name is required.');
        isValid = false;
      } else {
        clearError(defendantName);
      }
  
      // Validate Case Description
      const caseDescription = document.getElementById('caseDescription');
      if (caseDescription.value.trim() === '') {
        displayError(caseDescription, 'Case Description is required.');
        isValid = false;
      } else {
        clearError(caseDescription);
      }
  
      // If form is valid, submit it
      if (isValid) {
        alert("Form submitted successfully!");
        form.submit();  // Only submit the form if it's valid
      }
    });
  };
  
  // Function to display an error message
  function displayError(inputElement, errorMessage) {
    inputElement.style.borderColor = 'red';
    let errorElement = inputElement.nextElementSibling;
    
    if (!errorElement || !errorElement.classList.contains('error-message')) {
      errorElement = document.createElement('span');
      errorElement.classList.add('error-message');
      errorElement.style.color = 'red';
      inputElement.parentNode.appendChild(errorElement);
    }
    
    errorElement.textContent = errorMessage;
  }
  
  // Function to clear the error message
  function clearError(inputElement) {
    inputElement.style.borderColor = '#ccc';
    const errorElement = inputElement.nextElementSibling;
    
    if (errorElement && errorElement.classList.contains('error-message')) {
      errorElement.remove();
    }
  }
  