defmodule ChatWeb.RoomLive do
  # In Phoenix v1.6+ apps, the line below should be: use MyAppWeb, :live_view
  use Phoenix.LiveView
  use Phoenix.HTML
  require Logger

  # submit_form isn't resetting the inputs value after it has been submited

  def render(assigns) do
    ~H"""
    <div>
      <h1>Currently chatting in  <strong> <%= @room_id %> </strong> as <strong> <%= @username %> </strong></h1>
      <button phx-click="back_home">Home</button>

      <div id="chat-container">
        <div id="chat-messages" phx-update="append">
          <%= for message <- @messages do %>
          <p id={message.uuid} > <strong > <%= message.username %> </strong>: <%= message.content %> </p>
          <% end %>
         </div>
         <div>
         <.form let={f} for={:chat} id="chat-form" phx-submit={:submit_message} phx-change={:form_update}>
          <%= text_input f, :message , value: @message , placeholder: "Enter your message...." %>
         </.form>
       </div>
      </div>

    </div>
    """
  end

    # def render(assigns) do
    #   Phoenix.View.render( ChatWeb.ChatLive, "chat.html", assigns)
    # end

  def mount(%{"id" => room_id}, _session, socket) do
    topic = "room" <> room_id
    username = MnemonicSlugs.generate_slug(2)
    ChatWeb.Endpoint.subscribe((topic))
    {:ok, assign(socket , room_id: room_id,
     topic: topic ,
     username: username,
     message: "",
     messages: [%{uuid: UUID.uuid4(), content: "#{username} has joined the chat.", username: "system"}],
     temporary_assigns: [messages: []]
     )}
  end

def handle_event("submit_message", %{"chat" => %{"message" => message}}, socket)do
  message = %{ uuid: UUID.uuid4(), content: message, username: socket.assigns.username}
  ChatWeb.Endpoint.broadcast(socket.assigns.topic, "new-message" , message)
  {:noreply, assign(socket, message: "")}
end

def handle_event("form_update", %{"chat"=> %{"message"=> message}}, socket) do
  Logger.info( message: message)
  {:noreply, assign(socket, message: message)}
end

def handle_info(%{event: "new-message", payload: message}, socket) do
  # {:noreply, assign(socket, messages: socket.assigns.messages ++ [message])}
  {:noreply, assign(socket, messages: [message])}
end


def handle_event("back_home", _params, socket) do
  {:noreply, push_redirect(socket, to: "/")}
end





end
