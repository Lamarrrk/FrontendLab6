const button = document.getElementById("fetchData");
const status = document.getElementById("status");
const userGrid = document.getElementById("userGrid");

button.addEventListener("click", () => {
    status.textContent = "Loading...";
    
    fetch("https://randomuser.me/api/?results=5")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network error" + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            userGrid.innerHTML = "";
            data.results.forEach(user => {
                const userCard = document.createElement("div");
                userCard.className = "user-card";
                userCard.innerHTML = `
                    <img src="${user.picture.large}" alt="Profile Picture">
                    <h3>${user.name.title} ${user.name.first} ${user.name.last}</h3>
                    <p><strong>Gender:</strong> ${user.gender}</p>
                    <p><strong>E-mail:</strong> ${user.email}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                    <p><strong>Address:</strong> ${user.location.city}, ${user.location.country}</p>
                `;
                userGrid.appendChild(userCard);
            });
            status.textContent = "Success!";
        })
});

