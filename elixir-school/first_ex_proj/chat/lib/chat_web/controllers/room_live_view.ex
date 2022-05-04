defmodule ChatWeb.RoomLive do
  # In Phoenix v1.6+ apps, the line below should be: use MyAppWeb, :live_view
  use Phoenix.LiveView
  require Logger

  # Need to render the form and trying to render chat.html with the def render function below


  # def render(assigns) do
  #   ~H"""
  #  <h1>Welcome to the chat room id: <%= @room_id %> </h1>
    # <button phx-click="back_home">Home</button>

    # <div id="chat-container">
    #   <div id="chat-messages">
    #     Chat goes here
    #   </div>

    #   <.form let={f} for={:chat} id="chat-form" phx-submit={:submit_message}>
    #     <%# <%= text_input f, :message, placeholder: "Enter your message...." %> %>
    #   </.form>
    # </div>
  #   """
  # end

  def render(assigns) do
    Phoenix.View.render( ChatWeb.ChatLive, "chat.html", assigns)
  end



  def mount(%{"id" => room_id}, _session, socket) do
    {:ok , assign( socket , room_id: room_id )}
  end

  def handle_event("back_home",_params, socket)do
    {:noreply, push_redirect(socket, to: "/")}
  end




end
