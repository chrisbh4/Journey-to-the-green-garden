# ---
# Excerpted from "Thinking Elixir - PatternMatching", published by Mark Ericksen.
# Copyrights apply to this code. It may not be used to create training material,
# courses, books, articles, and the like. Contact me if you are in doubt. I make
# no guarantees that this code is fit for any purpose. Visit
# https://thinkingelixir.com/available-courses/pattern-matching/ for course
# information.
# ---
defmodule PatternMatching.GuardClauses do
  @moduledoc """
  Fix or complete the code to make the tests pass.
  """
  alias PatternMatching.User

  def return_numbers(value) when is_float(value) do
    value
  end
  def return_numbers(value) when is_number(value) do
    value
  end
  def return_numbers(_), do: :error

  def return_lists(list) when is_list(list), do: list
  def return_lists(_list), do: :error


  def return_any_size_tuples(tuple) when is_tuple(tuple), do: tuple
  def return_any_size_tuples(_), do: :error


  def return_maps(maps) when is_map(maps), do: maps
  def return_maps(_value), do: :error

  def run_function(func) when is_function(func), do: func.()
  def run_function(_value), do: :error

  def classify_user(%User{age: age} = _user) when age >= 18, do: {:ok, :adult}
  def classify_user(%User{age: age} = _user) when age < 0 , do: {:error, "Age cannot be negative"}
  def classify_user(%User{name: _name} = _user), do: {:error, "Age missing"}
  def classify_user(%User{age: age} = _user) when age < 18, do: {:ok, :minor}
  def classify_user(_other), do: {:error , "Not a user"}

  def award_child_points(_user, _max_age, _points) do

  end

end
