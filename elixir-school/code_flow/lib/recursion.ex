# ---
# Excerpted from "Thinking Elixir - CodeFlow", published by Mark Ericksen.
# Copyrights apply to this code. It may not be used to create training material,
# courses, books, articles, and the like. Contact me if you are in doubt. I make
# no guarantees that this code is fit for any purpose. Visit
# https://thinkingelixir.com/available-courses/code-flow/ for course
# information.
# ---
defmodule CodeFlow.Recursion do
  @moduledoc """
  Fix or complete the code to make the tests pass.
  """
  alias CodeFlow.Fake.Customers
  alias CodeFlow.Schemas.OrderItem

  @doc """
  Sum a list of OrderItems to compute the order total.
  """
  # total is computed as an Item’s price * the quantity
  # Summing all of those together for the total order price
  # {Item{active: true, id: nil, name: "Item 1", price: 5.0, quantity: 1, weight: 0.0}, quantity: 2}

  # - split the list from [head| rest] which seperates the first item in the list
  # - Key into OrderItem and access .price & .item.price and multiple togeter
  #   - take the total of the multplication and sum it with total
  # - pass the rest of the list and total into the recursive function again
  # - create a function when passed a empty list and total return total

  def order_total(order_items) do
      do_order_total(order_items, 0)
  end

  defp do_order_total([%OrderItem{}= item | rest], total) do
      do_order_total(rest, (item.quantity * item.item.price) + total)
  end

  defp do_order_total([],total), do: total

  @doc """
  Count the number of active customers. Note: Normally this would be done with a
  query to an SQL database. This is just to practice conditionally incrementing
  a counter and looping using recursion.
  """
  def count_active(_customers) do

  end

  @doc """
  Create the desired number of customers. Provide the number of customers to
  create. Something like this could be used in a testing setup.
  """
  def create_customers(_number) do

  end

  @doc """
  Compute the value in the Fibonacci sequence for the number. If the number is
  "10", then the result is 10 plus the value of the 9th index of the fibonacci
  sequence.
  https://en.wikipedia.org/wiki/Fibonacci_number
  """
  def fibonacci(_num) do

  end
end
