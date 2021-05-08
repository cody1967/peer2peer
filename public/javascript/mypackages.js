function myPackagesHandler(event) {
    event.preventDefault();
    const client_id = document.getElementById("client-id").textContent;
    document.location.replace(`/clients/${client_id}`)
  }
  
  
  const myPackages = document.querySelector('#my-packages');
  myPackages.addEventListener('click', myPackagesHandler)