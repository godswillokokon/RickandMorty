window.onload = function() {
  function getEpisode() {
    fetch("https://rickandmortyapi.com/api/episode")
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
              <img src="img/img1.png" class="img-responsive card-img-top">
              <div class="card-body">
                <h5 class="card-title">${item.name}</h5>

                <div href="#" class="list-group-item list-group-item-action list-group-item-dark bg-dark">
                  <div class="d-flex w-100 justify-content-between">
                    <small class="mb-1 text-white">Date Released</small>
                    <small class="mb-1 text-warning">${item.air_date}</small>
                  </div>
                </div>

                <div href="#" class="list-group-item list-group-item-action list-group-item-dark bg-dark">
                  <div class="d-flex w-100 justify-content-between">
                    <small class="mb-1 text-white">Episodes</small>
                    <small class="mb-1 text-warning">${item.episode}</small>
                  </div>
                </div>

                <div href="#" class="list-group-item list-group-item-action list-group-item-dark bg-dark">
                  <div class="d-flex w-100 justify-content-between">
                    <small class="mb-1 text-white">Characters</small>
                    <small class="mb-1 text-warning">${item.characters.length}</small>
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

                <button data-toggle="modal" data-target="#exampleModal" data-id="
                " class="btn btn-secondary toggler" style="width:100%" href="#">Download here</a>

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
  getEpisode();
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
            <img src="img/img1.png" class="img-responsive card-img-top">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>

              <div href="#" class="list-group-item list-group-item-action list-group-item-dark bg-dark">
                <div class="d-flex w-100 justify-content-between">
                  <small class="mb-1 text-white">Date Released</small>
                  <small class="mb-1 text-warning">${item.air_date}</small>
                </div>
              </div>

              <div href="#" class="list-group-item list-group-item-action list-group-item-dark bg-dark">
                <div class="d-flex w-100 justify-content-between">
                  <small class="mb-1 text-white">Episodes</small>
                  <small class="mb-1 text-warning">${item.episode}</small>
                </div>
              </div>

              <div href="#" class="list-group-item list-group-item-action list-group-item-dark bg-dark">
                <div class="d-flex w-100 justify-content-between">
                  <small class="mb-1 text-white">Characters</small>
                  <small class="mb-1 text-warning">${item.characters.length}</small>
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

              <button data-toggle="modal" data-target="#exampleModal" data-id="
              " class="btn btn-secondary toggler" style="width:100%" href="#">Download here</a>

            </div>
          </div>
        </div>
        `;
      }
      document.getElementById("itemsContainer").innerHTML = output;
      document.getElementById("pagination").innerHTML = `
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item ">
            <a class="page-link" href="#" onclick="getPrev('${page.prev}')" tabindex="-1">
              Previous
            </a>
          </li>
          <li class="page-item disabled">
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
            <img src="img/img1.png" class="img-responsive card-img-top">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>

              <div href="#" class="list-group-item list-group-item-action list-group-item-dark bg-dark">
                <div class="d-flex w-100 justify-content-between">
                  <small class="mb-1 text-white">Date Released</small>
                  <small class="mb-1 text-warning">${item.air_date}</small>
                </div>
              </div>

              <div href="#" class="list-group-item list-group-item-action list-group-item-dark bg-dark">
                <div class="d-flex w-100 justify-content-between">
                  <small class="mb-1 text-white">Episodes</small>
                  <small class="mb-1 text-warning">${item.episode}</small>
                </div>
              </div>

              <div href="#" class="list-group-item list-group-item-action list-group-item-dark bg-dark">
                <div class="d-flex w-100 justify-content-between">
                  <small class="mb-1 text-white">Characters</small>
                  <small class="mb-1 text-warning">${item.characters.length}</small>
                </div>
              </div>


              <div href="#" class="list-group-item list-group-item-action list-group-item-dark bg-dark">
                <div class="d-flex w-100 justify-content-between">
                  <small class="mb-1 text-white">Created</small>
                  <small class="mb-1 text-warning">${item.created}</small>
                </div>
              </div>

              <button data-toggle="modal" data-target="#exampleModal" data-id="
              " class="btn btn-secondary toggler" style="width:100%" href="${result.url}">Download here</a>

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
