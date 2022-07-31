# ---
# Excerpted from "Thinking Elixir - CodeFlow", published by Mark Ericksen.
# Copyrights apply to this code. It may not be used to create training material,
# courses, books, articles, and the like. Contact me if you are in doubt. I make
# no guarantees that this code is fit for any purpose. Visit
# https://thinkingelixir.com/available-courses/code-flow/ for course
# information.
# ---
defmodule CodeFlow.Keywords do
  @moduledoc """
  Fix or complete the code to make the tests pass.
  """
  # alias CodeFlow.Schemas.Item

  def rounded(value, opts \\ []) do
    decimal = Keyword.get(opts, :decimals) || 4
    Float.round(value, decimal)
  end

  @spec unit_price(any, any) :: nil
  def unit_price(item, opts \\ []) do
    operation = Keyword.get(opts, :float, :short)
    
    # operation = Keyword.get(opts, :money, "money")

  end
end
