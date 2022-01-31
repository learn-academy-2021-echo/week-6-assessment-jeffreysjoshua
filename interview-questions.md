# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: The foreign key would be on the Student model, because the cohort has many students. There can be multiple cohorts and so each one would have a specific id, and the students who belong to that cohort would share that foreign key that identifies which cohort they belong to. In order to add the foreign key, you can migrate (cohort_id: integer) to the model.

  Researched answer: The correct process to add a new column to the table is to enter 'rails generate migration add_column_cohort_id_to_students'- this will generate a migration file in the db migrate folder. Then, using the change method in this file, you would write 'add_column :students, :cohort_id, :integer' - this defines the table, new column being added, and the data type. Finally, in terminal, 'rails db:migrate'. The foreign key is used to identify which cohort the student belongs to- it is not the same as the student id but specifically identifies which cohort the student is in.


2. Which RESTful routes must always be passed params? Why?

  Your answer: The RESTful routes that must always be passed params are put, patch, and delete. Params are required for put and patch because these routes seek to change the data of a particular instance, therefore, the url must be passed the param of the index that we are looking to change. Delete must be passed params because the url needs to know which instance is being deleted. Get would need a param to call the method show or edit method in order to identify which index is being "shown" or which index needs an edit form, but it does not need params for the methods of index or new.

  Researched answer: After further investigation it seems that every RESTful route will need a param. Even the method post, which does not need to identify any index in the table, still needs to pass the param of the table itself, to the url.



3. Name three rails generator commands. What is created by each?

  Your answer: Rails g model (this creates a model for the data base, you can define the name of the model, column names, and data types). Rails g resource (this does everything rails g model does, but also sets up the routes, it also creates the controller and the views folder). Rails g controller (this will generate the controller and all the files associated with it).

  Researched answer: In addition to the answer above, rails g migration is another command you can use. This command will add a migration file to your database, and is a good command to use if you forget a column you needed in the table.



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    route: /students          
The controller method for this route is "index". This method is looking to retrieve all of the instances in the table, with all of their columns.

action: "POST"   route: /students       
The controller method for this route is "create". This method adds a new instance of the model to the db table.

action: "GET"    route: /students/new
The controller method for this route is "new". New generates a form with expected inputs for each of the columns in the table- it's like the step needed before the post method can happen (for a user).

action: "GET"    route: /students/2  
The controller method for this route is "show". Show retrieves a single instance of the table, located at the index that matches the param in the url.

action: "GET"    route: /students/2/edit    
The controller method for this route is "edit". Edit generates a form with expected inputs for each of the columns in the table- it's the step needed before the patch/put method can happen (for a user).

action: "PATCH"  route: /students/2      
The controller method for this route is "update". Update renders any changes made to the data of a specific instance within the table.

action: "DELETE" route: /students/2      
The controller method for this route is "destroy". Destroy deletes the specific instance in the table, who's id matches the param passed to it.



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).
Story: As a user, I can navigate to localhost and see an application that helps me manage my to do list.
Story: As a user, I can add a new item to my current to do list.
Story: As a user, I can see a list of all of my to do list items.
Story: As a user, I can see a specific item on my to do list any any description I left for it.
Story: As a user, I can edit any item on my current list.
Story: As a user, I can mark any item on my to do list as done.
Story: As a user, I can see a history of all to do list items that I have completed in the past.
Story: As a user, I can I can delete any item on my current list if I do not want to complete it anymore.
Story: As a user, I can have multiple to do lists for different things if I want to.
Story: As a user, I can have multiple to do lists, for each of my to do lists, if any item on my original to do list requires many steps.
