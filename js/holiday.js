document.addEventListener('DOMContentLoaded', function() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    let greeting = 'Hello there! 👋';
  
    if (currentMonth === 12 && currentDate.getDate() >= 25) {
      greeting = 'Happy Holidays! 🎄';
    } else if (currentMonth === 1 && currentDate.getDate() === 1) {
      greeting = 'Happy New Year! 🎆';
    }
  
    const greetingElement = document.getElementById('greeting');
    greetingElement.textContent = greeting;
  });