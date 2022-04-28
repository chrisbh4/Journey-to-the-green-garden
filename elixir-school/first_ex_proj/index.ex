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



    - Chat room App
        - create server router
        - create functionality with server & frontend
        -

"""