defmodule ChatWeb.ChatRoomLiveController do
  # In Phoenix v1.6+ apps, the line below should be: use MyAppWeb, :live_view
  use Phoenix.LiveView
  use Phoenix.HTML
  require Logger

  def render(assigns) do
    ~H"""
    <h1> Inside Chat Room </h1>


    """
  end

  def mount(_params, socket) do
    Logger.info("Inside Chat room")
    {:noreply, socket}
  end



end
