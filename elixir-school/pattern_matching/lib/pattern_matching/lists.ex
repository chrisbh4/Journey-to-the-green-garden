# ---
# Excerpted from "Thinking Elixir - PatternMatching", published by Mark Ericksen.
# Copyrights apply to this code. It may not be used to create training material,
# courses, books, articles, and the like. Contact me if you are in doubt. I make
# no guarantees that this code is fit for any purpose. Visit
# https://thinkingelixir.com/available-courses/pattern-matching/ for course
# information.
# ---
defmodule PatternMatching.Lists do
  @moduledoc """
  Fix or complete the code to make the tests pass.
  """

  def is_empty?(list) do
    if is_list(list) do
      len = length(list)
      cond do
        len > 0 -> false
        len == 0 -> true
      end
    else
      false
    end
  end

  def has_1_item?(list) do
    if is_list(list) do
      if length(list) == 1 do
        true
      else
        false
      end
    end
  end

  def at_least_one?(list) do
    len = length(list)
    if len > 0 do
      true
    else
      false
    end
  end

  def return_first_item(list) do
    if is_list(list)do
      if length(list) >= 1 do
        [head | _tail] = list
        head
      else
        :error
      end
    end
  end

  def starts_with_1?(list) do
    if length(list) > 0 do
      [head | _rest] = list
      if head === 1 do
        true
      else
        false
      end
    else
      false
    end
  end

  def sum_pair(list) do
    if length(list) === 2 do
      [first, second | _tail] = list
      sum = first + second
      sum
    else
      :error
    end
  end

  def sum_first_2(list) do
    if length(list) >= 1 do
      if length(list) === 1 do
        list
      else
        [first , second | tail] = list
        sum = first + second
        [sum] ++ tail
      end
    else
    []
    end
  end

end
