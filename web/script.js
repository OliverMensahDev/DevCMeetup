let studentsPlaceholder = document.getElementById("students");

fetch("https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-05c61485-1223-4a2c-a95f-0794f20a99b2/cloud/getStudents")
    .then(response => response.json())
    .then(body => {
        body.forEach(element => {
            let cardDiv = document.createElement('div');
            cardDiv.className = "card";
            cardDiv.style = "width: 18rem;"

            let cardImage = document.createElement('img');
            cardImage.src = element.pic
            cardImage.className = "card-img-top"

            let cardDetails = document.createElement('div');
            cardDetails.className = "card-body"

            let cardDetailsTitle = document.createElement('h5')
            cardDetailsTitle.innerHTML = element.name
            cardDetailsTitle.className = "card-title"

            let cardDetailsDescription = document.createElement('p')
            cardDetailsDescription.innerHTML = element.bio
            cardDetailsDescription.className = "card-text"

            let cardDetailsAction = document.createElement('a')
            cardDetailsAction.href = "#"
            cardDetailsAction.className = "btn btn-primary"
            cardDetailsAction.innerHTML = "View Details"

            cardDetails.appendChild(cardDetailsTitle)
            cardDetails.appendChild(cardDetailsDescription)
            cardDetails.appendChild(cardDetailsAction)

            cardDiv.appendChild(cardImage)
            cardDiv.appendChild(cardDetails)

            studentsPlaceholder.append(cardDiv)
        });

    })