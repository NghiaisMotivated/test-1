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
          
          <div class = "carousel">
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src=${post.img1} class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>${post.project1}</h5>
                        <p>${post.description1}</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src=${post.img2} class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>${post.project2}</h5>
                        <p>${post.description2}</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src=${post.img3} class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>${post.project3}</h5>
                        <p>${post.description3}</p> 
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src=${post.img4} class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>${post.project4}</h5>
                        <p>${post.description4}</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src=${post.img5} class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>${post.project5}</h5>
                        <p>${post.description5}</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src=${post.img6} class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>${post.project6}</h5>
                        <p>${post.description6}</p>
                    </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
          </div>
          `
        })
        document.getElementById('root').innerHTML = htmls.join('');
        console.log(htmls)
    })



const getProjects = "http://localhost:3000/Projects";
fetch(getProjects)
    .then(function (response) {
        return response.json();
    })
    .then(function (Projects) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = Projects.map(function (Project) {
            return `
            <div class = "container show-case projects">
                <div class = "project">
                   <a href = "aboutProject1.html">
                        <h2>${Project.name1}</h2>
                        <img src=${Project.img} alt="...">
                   </a>
                   <p>${Project.description1}</p>

                   <div class = "information">
                        <ul>
                            <li><i class='bx bxs-user'></i>${Project.author}</li>
                            <li><i class='bx bxs-calendar'></i> <a href = "">${Project.time}</a></li>
                            <li><i class='bx bx-purchase-tag-alt' ></i> <a href = "">${Project.file}</a></li>
                            <li><i class='bx bx-file'></i> <a href = "">${Project.tag}</a>, <a href = "">${Project.tag1}</a>, <a href = "">${Project.tag2}</li>
                        </ul>
                   </div>
                </div>
            </div>
          `
        })
        document.getElementById('root-2').innerHTML = htmls.join('');
        console.log(htmls)
    })



const getProjects1 = "http://localhost:3000/Projects1";
fetch(getProjects1)
    .then(function (response) {
        return response.json();
    })
    .then(function (Projects) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = Projects.map(function (Project) {
            return `
            <div class = "container show-case projects">
                <div class = "project">
                   <a href = "aboutProject2.html">
                        <h2>${Project.name1}</h2>
                        <img src=${Project.img} alt="...">
                   </a>
                   <p>${Project.description1}</p>

                   <div class = "information">
                        <ul>
                            <li><i class='bx bxs-user'></i>${Project.author}</li>
                            <li><i class='bx bxs-calendar'></i> <a href = "">${Project.time}</a></li>
                            <li><i class='bx bx-purchase-tag-alt' ></i> <a href = "">${Project.file}</a></li>
                            <li><i class='bx bx-file'></i> <a href = "">${Project.tag}</a>, <a href = "">${Project.tag1}</a>, <a href = "">${Project.tag2}</li>
                        </ul>
                   </div>
                </div>
            </div>
          `
        })
        document.getElementById('root-3').innerHTML = htmls.join('');
        console.log(htmls)
    })

const getProjects2 = "http://localhost:3000/Projects2";
fetch(getProjects2)
    .then(function (response) {
        return response.json();
    })
    .then(function (Projects) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = Projects.map(function (Project) {
            return `
            <div class = "container show-case projects">
                <div class = "project">
                   <a href = "aboutProject3.html">
                        <h2>${Project.name1}</h2>
                        <img src=${Project.img} alt="...">
                   </a>
                   <p>${Project.description1}</p>

                   <div class = "information">
                        <ul>
                            <li><i class='bx bxs-user'></i>${Project.author}</li>
                            <li><i class='bx bxs-calendar'></i> <a href = "">${Project.time}</a></li>
                            <li><i class='bx bx-purchase-tag-alt' ></i> <a href = "">${Project.file}</a></li>
                            <li><i class='bx bx-file'></i> <a href = "">${Project.tag}</a>, <a href = "">${Project.tag1}</a>, <a href = "">${Project.tag2}</li>
                        </ul>
                   </div>
                </div>
            </div>
          `
        })
        document.getElementById('root-4').innerHTML = htmls.join('');
        console.log(htmls)
    })


const getProjects3 = "http://localhost:3000/Projects3";
fetch(getProjects3)
    .then(function (response) {
        return response.json();
    })
    .then(function (Projects) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = Projects.map(function (Project) {
            return `
                <div class = "container show-case projects">
                    <div class = "project">
                       <a href = "aboutProject4.html">
                            <h2>${Project.name1}</h2>
                            <img src=${Project.img} alt="...">
                       </a>
                       <p>${Project.description1}</p>
    
                       <div class = "information">
                            <ul>
                                <li><i class='bx bxs-user'></i>${Project.author}</li>
                                <li><i class='bx bxs-calendar'></i> <a href = "">${Project.time}</a></li>
                                <li><i class='bx bx-purchase-tag-alt' ></i> <a href = "">${Project.file}</a></li>
                                <li><i class='bx bx-file'></i> <a href = "">${Project.tag}</a>, <a href = "">${Project.tag1}</a>, <a href = "">${Project.tag2}</li>
                            </ul>
                       </div>
                    </div>
                </div>
              `
        })
        document.getElementById('root-5').innerHTML = htmls.join('');
        console.log(htmls)
    })



const getProjects4 = "http://localhost:3000/Projects4";
fetch(getProjects4)
    .then(function (response) {
        return response.json();
    })
    .then(function (Projects) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = Projects.map(function (Project) {
            return `
                    <div class = "container show-case projects">
                        <div class = "project">
                           <a href = "aboutProject5.html">
                                <h2>${Project.name1}</h2>
                                <img src=${Project.img} alt="...">
                           </a>
                           <p>${Project.description1}</p>
        
                           <div class = "information">
                                <ul>
                                    <li><i class='bx bxs-user'></i>${Project.author}</li>
                                    <li><i class='bx bxs-calendar'></i> <a href = "">${Project.time}</a></li>
                                    <li><i class='bx bx-purchase-tag-alt' ></i> <a href = "">${Project.file}</a></li>
                                    <li><i class='bx bx-file'></i> <a href = "">${Project.tag}</a>, <a href = "">${Project.tag1}</a>, <a href = "">${Project.tag2}</li>
                                </ul>
                           </div>
                        </div>
                    </div>
                  `
        })
        document.getElementById('root-6').innerHTML = htmls.join('');
        console.log(htmls)
    })



const getProjects5 = "http://localhost:3000/Projects5";
fetch(getProjects5)
    .then(function (response) {
        return response.json();
    })
    .then(function (Projects) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = Projects.map(function (Project) {
            return `
                        <div class = "container show-case projects">
                            <div class = "project">
                               <a href = "aboutProject6.html">
                                    <h2>${Project.name1}</h2>
                                    <img src=${Project.img} alt="...">
                               </a>
                               <p>${Project.description1}</p>
            
                               <div class = "information">
                                    <ul>
                                        <li><i class='bx bxs-user'></i>${Project.author}</li>
                                        <li><i class='bx bxs-calendar'></i> <a href = "">${Project.time}</a></li>
                                        <li><i class='bx bx-purchase-tag-alt' ></i> <a href = "index.html">${Project.file}</a></li>
                                        <li><i class='bx bx-file'></i> <a href = "">${Project.tag}</a>, <a href = "">${Project.tag1}</a>, <a href = "">${Project.tag2}</li>
                                    </ul>
                               </div>
                            </div>
                        </div>
                      `
        })
        document.getElementById('root-7').innerHTML = htmls.join('');
        console.log(htmls)
    })