defmodule ChatWeb.ChatRoomLiveController do
  # In Phoenix v1.6+ apps, the line below should be: use MyAppWeb, :live_view
  use Phoenix.LiveView
  use Phoenix.HTML
  require Logger

  def render(assigns) do
    ~H"""
    <section class="phx-hero">
    <h1> Inside Chat Room ID: <%= @room_id %> </h1>
    <button phx-click="home-button">Home</button>

    <div>
    <%= for message <- @messages do %>
      <p><%= message %></p>
      <% end %>
    </div>


    <.form let={f} for={:chat} phx-submit={:form_submit}>
      <%= text_input f, :message , placeholder: "Enter message..." %>
    </.form>
    </section>
    """
  end
# Create form and have it be able to submit new messages that log into the server


  def mount(%{"id" => room_id }, _params, socket) do
    # Logger.info(:inside"Inside Chat room")
    topic = "room:" <> room_id
    ChatWeb.Endpoint.subscribe(topic)

    {:ok , assign(socket, room_id: room_id, topic: topic, messages: ["Chris is signed on", "Phoenix Chat room is signed on"], username: "system")}
  end

  def handle_event("home-button", _params, socket) do
    {:noreply, push_redirect(socket, to: "/")}
  end

  def handle_event("form_submit", %{"chat" => %{"message" => message }}, socket) do
    # Logger.info( :message, message)
    Logger.info( message: message)
    # This broadcast the newly inputed message to the socket state and tells the state to update itself with the new information
    ChatWeb.Endpoint.broadcast(socket.assigns.topic, "new-message", message)
    {:noreply, assign(socket, message: message)}
  end

  # To render the data from the form submit need to handle the event with a handle_info/2 : this allows access to the data that was just submited
  def handle_info(%{event: "new-message" , payload: message}, socket) do
    {:noreply, assign(socket, messages: [socket.assigns.messages ++ message])}
  end

end
