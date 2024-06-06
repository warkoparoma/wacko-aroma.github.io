document.addEventListener("DOMContentLoaded", function () {
    const xhr = new XMLHttpRequest();
    let runningCardPatch = "running-card.html"
    xhr.open("GET", runningCardPatch, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("run-card-side").innerHTML = xhr.responseText;
        }
    };
    xhr.send();
});
document.addEventListener("DOMContentLoaded", function () {
    const xhr = new XMLHttpRequest();
    let runningCardPatch = "running-card-right.html"
    xhr.open("GET", runningCardPatch, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("run-card-side-right").innerHTML = xhr.responseText;
        }
    };
    xhr.send();
});
document.addEventListener("DOMContentLoaded", function () {
    const xhr = new XMLHttpRequest();
    let runningCardPatch = "running-card-snack.html"
    xhr.open("GET", runningCardPatch, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("running-card-snack").innerHTML = xhr.responseText;
        }
    };
    xhr.send();
});




var visitorData = {
    visitor: 0
};

// document.addEventListener("DOMContentLoaded", function () {
//     visitorData.visitor += 1;  // Increment the visitor count
//     document.getElementById('visitor-count').textContent = visitorData.visitor;  // Update the visitor count display
// });
document.addEventListener("DOMContentLoaded", function () {
    // Retrieve the visitor count from localStorage, or initialize to 0 if it doesn't exist
    var visitorCount = localStorage.getItem('visitorCount');
    if (visitorCount === null) {
        visitorCount = 0;
    } else {
        visitorCount = parseInt(visitorCount);
    }
    visitorCount += 1;
    localStorage.setItem('visitorCount', visitorCount);
    document.getElementById('visitor-count').textContent = visitorCount;
});

// document.addEventListener('DOMContentLoaded', (event) => {
//     let jsonObject = {};

//     const newKeyInput = document.getElementById('newKey');
//     const newValueInput = document.getElementById('newValue');
//     const appendButton = document.getElementById('appendButton');
//     const saveButton = document.getElementById('saveButton');
//     const jsonDisplay = document.getElementById('jsonDisplay');

//     appendButton.addEventListener('click', () => {
//         const newKey = newKeyInput.value;
//         const newValue = newValueInput.value;

//         if (newKey && newValue) {
//             jsonObject[newKey] = newValue;
//             newKeyInput.value = '';
//             newValueInput.value = '';
//             updateJsonDisplay();
//         } else {
//             alert('Please enter both a key and a value.');
//         }
//     });

//     saveButton.addEventListener('click', () => {
//         saveJsonToFile();
//     });

//     function updateJsonDisplay() {
//         jsonDisplay.textContent = JSON.stringify(jsonObject, null, 2);
//     }

//     function saveJsonToFile() {
//         const jsonBlob = new Blob([JSON.stringify(jsonObject, null, 2)], { type: 'application/json' });
//         const url = URL.createObjectURL(jsonBlob);
//         const a = document.createElement('a');
//         a.href = url;
//         a.download = 'data.json';
//         document.body.appendChild(a);
//         a.click();
//         document.body.removeChild(a);
//         URL.revokeObjectURL(url);
//     }
// });
