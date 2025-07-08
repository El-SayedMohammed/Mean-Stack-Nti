
let namePattern = /^[a-zA-Z]{3,}$/;
let phonePattern = /^\d{11}$/;
let emailPattern = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;

while (true) {
  let name, phone, email;

  while (true) {
    name = prompt("Enter your name ");
    if (namePattern.test(name)) break;
    alert("Invalid name. Only letters allowed");
  }

  while (true) {
    phone = prompt("Enter your phone number (11 digits):");
    if (phonePattern.test(phone)) break;
    alert("Invalid phone number.");
  }

  while (true) {
    email = prompt("Enter your email address:");
    if (emailPattern.test(email)) break;
    alert("Invalid email");
  }

  alert(`Welcome!\nName: ${name}\nPhone: ${phone}\nEmail: ${email}`);

}
