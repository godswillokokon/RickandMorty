window.onload = function() {
  function getCharacter() {
    fetch("https://rickandmortyapi.com/api/character")
      .then(response => {
        return response.json();
      })
      .then(data => {
        var results = data.results;
        var page = data.info;
        let output = "";
        for (let item of results) {
          output += `
          <div class="col-xs-6 col-sm-4 col-md-4">
            <div class="card bg-dark text-white mb-3" style="color:#333;">
                  <img class="card-img-top" src="${
                    item.image
                  }" alt="Image not Found">
                  <div class="card-body">
                      <div class="card-title">
                          <strong> ${item.name}</strong>
                      </div>
                      <div href="#" class="list-group-item list-group-item-action list-group-item-dark bg-dark">
                        <div class="d-flex w-100 justify-content-between">
                          <small class="mb-1 text-white">Species</small>
                          <small class="mb-1 text-warning">${item.species}</small>
                        </div>
                      </div>


                      <div href="#" class="list-group-item list-group-item-action list-group-item-dark bg-dark">
                        <div class="d-flex w-100 justify-content-between">
                          <small class="mb-1 text-white">Gender</small>
                          <small class="mb-1 text-warning">${item.gender}</small>
                        </div>
                      </div>

                      <div href="#" class="list-group-item list-group-item-action list-group-item-dark bg-dark">
                        <div class="d-flex w-100 justify-content-between">
                          <small class="mb-1 text-white">Status</small>
                          <small class="mb-1 text-warning">${item.status}</small>
                        </div>
                      </div>

                      <div href="#" class="list-group-item list-group-item-action list-group-item-dark bg-dark">
                        <div class="d-flex w-100 justify-content-between">
                          <small class="mb-1 text-white">Location</small>
                          <small class="mb-1 text-warning">${item.location.name}</small>
                        </div>
                      </div>

                      <div href="#" class="list-group-item list-group-item-action list-group-item-dark bg-dark">
                        <div class="d-flex w-100 justify-content-between">
                          <small class="mb-1 text-white">Origin</small>
                          <small class="mb-1 text-warning">${item.origin.name}</small>
                        </div>
                      </div>

                      <div href="#" class="list-group-item list-group-item-action list-group-item-dark bg-dark">
                        <div class="d-flex w-100 justify-content-between">
                          <small class="mb-1 text-white">Created</small>
                          <small class="mb-1 text-warning">${new Date(
                            item.created).getMonth()}, ${new Date(
                              item.created).getDay()} ${new Date(
                                item.created).getFullYear()}</small>
                        </div>
                      </div>


                      <ul class="list-group">
                          <li class="list-group-item d-flex justify-content-between align-items-center list-group-item-dark bg-dark text-white">
                          Episodes
                        <span class="badge badge-primary badge-pill" href="episodes.html">${
                            item.episode.length
                          }</span>
                        </li>
                      </ul>

                      <!-- <button data-toggle="modal" data-target="#exampleModal" data-id="${
                        item.episode
                      }" class="btn btn-secondary toggler" style="width:100%">Download</a> -->

                  </div>
              </div>
          </div>
          `;
        }
        document.getElementById("itemsContainer").innerHTML = output;
        document.getElementById("pagination").innerHTML = `
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item disabled">
              <a class="page-link" href="#" onclick="getPrev('${page.prev}')" tabindex="-1">
                Previous
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" onclick="getNext('${page.next}')" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>`;
      });
  }
  getCharacter();
};

function getNext(url) {
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      var results = data.results;
      var page = data.info;
      console.log(page);
      let output = "";
      for (let item of results) {
        output += `
        <div class="col-xs-6 col-sm-4 col-md-4">
          <div class="card bg-dark text-white mb-3" style="color:#333;">
                <img class="card-img-top" src="${
                  item.image
                }" alt="Image not Found">
                <div class="card-body">
                    <div class="card-title">
                        <strong> ${item.name}</strong>
                    </div>
                    <div href="#" class="list-group-item list-group-item-action list-group-item-dark bg-dark">
                      <div class="d-flex w-100 justify-content-between">
                        <small class="mb-1 text-white">Species</small>
                        <small class="mb-1 text-warning">${item.species}</small>
                      </div>
                    </div>


                    <div href="#" class="list-group-item list-group-item-action list-group-item-dark bg-dark">
                      <div class="d-flex w-100 justify-content-between">
                        <small class="mb-1 text-white">Gender</small>
                        <small class="mb-1 text-warning">${item.gender}</small>
                      </div>
                    </div>

                    <div href="#" class="list-group-item list-group-item-action list-group-item-dark bg-dark">
                      <div class="d-flex w-100 justify-content-between">
                        <small class="mb-1 text-white">Status</small>
                        <small class="mb-1 text-warning">${item.status}</small>
                      </div>
                    </div>

                    <div href="#" class="list-group-item list-group-item-action list-group-item-dark bg-dark">
                      <div class="d-flex w-100 justify-content-between">
                        <small class="mb-1 text-white">Location</small>
                        <small class="mb-1 text-warning">${item.location.name}</small>
                      </div>
                    </div>

                    <div href="#" class="list-group-item list-group-item-action list-group-item-dark bg-dark">
                      <div class="d-flex w-100 justify-content-between">
                        <small class="mb-1 text-white">Origin</small>
                        <small class="mb-1 text-warning">${item.origin.name}</small>
                      </div>
                    </div>

                    <div href="#" class="list-group-item list-group-item-action list-group-item-dark bg-dark">
                      <div class="d-flex w-100 justify-content-between">
                        <small class="mb-1 text-white">Created</small>
                        <small class="mb-1 text-warning">${new Date(
                          item.created).toTimeString()}</small>
                      </div>
                    </div>


                    <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-center list-group-item-dark bg-dark text-white">
                        Episodes
                      <span class="badge badge-primary badge-pill" href="episodes.html">${
                          item.episode.length
                        }</span>
                      </li>
                    </ul>

                    <!-- <button data-toggle="modal" data-target="#exampleModal" data-id="${
                      item.episode
                    }" class="btn btn-secondary toggler" style="width:100%">Download</a> -->

                </div>
            </div>
        </div>
        `;
      }
      document.getElementById("itemsContainer").innerHTML = output;
      document.getElementById("pagination").innerHTML = `
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link" href="#" onclick="getPrev('${page.prev}')" tabindex="-1">
              Previous
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" onclick="getNext('${page.next}')" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>`;
    });
}

function getPrev(url) {
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      var results = data.results;
      var page = data.info;
      console.log(page);
      let output = "";
      for (let item of results) {
        output += `
        <div class="col-xs-6 col-sm-4 col-md-4">
          <div class="card bg-dark text-white mb-3" style="color:#333;">
                <img class="card-img-top" src="${
                  item.image
                }" alt="Image not Found">
                <div class="card-body">
                    <div class="card-title">
                        <strong> ${item.name}</strong>
                    </div>
                    <div href="#" class="list-group-item list-group-item-action list-group-item-dark bg-dark">
                      <div class="d-flex w-100 justify-content-between">
                        <small class="mb-1 text-white">Species</small>
                        <small class="mb-1 text-warning">${item.species}</small>
                      </div>
                    </div>


                    <div href="#" class="list-group-item list-group-item-action list-group-item-dark bg-dark">
                      <div class="d-flex w-100 justify-content-between">
                        <small class="mb-1 text-white">Gender</small>
                        <small class="mb-1 text-warning">${item.gender}</small>
                      </div>
                    </div>

                    <div href="#" class="list-group-item list-group-item-action list-group-item-dark bg-dark">
                      <div class="d-flex w-100 justify-content-between">
                        <small class="mb-1 text-white">Status</small>
                        <small class="mb-1 text-warning">${item.status}</small>
                      </div>
                    </div>

                    <div href="#" class="list-group-item list-group-item-action list-group-item-dark bg-dark">
                      <div class="d-flex w-100 justify-content-between">
                        <small class="mb-1 text-white">Location</small>
                        <small class="mb-1 text-warning">${item.location.name}</small>
                      </div>
                    </div>

                    <div href="#" class="list-group-item list-group-item-action list-group-item-dark bg-dark">
                      <div class="d-flex w-100 justify-content-between">
                        <small class="mb-1 text-white">Origin</small>
                        <small class="mb-1 text-warning">${item.origin.name}</small>
                      </div>
                    </div>

                    <div href="#" class="list-group-item list-group-item-action list-group-item-dark bg-dark">
                      <div class="d-flex w-100 justify-content-between">
                        <small class="mb-1 text-white">Created</small>
                        <small class="mb-1 text-warning">${new Date(
                          item.created).toTimeString()}</small>
                      </div>
                    </div>


                    <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-center list-group-item-dark bg-dark text-white">
                        Episodes
                      <span class="badge badge-primary badge-pill" href="episodes.html">${
                          item.episode.length
                        }</span>
                      </li>
                    </ul>

                    <!-- <button data-toggle="modal" data-target="#exampleModal" data-id="${
                      item.episode
                    }" class="btn btn-secondary toggler" style="width:100%">Download</a> -->

                </div>
            </div>
        </div>
        `;
      }
      document.getElementById("itemsContainer").innerHTML = output;
      document.getElementById("pagination").innerHTML = `
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link" href="#" onclick="getPrev('${page.prev}')" tabindex="-1">
              Previous
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" onclick="getNext('${page.next}')" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>`;
    });
}

let filterInput = document.getElementById("filterInput");
filterInput.addEventListener("keyup", filterCharacter);

function filterCharacter() {
  let filterValue = document.getElementById("filterInput").value.toUpperCase();
  // console.log(filterValue);

  let itemsContainer = document.getElementById("itemsContainer");

  let item = itemsContainer.querySelectorAll(".col-md-4");

  for (let i = 0; i < item.length; i++) {
    let a = item[i].getElementsByClassName("card")[0];

    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      item[i].style.display = "";
    } else {
      item[i].style.display = "none";
    }
  }
}
