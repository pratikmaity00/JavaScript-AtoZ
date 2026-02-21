const subjectRegex = /^[1-9]\d*$/;
const gpaRegex = /^(10(\.0{1,2})?|[0-9](\.[0-9]{1,2})?)$/;

function fieldValidation(input, regex, requiredMsg, errorMsg) {
  let error = input.parentElement.querySelector(".error-msg");
  let value = input.value.trim();

  // Case 1 : Empty Field
  if (value === "") {
    input.classList.add("border-red-500");
    error.textContent = requiredMsg;
    error.classList.remove("hidden");
    return false;
  }

  // Case 2 : Invalid Field
  if (!regex.test(value)) {
    input.classList.add("border-red-500");
    error.textContent = errorMsg;
    error.classList.remove("hidden");
    return false;
  }

  // Case 3 : Valid
  input.classList.remove("border-red-500");
  error.classList.add("hidden");
  return true;
}

document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("blur", function () {
    if (input.id.includes("sub")) {
      fieldValidation(
        input,
        subjectRegex,
        "Please enter total subjects",
        "Subjects must be a positive number",
      );
    }
    if (input.id.includes("gpa")) {
      fieldValidation(
        input,
        gpaRegex,
        "Please enter CGPA",
        "CGPA must be between 0 and 10",
      );
    }
  });
});

document.querySelector("#btn-cal").addEventListener("click", function (e) {
  e.preventDefault();

  let lsSub = document.getElementById("ls-sub");
  let lsGpa = document.getElementById("ls-gpa");
  let rsSub = document.getElementById("rs-sub");
  let rsGpa = document.getElementById("rs-gpa");

  let isValid = true;

  if (
    !fieldValidation(
      lsSub,
      subjectRegex,
      "Please enter total subjects",
      "Subjects must be positive number",
    )
  ) {
    isValid = false;
  }

  if (
    !fieldValidation(
      lsGpa,
      gpaRegex,
      "Please enter CGPA",
      "CGPA must be between 0 and 10",
    )
  ) {
    isValid = false;
  }

  if (
    !fieldValidation(
      rsSub,
      subjectRegex,
      "Please enter total subjects",
      "Subjects must be positive number",
    )
  ) {
    isValid = false;
  }

  if (
    !fieldValidation(
      rsGpa,
      gpaRegex,
      "Please enter CGPA",
      "CGPA must be between 0 and 10",
    )
  ) {
    isValid = false;
  }

  if (!isValid) return;

  //CALCULATION
  let oddSubCount = Number(lsSub.value);
  let oddGpa = Number(lsGpa.value);
  let evenSubCount = Number(rsSub.value);
  let evenGpa = Number(rsGpa.value);

  // ODD SEM
  let oddPercentage = (oddGpa - 0.75) * 10;
  let oddTotalMarks = oddSubCount * 100;
  let oddObtainedMarks = (oddTotalMarks / 100) * oddPercentage;

  // EVEN SEM
  let evenPercentage = (evenGpa - 0.75) * 10;
  let evenTotalMarks = evenSubCount * 100;
  let evenObtainedMarks = (evenTotalMarks / 100) * evenPercentage;

  let totalMarks = oddTotalMarks + evenTotalMarks;
  let totalObtainedMarks = (oddObtainedMarks + evenObtainedMarks);
  let totalPercentage = ((totalObtainedMarks / totalMarks) * 100);

  let yGpa = (((oddGpa * oddSubCount) + (evenGpa * evenSubCount)) / (oddSubCount + evenSubCount));
//   console.log(totalMarks);
//   console.log(totalObtainedMarks.toFixed(2));
//   console.log(totalPercentage.toFixed(2));
//   console.log(yGpa.toFixed(2));

  let mainDiv = document.querySelector('#calc-div');

  // Remove previous result
  let oldResult = document.getElementById("result-section");
  if (oldResult) oldResult.remove();

  let resultDiv = document.createElement('div');
  resultDiv.id = "result-section";
  resultDiv.innerHTML = `<div class="mt-8 border-t border-t-gray-200 pt-8">
                        <h2 class="text-center text-3xl font-semibold text-gray-700 pb-5">Result</h2>
                        <div class="flex flex-col md:flex-row gap-8 mb-8">
                            <div class="p-4 rounded-xl bg-skyBlue flex-1">
                                <h3 class="text-slate-700 text-lg font-medium">Odd Semester</h3>
                                <p class="text-slate-500">Total Marks: <span class="text-xl text-darkBlue font-bold">${oddTotalMarks}</span></p>
                                <p class="text-slate-500">Obtained Marks: <span class="text-xl text-darkBlue font-bold">${oddObtainedMarks.toFixed(2)}</span></p>
                            </div>
                            <div class="p-4 rounded-xl bg-pink-100 flex-1">
                                <h3 class="text-slate-700 text-lg font-medium">Even Semester</h3>
                                <p class="text-slate-500">Total Marks: <span class="text-xl text-pink-600 font-bold">${evenTotalMarks}</span></p>
                                <p class="text-slate-500">Obtained Marks: <span class="text-xl text-pink-600 font-bold">${evenObtainedMarks.toFixed(2)}</span></p>
                            </div>
                        </div>
                        <div class="flex flex-col md:flex-row gap-8 mb-8">
                            <div class="flex-1 p-5 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600">
                                <p class="text-slate-50 mb-3">Total Obtained Marks</p>
                                <p class="text-4xl font-bold text-white">${totalObtainedMarks.toFixed(2)}</p>
                            </div>
                            <div class="flex-1 p-5 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600">
                                <p class="text-slate-50 mb-3">Total Maximum Marks</p>
                                <p class="text-4xl font-bold text-white">${totalMarks}</p>
                            </div>
                            <div class="flex-1 p-5 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600">
                                <p class="text-slate-50 mb-3">Percentage</p>
                                <p class="text-4xl font-bold text-white">${totalPercentage.toFixed(2)}%</p>
                            </div>
                        </div>
                        <div class="bg-gray-100 rounded-xl p-5">
                            <p class="text-gray-600 text-xl text-start sm:text-center">YGPA : <span class="text-4xl font-bold text-gray-800">${yGpa.toFixed(2)}</span></p>
                        </div>
                    </div>`
  mainDiv.appendChild(resultDiv);
});

// RESET BUTTON
document.querySelector("#res-btn").addEventListener("click", function () {
  // Clear inputs
  document.querySelectorAll("input").forEach((input) => {
    input.value = "";
    input.classList.remove("border-red-500");
  });

  // Hide errors
  document.querySelectorAll(".error-msg").forEach((error) => {
    error.classList.add("hidden");
  });

  // Hide result
  const resultBox = document.getElementById("result");
  if (resultBox) {
    resultBox.classList.add("hidden");
    resultBox.textContent = "";
  }

  // Remove previous result
  let oldResult = document.getElementById("result-section");
  if (oldResult) oldResult.remove();
});
