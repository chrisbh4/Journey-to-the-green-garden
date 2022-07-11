# ---
# Excerpted from "Thinking Elixir - PatternMatching", published by Mark Ericksen.
# Copyrights apply to this code. It may not be used to create training material,
# courses, books, articles, and the like. Contact me if you are in doubt. I make
# no guarantees that this code is fit for any purpose. Visit
# https://thinkingelixir.com/available-courses/pattern-matching/ for course
# information.
# ---
defmodule PatternMatching.Tuples do
  @moduledoc """
  Fix or complete the code to make the tests pass.
  """

  def day_from_date(date) do
    {_year, _month, day} = date
    day
  end

  def has_three_elements?(tuple) do
    case tuple do
      { _first, _sec, _third} -> true
      _error -> false
    end

  end

  def major_us_holiday(erl_date) do
    {_year, month , _day } = erl_date
     date = %{month: month}
     case date do
       %{month: 12 } -> "Christmas"
       %{month: 7} -> "4th of July"
       %{month: 1 } -> "New Years"
       _error -> "Uh..."
     end
  end

  def greet_user(tuple) do
    case tuple do
      {:ok, name } -> "Hello #{name}!"
      _error -> "Cannot greet"
    end
  end

  def add_to_result(tuple) do
    {_status, number} = tuple
    case tuple do
      {:ok, number } -> {:ok, number + 10}
      _error -> {:error, number}
    end
  end
end
