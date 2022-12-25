# BrainBubbleProject

“Brain Bubble” is an application project that will be available through your web browser. The project will consist of a friendly almost childlike appearance that will form ideas transmitted via the client themselves. They will have to specify what kind of project they want to brainstorm for and will be able to edit the name of their cloudwall that will appear.

This application was written in React.js. There were many challenges like how to add a cloud for each idea given by the user, and the whole implementation of the backend as a whole.
```
npm install brainbubbleproject
npm start
```


![image](https://user-images.githubusercontent.com/119442915/209388317-bffa5ce8-ae0b-4344-b8a2-61e9bff84335.png)




This type of project could benefit from an audience of all ages that are working on a new project and that need ideas on the table. This application will be free but will require a username to identify them inside the database. It could be anything, just a name to separate the visitors going in and out. Anybody that take on project whether it is in programming, art, stories, and essays will be the application’s target audience which grows more and more.

Design:

The project is composed of ideas and clouds. They are in a OnetoOne relationship which means that one cannot exist without the other. This also assumes that deleting an idea will also delete the cloud with it.
***
ENDPOINTS:

+GET:/api/ideas - Get all ideas 
+POST:/api/ideas - Add an idea
+PUT:/api/ideas/{id} - Update an idea
+PUT:/api/ideas/cloud/{id} - Update a cloud
+DELETE:/api/ideas/{id} - Delete an idea
***



Code by Elias Elamine
