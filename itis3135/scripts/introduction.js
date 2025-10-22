let courseCount = 5; // Start from 5 since there are 5 prefilled courses

// Load and display user-uploaded image
document.getElementById("pictureUpload").addEventListener("change", () => {
    let img = document.getElementById("pictureUpload").files[0];

    const imageURL = URL.createObjectURL(img);

    let text = "<img src='" + imageURL + "' alt='User Image'>";

    document.getElementById("loadImage").innerHTML = text;
});

// Clear form fields when 'Clear' button is clicked
document
  .querySelector("#clearButton")
  .addEventListener("click", () => {
    // Clear all input fields
    Array.from(document.querySelectorAll("form input")).forEach((input) => {
      input.value = "";
    });
    // Clear image display area
    document.getElementById("loadImage").innerHTML = "";
  });

// Add default image when "Reset" button is clicked
document
  .querySelector("button[type='reset']")
  .addEventListener("click", () => {
    // Clear output container
    document.getElementById("outputContainer").innerHTML = "";
    // Show the form's fieldsets and headings
    Array.from(document.getElementsByTagName("fieldset")).forEach((fieldset) => {
      fieldset.style.display = "flex";
    });
    document.getElementsByTagName("h2")[0].style.display = "block";
    document.getElementsByTagName("h3")[0].style.display = "block";
    document.getElementById("clearButton").style.display = "inline";
    document.querySelector("button[type='submit']").style.display = "inline";
    // Set default image
    let defaultImageURL = "images/self_at_restaraunt.png";
    let text = "<img src='" + defaultImageURL + "' alt='Me at a Mediterranean Restaurant'>";
    document.getElementById("loadImage").innerHTML = text;
});

// Remove course when 'Remove Course' button is clicked
document
  .querySelector("#coursesContainer")
  .addEventListener("click", (event) => {
    if (event.target.classList.contains("removeCourseButton")) {
        // Update IDs and names of subsequent course fieldsets
        for (let i = Number(event.target.parentElement.id.slice(-1)); i < courseCount; i++) {
            const fieldsetToUpdate = document.getElementById("course" + (1 + i));
            console.log("course" + (1 + i));
            fieldsetToUpdate.id = "course" + i;
            fieldsetToUpdate.querySelector("label[for='department" + (1 + i) + "']").htmlFor = "department" + i;
            fieldsetToUpdate.querySelector("label[for='courseNumber" + (1 + i) + "']").htmlFor = "courseNumber" + i;
            fieldsetToUpdate.querySelector("label[for='courseName" + (1 + i) + "']").htmlFor = "courseName" + i;
            fieldsetToUpdate.querySelector("label[for='reasonForTaking" + (1 + i) + "']").htmlFor = "reasonForTaking" + i;
            fieldsetToUpdate.querySelector("input[name='department" + (1 + i) + "']").name = "department" + i;
            fieldsetToUpdate.querySelector("input[name='courseNumber" + (1 + i) + "']").name = "courseNumber" + i;
            fieldsetToUpdate.querySelector("input[name='courseName" + (1 + i) + "']").name = "courseName" + i;
            fieldsetToUpdate.querySelector("input[name='reasonForTaking" + (1 + i) + "']").name = "reasonForTaking" + i;
            fieldsetToUpdate.querySelector("input[id='department" + (1 + i) + "']").id = "department" + i;
            fieldsetToUpdate.querySelector("input[id='courseNumber" + (1 + i) + "']").id = "courseNumber" + i;
            fieldsetToUpdate.querySelector("input[id='courseName" + (1 + i) + "']").id = "courseName" + i;
            fieldsetToUpdate.querySelector("input[id='reasonForTaking" + (1 + i) + "']").id = "reasonForTaking" + i;
        }
        event.target.parentElement.remove();
        courseCount--;
    }
  });

// Add another course input field when 'Add Course' button is clicked
document
  .querySelector("#addCourseButton")
  .addEventListener("click", () => {
    const coursesContainer = document.getElementById("coursesContainer");
    const newCourseInput = document.createElement("fieldset");
    courseCount++;
    newCourseInput.id = "course" + courseCount;
    newCourseInput.innerHTML = `
        <label for="department${courseCount}">Department:</label>
        <input type="text" id="department${courseCount}" name="department${courseCount}" placeholder="Enter course department here" required/>
        <label for="courseNumber${courseCount}">Course Number:</label>
        <input type="text" id="courseNumber${courseCount}" name="courseNumber${courseCount}" placeholder="Enter course number here" required/>
        <label for="courseName${courseCount}">Course Name:</label>
        <input type="text" id="courseName${courseCount}" name="courseName${courseCount}" placeholder="Enter course name here" required/>
        <label for="reasonForTaking${courseCount}">Reason for Taking:</label>
        <input type="text" id="reasonForTaking${courseCount}" name="reasonForTaking${courseCount}" placeholder="Enter reason for taking course here" required/>
        <button type="button" class="removeCourseButton">Remove Course</button>
    `;
    coursesContainer.appendChild(newCourseInput);
  });

// Get introduction information from form data
function getIntroductionInformation() {
    const formData = new FormData(document.getElementsByTagName("form")[0]);
    const introduction = {};
    formData.forEach((value, key) => {
        introduction[key] = value;
    });
    return introduction;
}

// update page to show introduction using form data when 'Submit' button is clicked
document
  .querySelector("button[type='submit']")
  .addEventListener("click", () => {

    // check if all required fields are filled
    requiredInputs = document.querySelectorAll("input[required]");
    for (let input of requiredInputs) {
      if (input.value.trim() === "") {
        alert("Please fill all required fields.");
        return;
      }
    }

    const introduction = getIntroductionInformation();
    // Build the content string with introduction details
    let content = `
        <h2>Introduction</h2>
        <p id="acknowledgement"><em>${introduction.statementOfAcknowledgement} ${introduction.date}</em></p>
        <h2>${introduction.firstName} ${introduction.middleName} ${introduction.preferredName} ${introduction.lastName} ${introduction.divider} ${introduction.mascotAdjective} ${introduction.mascotAnimal}</h2>
        <figure>
            ${document.getElementById("loadImage").innerHTML}
            <figcaption>${introduction.pictureCaption}</figcaption>
        </figure>
        <ul>
            <li><b>Personal Background:</b> ${introduction.personalBackground}</li>
            <li><b>Professional Background:</b> ${introduction.professionalBackground}</li>
            <li><b>Academic Background:</b> ${introduction.academicBackground}</li>
            <li>
                <b>Courses I'm Taking, & Why:</b>
                <ol>
    `;
    // Append courses
    document.querySelectorAll("#coursesContainer fieldset").forEach((courseFieldset) => {
        let id = courseFieldset.id.slice(-1);
        const department = courseFieldset.querySelector("input[name='department" + id + "']").value;
        const courseNumber = courseFieldset.querySelector("input[name='courseNumber" + id + "']").value;
        const courseName = courseFieldset.querySelector("input[name='courseName" + id + "']").value;
        const reasonForTaking = courseFieldset.querySelector("input[name='reasonForTaking" + id + "']").value;
        content += `<li><b>${department} ${courseNumber} - ${courseName}:</b> ${reasonForTaking}</li>`;
    });
    content += `
                </ol>
            </li>
    `;

    // Only include the "funnyItem" if it is not empty
    if (introduction.funnyItem !== undefined && introduction.funnyItem !== null && introduction.funnyItem !== "") {
        content += `<li><b>Funny/Interesting Item to Remember Me by:</b> ${introduction.funnyItem}</li>`;
    }
    // Only include the "share" item if it is not empty
    if (introduction.share !== undefined && introduction.share !== null && introduction.share !== "") {
        content += `<li><b>Something I would like to share:</b> ${introduction.share}</li>`;
    }
    // Close the unordered list and add the quote
    content += `
        </ul>
        <blockquote>"${introduction.quote}"</blockquote>
        <cite>— ${introduction.quoteAuthor}</cite>
    `;

    // Hide everything but the reset button and output container
    Array.from(document.getElementsByTagName("fieldset")).forEach((fieldset) => {
      fieldset.style.display = "none";
    });
    document.getElementsByTagName("h2")[0].style.display = "none";
    document.getElementsByTagName("h3")[0].style.display = "none";
    document.getElementById("clearButton").style.display = "none";
    document.querySelector("button[type='submit']").style.display = "none";

    // Update the output container with the introduction content
    document.getElementById("outputContainer").innerHTML = content;
  });

// prevents page refresh / default behavior on form submission
document.getElementsByTagName("form")[0].addEventListener("submit", (e) => {e.preventDefault();});
