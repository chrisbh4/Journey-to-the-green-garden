defmodule ChatWeb.PageController do
  use ChatWeb, :controller
  require Logger

  def index(conn, _params) do
    Logger.info("Index!!!")
    render(conn, "index.html")
  end


  def handle_event("random_room", _params, socket) do
    Logger.info("click")
    {:noreply, socket}
  end

end
