defmodule ChatWeb.ChatRoomLiveController do
  # In Phoenix v1.6+ apps, the line below should be: use MyAppWeb, :live_view
  use Phoenix.LiveView
  use Phoenix.HTML
  require Logger

  def render(assigns) do
    ~H"""
    <section class="phx-hero">
    <h1> Inside Chat Room </h1>
    <button phx-click="home-button">Home</button>

    <.form let={f} for={:chat} phx-submit={:new_message}>
      <%= text_input f, :message_input %>
    </.form>
    </section>
    """
  end
# Create form and have it be able to submit new messages that log into the server


  def mount(_params, socket) do
    Logger.info("Inside Chat room")
    {:noreply, socket}
  end

  def handle_event("home-button", _params, socket) do
    Logger.info("Going back home!")
    {:noreply, push_redirect(socket, to: "/")}
  end

  def handle_event(event: "new-message", payload: message, socket) do
    Logger.info(:payload , message_input)
    {:noreply, socket}
  end
end
