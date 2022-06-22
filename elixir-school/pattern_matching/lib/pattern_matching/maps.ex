# ---
# Excerpted from "Thinking Elixir - PatternMatching", published by Mark Ericksen.
# Copyrights apply to this code. It may not be used to create training material,
# courses, books, articles, and the like. Contact me if you are in doubt. I make
# no guarantees that this code is fit for any purpose. Visit
# https://thinkingelixir.com/available-courses/pattern-matching/ for course
# information.
# ---
defmodule PatternMatching.Maps do
  @moduledoc """
  Fix or complete the code to make the tests pass.
  """

  def return_name(value) do
    case value do
      %{name: name} -> name
    end
  end

  def has_sides?(value) do
    case value do
      %{ sides: _side} -> :true
      _error -> :false
    end
  end

  def net_change(value) do
    case value do
      %{ending_balance: ending , initial_balance: start } -> {:ok , ending - start }
      _error -> {:error, "Missing balance information"}
    end
  end

  def classify_response(response) do
    case response do
      # Checks if token extist if does then returns token's value
      # %{"token" => value} -> {:ok ,value}
      %{"account" => %{"status_code" => ""}} -> {:error, :invalid}
      %{"account" => %{"status_code" => "3001"}} -> {:error, :frozen}
      %{"messages" => %{"general" => %{"result_code" => 3}}} -> {:error , :retry}
      %{"success" => true, "token" => value } -> {:ok , value}
      _error -> response
    end
  end

end
