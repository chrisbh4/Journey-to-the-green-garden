defmodule ChatWeb.ChatLive do
  # In Phoenix v1.6+ apps, the line below should be: use MyAppWeb, :live_view
  use Phoenix.LiveView
  require Logger



  def render(assigns) do
    ~H"""
    <button phx-click="random_room">Random Room</button>
    """
  end





  def handle_event("random_room",_params, socket)do
    random_slug ="/" <> MnemonicSlugs.generate_slug(4)
    Logger.info(random_slug)
    {:noreply, push_redirect(socket, to: random_slug)}
  end
end


"""
1. Only in live view will phx-click work
2. Have to render HTML through the "Render" function instead of regularly rendering html
3. Figure out what was the difference between page_controller and test_liveView

"""
