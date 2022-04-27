"""

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




"""
