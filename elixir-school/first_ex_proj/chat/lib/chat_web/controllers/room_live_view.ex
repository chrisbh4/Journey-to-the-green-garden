defmodule ChatWeb.RoomLive do
  # In Phoenix v1.6+ apps, the line below should be: use MyAppWeb, :live_view
  use Phoenix.LiveView
  use Phoenix.HTML
  require Logger

  # Need to render the form and trying to render chat.html with the def render function below

  def render(assigns) do
    ~H"""
    <div>
      <h1>Welcome to the chat room id: <%= @room_id %> </h1>
      <button phx-click="back_home">Home</button>

      <div id="chat-container">
        <div id="chat-messages">
          <%= for message <- @messages do %>
          <p><%= message %> </p>
          <% end %>
         </div>
         <div>
         <.form let={f} for={:chat} id="chat-form" phx-submit={:submit_message}>
          <%= text_input f, :message, placeholder: "Enter your message...." %>
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
    ChatWeb.Endpoint.subscribe((topic))
    {:ok, assign(socket , room_id: room_id, topic: topic , messages: ["Chris joined the chat", "How are you liking elixir"])}
  end

def handle_event("submit_message", %{"chat" => %{"message" => message}}, socket)do
  Logger.info(message: message)
  ChatWeb.Endpoint.broadcast(socket.assigns.topic, "new-message" ,message)
  {:noreply, socket}
end

def handle_info(%{event: "new-message", payload: message}, socket) do
  Logger.info(payload: message)
  {:noreply, assign(socket, messages: socket.assigns.messages ++ [message])}
end


def handle_event("back_home", _params, socket) do
  {:noreply, push_redirect(socket, to: "/")}
end





end
