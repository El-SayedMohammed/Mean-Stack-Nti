    let username = prompt("Enter your name:");
    let phone = prompt("Enter your phone number:");
    let email = prompt("Enter your email:");

    let phonePattern = /^[0-9]{10,15}$/;
    let emailPattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if (username && phonePattern.test(phone) && emailPattern.test(email)) {
      alert(`Welcome ${username}\nPhone: ${phone}\nEmail: ${email}`);
    } else {
      alert("Please check your information");
    }
