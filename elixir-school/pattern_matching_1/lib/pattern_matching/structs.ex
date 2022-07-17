# ---
# Excerpted from "Thinking Elixir - PatternMatching", published by Mark Ericksen.
# Copyrights apply to this code. It may not be used to create training material,
# courses, books, articles, and the like. Contact me if you are in doubt. I make
# no guarantees that this code is fit for any purpose. Visit
# https://thinkingelixir.com/available-courses/pattern-matching/ for course
# information.
# ---
defmodule PatternMatching.Structs do
  @moduledoc """
  Fix or complete the code to make the tests pass.
  """
  alias PatternMatching.{Customer, User}

  def get_name(value) do
    case value do
      %{name: name} -> {:ok, "#{name}"}
      _error -> {:error, "Doesn't have a name"}
    end
  end

  def create_greeting(value) do
    case value do
      %{ok: greeting} -> {:ok , greeting}
      _other -> "Nill..."
    end
  end

  def deactivate_user(_user) do

  end

end
