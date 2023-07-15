const getApi = "http://localhost:3000/posts";
fetch(getApi)
    .then(function (response) {
        return response.json();
    })
    .then(function (posts) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = posts.map(function (post) {
            return `
            <nav class="container navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="index.html">My Portfolio</a>
              <a class="navbar-slogan" aria-current="page" href="index.html">On the journey to become a real Data Analyst !</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="aboutme.html">About Me</a>
                </li>
                </ul>
              </div>
            </div>
          </nav>
          `
        })
        document.getElementById('root').innerHTML = htmls.join('');
        console.log(htmls)
    })

    const getInfor = "http://localhost:3000/yourInformations";
fetch(getInfor)
    .then(function (response) {
        return response.json();
    })
    .then(function (yourInformations) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = yourInformations.map(function (yourInformation) {
            return `
          <div class ="about-me">
                <h1>About me</h1>
                <div class = "information-about">
                    <img src=${yourInformation.img} alt="">
                    <div class = "information name-description">
                        <h1>${yourInformation.name}</h1>
                        <p>${yourInformation.major}</p>
                        <p>${yourInformation.description}</p>

                        <p class ="connect">Connect with me!</p>
                        <ul>
                            <li> <a href = ""><i class='bx bxl-facebook-circle'></i></a></li>
                            <li> <a href= ""><i class='bx bxl-linkedin-square'></i></li>
                            <li> <a href= ""><i class='bx bxl-github'></i></li>
                        </ul>
                    </div>
                </div>
          </div>
          `
        })
        document.getElementById('root-1').innerHTML = htmls.join('');
        console.log(htmls)
    })