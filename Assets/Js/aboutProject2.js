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

    const getProject2 = "http://localhost:3000/aboutProject2";
fetch(getProject2)
    .then(function (response) {
        return response.json();
    })
    .then(function (Project1) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = Project1.map(function (Project) {
            return `
                        <div class = "project-${Project.id}">
                            <h1 style="text-align: center">${Project.name}</h1>
                            <img src=${Project.img1} alt="">
                        </div>

                        <div class = "overview">
                            <ul>
                                <li><b>Github: </b><a href ="">link</a></li>
                                <li style = "margin-top: 30px"><b>Data Model file: </b><a href ="">link</a></li>
                            </ul>

                            <h1>Overview</h1>

                            <div class= "general">
                                <p>${Project.overview}</p>

                                <p>In general, this project includes 4 main parts:</p>
                                <ol>
                                    <li style = "margin-top: 30px">${Project.general1}</li>
                                    <li>${Project.general2}</li>
                                    <li>${Project.general3}</li>
                                    <li style = "margin-bottom: 30px;">${Project.general4}</li>
                                </ol>                
                            </div>

                            
                            <div class= "case-description">
                            <h1>Case description</h1>
                                <p>${Project.caseDescription}</p>               
                            </div>


                            <div class= "entity-relationship-diagram">
                            <h1>Entity relationship diagram</h1>
                                <p>${Project.entityRelationship}</p>
                                <ol>
                                    <li style = "margin-top: 30px">${Project.entityRelationship1}</li>
                                    <li style = "margin-bottom: 30px;">${Project.entityRelationship2}</li>
                                </ol> 
                                <p>${Project.caseDescriptionContinue}</p>              
                                <img src=${Project.img2} alt="">       
                            </div>


                            <div class= "database-normalization">

                            <h1>Database Normalization</h1>
                                <p>${Project.databaseNormalization}</p>
                                <ul style="margin-left: -35px;">
                                    <li style = "margin-top: 30px">
                                        <h2>1. ERD conversion</h2>
                                        <p>${Project.eRDConversion}</p> 
                                        <img src=${Project.img3} alt="">       
                                    </li>

                                    <li style = "margin-bottom: 30px; margin-top: 35px">
                            <h2>2. Identify Functional dependencies (FD)</h2>
                                        <p>${Project.eRDConversion}</p> 
                                        <img src=${Project.FD} alt="">   
                                    </li>

                                    <li style = "margin-bottom: 30px;">
                            <h2>3. Third Normal Form</h2>
                                        <p>${Project.ThirdNormalForm}</p> 
                                        <ul style="list-style: disc; margin-left: 10px">
                                            <li style = "margin-top: 50px">${Project.ThirdNormalForm1}</li>
                                            <li style = "margin-bottom: 50px;">${Project.ThirdNormalForm2}</li>
                                        </ul> 

                                        <p>There are four tables that violate the Third Normal Form: store, employee, customer, and product.</p>
                                        <ol>
                                            <li style = "margin-top: 30px">store, employee, customer: city depends on zip_code, although zip_code is a determinant but it and city are non key columns</li>
                                            <li style = "margin-bottom: 30px;">product: category depends on sub_category, although sub_categoryis a determinant but it and category are non key columns</li>
                                        </ol>
                                        <p>To convert those tables into tables that follow TNF, we will split those tables into smaller tables and the PK of smaller tables are those determinants but not candidate keys in the original tables</p>
                                        <img src=${Project.img4} alt="">   
                                    </li>
                                </ul> 
                            </div>

                            <div class= create-trigger ">
                            <h1>Create trigger to catch the event of inserting transaction</h1>
                                <p>I created a trigger that manages the point balance of customers based on their transaction history. The trigger fires after each insert into the “Transaction” table, and performs the following actions:</p>
                                <ol>
                                    <li style = "margin-top: 30px">Declares several variables to hold information about the customer, their current rank, the next rank they could achieve, and the total amount spent.</li>
                                    <li style = "margin-top: 10px;">Opens a cursor to fetch the transaction date and customer ID from the inserted rows.</li>
                                    <li style = "margin-top: 10px;">Loops through each inserted row and performs the following actions.</li>
                                    <li style = "margin-top: 10px;">Retrieves the customer’s current rank from the “Customer” table.                                    </li>
                                    <li style = "margin-top: 10px;">Retrieves the name of the current rank from the “Membership” table based on the current rank ID.</li>
                                    <li style = "margin-top: 10px;">Calculates the total amount spent by the customer from the “Transaction” table.</li>
                                    <li style = "margin-top: 10px;">If the customer is not already at the highest rank. which is Diamond level, it sets the ‘next rank’ column to be the current rank + 1, retrieves the minimum amount needed to reach the next rank from the “Membership” table, and checks if the customer’s total spending is greater than or equal to that amount.</li>
                                    <li style = "margin-top: 10px;">If the customer has reached the next rank, updates their current rank in the “Customer” table, sets the next rank after the update, and inserts a new row into the “Point balance” table with the customer’s ID, the transaction date, the total spending, and the next rank after the update.</li>
                                    <li style = "margin-top: 10px;">If the customer has not reached the next rank, inserts a new row into the “Point balance” table with the customer’s ID, the transaction date, the total spending, and the next rank they could achieve.</li>
                                    <li style = "margin-top: 10px;">If the customer is already at the highest rank, inserts a new row into the “Point balance” table with the customer’s ID, the transaction date, the total spending, and a NULL value for the next rank.                                    </li>
                                    <li style = "margin-top: 10px;">Closes the cursor and deallocates it.</li>
                                </ol> 
                                <p>Overall, this trigger is designed to automatically update a customer’s rank and point balance based on their transaction history.                                </p>              
                                <img src=${Project.img5} alt="">       
                            </div>

                            <div class= "conclusion">
                            <h1>Conclusion</h1>
                                <p>The project has taken us through the entire process of designing an operational database. We began by creating an Entity Relationship Diagram during the Conceptual Modelling phase, which captured all the business requirements of the clients. We then moved on to the Logical Modelling phase where we converted the ERD into a normalized relational database that adheres to the rules of Third Normal Form. Additionally, we also created a SQL trigger to automatically accumulate points and manage membership rankings for customers with each inserted transaction. The last step in the process of database design is the Physical Modelling phase, which focuses on the performance and ACID properties of the database. As this step requires technical expertise, it is beyond the scope of this small project. Nevertheless, this project has provided an opportunity to learn many new things about database design. Based on these accomplishments, it is clear that the project has been successful in teaching valuable skills in database design.</p>
                            </div>

                            
                        </div>
                        <div class = "container show-case projects">
                            <div class = "project">
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
                        </div>                  
        `
        })
        document.getElementById('root-2').innerHTML = htmls.join('');
        console.log(htmls)
    })