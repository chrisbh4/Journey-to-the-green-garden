"""
- Phoenix is exactly like Node.JS & Express it's used to build backend api's

[] What connects the backend db to the API

[] How to create & utilize a router
  - Create a router :
                - ChatWeb.Router : is the Router file
                - "scope" function with "pipe_thorugh"
  - Utlizie Routers :
              - when returing a "socket" it tells phoenix liveview what to do with a connection ex: "push_redirect()"
                  - video : 44:30 talks about live view socket state
                  - when a variable is assigned to the socket it is avilable anywhere throughout the template
              - "live" : is used to set the url path , ex: live "/:id" , RoomLive, :index
              - "@imp" : implimentation

[] How to connect the backend to the frontend
    - functionailty comes from defModule ChatWeb.<fileName> function
    - Phoenix watches the state of the socket and if there is a new change to the socket state then it will rerender the html & data

    - Controllers : module that contains the functioality for the server side rendering, has built in methods that use patter-matching
    - LiveView : allows for server side rendering of html with no frontend servers needed, requires specifi modules that need to be imported
    - functions can take in multiple parameters while calling a callback function inside


# Questions to look up
- What does "plug" do inside a routers pipeline function
- What does "@impl" do?
- what does phx-update do?
-

# Notes 1st walkthrough
PageControllers are each individual pages functionality like POST/PUT/DELETE

"""
