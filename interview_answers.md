# Interview Answers
1. What problem does the context API help solve?


Addresses prop drilling with a better, more centralized store. Facilitates accessing data from various levels of the application. However, makes component reuse more difficult, and more complex than just using components so should only be used for apps that are too big for components.


2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?


Action type tells a reducer how to change an app's state (manipulate "store"). Store holds the data/state used by the app. 


3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?


Thunk changes action creators by returning a f instead of an action object using dispatch method. Can then call dispatch to initiate the actions after async actions are done. Used with API - not needed if not using async actions with servers/API.


4. What is your favorite state management system you've learned and this sprint? Please explain why!


I think they all have their strengths, but so far I would like to learn more about alternatives to Redux. I think there are some cases in which Redux is the solution but in most cases could use something else. Context seems more well rounded at this point in my developing journey.