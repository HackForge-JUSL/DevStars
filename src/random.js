function generateRandomWord() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
  
    for (let i = 0; i < 5; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  
    return result;
  }

  // Example Usage
 function generateRandomNumber() {
    const min = 100000; // Smallest 6-digit number
    const max = 999999; // Largest 6-digit number
    return (Math.floor(Math.random() * (max - min + 1)) + min).toString();
  }
  module.exports={generateRandomWord, generateRandomNumber};
  // Example Usage
