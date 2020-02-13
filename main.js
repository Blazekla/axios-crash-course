// GET REQUEST
function getTodos() {
  //axios get method
  //   axios({
  //     method: "get",
  //     url: "https://jsonplaceholder.typicode.com/todos"
  //   })
  //     .then(json => console.log(json.data[0]))
  //     .catch(err => console.log(err));
  axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then(res => showOutput(res))
    .catch(err => console.log(err));
  console.log("GET Request");

  //   fetch("https://jsonplaceholder.typicode.com/todos/1")
  //     .then(response => response.json())
  //     .then(json => console.log(json));

  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then(response => {
  //       console.log("fetch response result:");
  //       console.log(response);
  //       return response.json();
  //     })
  //     .then(json => {
  //       console.log("fetch json result: ");
  //       console.log(json[0]);
  //     });
}

// POST REQUEST
function addTodo() {
  console.log("POST Request");
}

// PUT/PATCH REQUEST
function updateTodo() {
  console.log("PUT/PATCH Request");
}

// DELETE REQUEST
function removeTodo() {
  console.log("DELETE Request");
}

// SIMULTANEOUS DATA
function getData() {
  console.log("Simultaneous Request");
}

// CUSTOM HEADERS
function customHeaders() {
  console.log("Custom Headers");
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  console.log("Transform Response");
}

// ERROR HANDLING
function errorHandling() {
  console.log("Error Handling");
}

// CANCEL TOKEN
function cancelToken() {
  console.log("Cancel Token");
}

//INTERCEPTING REQUESTS AND RESPONSES

//AXIOS INSTANCES

//Show output in browser

function showOutput(res) {
  document.getElementById("res").innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
}

// Event listeners
document.getElementById("get").addEventListener("click", getTodos);
document.getElementById("post").addEventListener("click", addTodo);
document.getElementById("update").addEventListener("click", updateTodo);
document.getElementById("delete").addEventListener("click", removeTodo);
document.getElementById("sim").addEventListener("click", getData);
document.getElementById("headers").addEventListener("click", customHeaders);
document
  .getElementById("transform")
  .addEventListener("click", transformResponse);
document.getElementById("error").addEventListener("click", errorHandling);
document.getElementById("cancel").addEventListener("click", cancelToken);
