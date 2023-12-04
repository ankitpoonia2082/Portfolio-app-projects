const APICall = async () => {
  let contact_name = document.getElementById("name");
  let contact_email = document.getElementById("email");
  let contact_no = document.getElementById("contact_no");
  console.log("🚀 ~ file: index.js:5 ~ APICall ~ contact_no:", contact_no.value);

  try {
    const result = await fetch("http://localhost:3000/user", {
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify({
        name: contact_name.value,
        email: contact_email.value,
        contact: contact_no.value,
      }),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json",
      },
    });
    contact_name.value = "";
    contact_email.value = "";
    contact_no.value = '';
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// APICall()
