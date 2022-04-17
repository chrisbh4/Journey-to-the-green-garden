
# export & create a module class
# functions cant exsitst outside of the module scope

defmodule M do
  def main do

    data_stuff()
  end
  # def data_stuff do
  #   # my_int = 123
  #   IO.puts "Atom #{is_atom(:Pitts)}"
  # end
  def data_stuff do
    my_str = "My sentence"
    IO.puts "Length :  #{String.length(my_str)}"
  end

end

# Atoms with spaces
:"New York"

# Ranges
one_to_10 = 1..10
