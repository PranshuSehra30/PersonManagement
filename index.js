const getData = async () => {
  const url =
    "https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09";
  const d = await fetch(url);
  const data = await d.json();
  let container = document.getElementById("container");
  for (let element of data) {
    let child = document.createElement("div");
    let address = element.address;
    child.innerHTML = `
      <div class="card" style="width: 30rem;">
          <div class="card-body">
              <h5 class="card-title">${element.name}</h5>
              <h6 class="card-subtitle mb-2">${element.username}</h6>
              <h6 class="card-subtitle mb-2 text-muted">${element.email}</h6>
              <p class="card-text">${
                address.street +
                " " +
                address.suite +
                ", " +
                address.city +
                " " +
                address.zipcode
              }</p>
              <h6 class="card-subtitle mb-2">${element.phone}</h6>
              <a target="_blank"  href=${
                "https://" + element.website
              } class="card-link">Website</a>
              <a href="#" class="card-link">Another link</a>
          </div>
      </div>
      `;
    container.appendChild(child);
  }
};

getData();
