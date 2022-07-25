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

  def return_name(%{name: name}) do
    name
  end

  def has_sides?(%{sides: _sides}), do: true
  def has_sides?(_other), do: false


  def net_change(%{ending_balance: ending, initial_balance: initial}) do
    total = ending - initial
    {:ok, total}
  end
  def net_change(_other), do: {:error, "Missing balance information"}

  def classify_response(%{"success" => true, "token" => token}) do
    {:ok , token}
  end

  def classify_response(%{"account" => %{"status_code" => "3001"}}), do: {:error, :frozen}
  def classify_response(%{"account" => nil}), do: {:error, :retry}
  def classify_response(%{"success" => false, "token" => "invalid"}), do: {:error, :invalid}
end
