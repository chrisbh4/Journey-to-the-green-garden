defmodule ChatWeb.ChatRoomControllerLive do
  # In Phoenix v1.6+ apps, the line below should be: use MyAppWeb, :live_view
  use Phoenix.LiveView
  use Phoenix.HTML
  require Logger

  def render(assigns) do
    ~H"""
      <section class="phx-hero">
      <h1>  Welcome to Phoenix ! </h1>
      <p>Peace of mind from prototype to production</p>
      <section  >
        <button phx-click="generate-room"> Generate Room </button>
      </section>
    </section>


    """
  end

  def mount(_params, socket) do
    Logger.info("Inside Chat room")
    {:noreply, socket}
  end


  def handle_event("generate-room",_params, socket) do
    Logger.info(click: "click")
    {:noreply , socket}
  end
end
