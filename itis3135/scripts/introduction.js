let courseCount = 5; // Start from 5 since there are 5 prefilled courses

// prevents page refresh / default behavior on form submission
document.getElementsByTagName("form")[0].addEventListener("submit", (e) => {e.preventDefault();});

// LOAD and display user-uploaded IMAGE
document.getElementById("pictureUpload").addEventListener("change", () => {
    let img = document.getElementById("pictureUpload").files[0];

    const imageURL = URL.createObjectURL(img);

    let text = "<img src='" + imageURL + "' alt='User Image'>";

    document.getElementById("loadImage").innerHTML = text;
});

// CLEAR form when 'Clear' button is clicked
document
  .querySelector("#clearButton")
  .addEventListener("click", () => {
    // Clear all input fields
    Array.from(document.querySelectorAll("form input")).forEach((input) => {
      input.value = "";
    });
    // Clear image display area
    document.getElementById("loadImage").innerHTML = "";
    // Clear courses
    document.getElementById("coursesContainer").innerHTML = "";
    courseCount = 0;
  });

// RESET form when 'Reset' button is clicked
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
    // Add default courses and reset course count
    document.getElementById("coursesContainer").innerHTML = `
      <!-- Prefilled Courses: -->
      <!-- Course 1: -->
      <fieldset id="course1">
          <label for="department1">Department:</label>
          <input type="text" id="department1" name="department1" placeholder="Enter course department here" value="STAT" required/>
          
          <label for="courseNumber1">Course Number:</label>
          <input type="text" id="courseNumber1" name="courseNumber1" placeholder="Enter course number here" value="2122" required/>
          
          <label for="courseName1">Course Name:</label>
          <input type="text" id="courseName1" name="courseName1" placeholder="Enter course name here" value="Intro to Prob & Stat" required/>
          
          <label for="reasonForTaking1">Reason for Taking:</label>
          <input type="text" id="reasonForTaking1" name="reasonForTaking1" placeholder="Enter reason for taking course here" value="Required course." required/>
          
          <button type="button" class="removeCourseButton">Remove Course</button>
      </fieldset>
      <!-- Course 2: -->
      <fieldset id="course2">
          <label for="department2">Department:</label>
          <input type="text" id="department2" name="department2" placeholder="Enter course department here" value="ITIS" required/>
          
          <label for="courseNumber2">Course Number:</label>
          <input type="text" id="courseNumber2" name="courseNumber2" placeholder="Enter course number here" value="3135" required/>
          
          <label for="courseName2">Course Name:</label>
          <input type="text" id="courseName2" name="courseName2" placeholder="Enter course name here" value="Front-End Web Application Development" required/>
          
          <label for="reasonForTaking2">Reason for Taking:</label>
          <input type="text" id="reasonForTaking2" name="reasonForTaking2" placeholder="Enter reason for taking course here" value="I wanted to learn more about front-end web development. I've only touched the basics and I'm excited to learn more." required/>
          
          <button type="button" class="removeCourseButton">Remove Course</button>
      </fieldset>
      <!-- Course 3: -->
      <fieldset id="course3">
          <label for="department3">Department:</label>
          <input type="text" id="department3" name="department3" placeholder="Enter course department here" value="ITSC" required/>
          
          <label for="courseNumber3">Course Number:</label>
          <input type="text" id="courseNumber3" name="courseNumber3" placeholder="Enter course number here" value="2181" required/>
          
          <label for="courseName3">Course Name:</label>
          <input type="text" id="courseName3" name="courseName3" placeholder="Enter course name here" value="Introduction to Computer Systems" required/>
          
          <label for="reasonForTaking3">Reason for Taking:</label>
          <input type="text" id="reasonForTaking3" name="reasonForTaking3" placeholder="Enter reason for taking course here" value="Required Course. However, I'm still looking forward to it." required/>
          
          <button type="button" class="removeCourseButton">Remove Course</button>
      </fieldset>
      <!-- Course 4: -->
      <fieldset id="course4">
          <label for="department4">Department:</label>
          <input type="text" id="department4" name="department4" placeholder="Enter course department here" value="ARTA" required/>
          
          <label for="courseNumber4">Course Number:</label>
          <input type="text" id="courseNumber4" name="courseNumber4" placeholder="Enter course number here" value="1502" required/>
          
          <label for="courseName4">Course Name:</label>
          <input type="text" id="courseName4" name="courseName4" placeholder="Enter course name here" value="Global Arts/Humanities: Art in a Global Context" required/>
          
          <label for="reasonForTaking4">Reason for Taking:</label>
          <input type="text" id="reasonForTaking4" name="reasonForTaking4" placeholder="Enter reason for taking course here" value="I needed a class to fulfill one of the Theme requirements for my major. I thought it would be easy and I hope I will find it somewhat interesting." required/>
          
          <button type="button" class="removeCourseButton">Remove Course</button>
      </fieldset>
      <!-- Course 5: -->
      <fieldset id="course5">
          <label for="department5">Department:</label>
          <input type="text" id="department5" name="department5" placeholder="Enter course department here" value="MUSC" required/>
          
          <label for="courseNumber5">Course Number:</label>
          <input type="text" id="courseNumber5" name="courseNumber5" placeholder="Enter course number here" value="1512" required/>
          
          <label for="courseName5">Course Name:</label>
          <input type="text" id="courseName5" name="courseName5" placeholder="Enter course name here" value="Local Arts/Humanities: Music in U.S. Communities" required/>
          
          <label for="reasonForTaking5">Reason for Taking:</label>
          <input type="text" id="reasonForTaking5" name="reasonForTaking5" placeholder="Enter reason for taking course here" value="Same as ARTA 1502. I needed one more class to fulfill my Theme requirements for my major." required/>
          
          <button type="button" class="removeCourseButton">Remove Course</button>
      </fieldset>
    `;
    courseCount = 5;
});

// REMOVE COURSE when 'Remove Course' button is clicked
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

// ADD COURSE input field when 'Add Course' button is clicked
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

// LOAD INTRODUCTION using form data when 'Submit' button is clicked
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

    // get introduction information from form data
    const formData = new FormData(document.getElementsByTagName("form")[0]);
    const introduction = {};
    formData.forEach((value, key) => {
        introduction[key] = value;
    });
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