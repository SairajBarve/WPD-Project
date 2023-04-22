function sendMail(){
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,

  };
  const serviceId = "service_2geo2xi";
  const templateId = "template_4n8anla";
  
  emailjs
    .send(serviceId, templateId, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message sent sucessfully");
    })
    .catch((err) => console.log(err));
}