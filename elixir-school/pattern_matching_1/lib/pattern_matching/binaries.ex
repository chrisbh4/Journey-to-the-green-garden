# ---
# Excerpted from "Thinking Elixir - PatternMatching", published by Mark Ericksen.
# Copyrights apply to this code. It may not be used to create training material,
# courses, books, articles, and the like. Contact me if you are in doubt. I make
# no guarantees that this code is fit for any purpose. Visit
# https://thinkingelixir.com/available-courses/pattern-matching/ for course
# information.
# ---
defmodule PatternMatching.Binaries do
  @moduledoc """
  Fix or complete the code to make the tests pass.
  """

  def identify_command("SAY " <> text) do
    {:say ,text }
  end
  def identify_command("WAVE " <> text) do
    {:wave ,text }
  end
  def identify_command(_) do
    {:error, "Unrecognized command"}
  end

  def format_phone(<< first::binary-size(3), last::binary-size(4)>>) do
    "#{first}-#{last}"
  end
  def format_phone(<< area::binary-size(3), first::binary-size(3), last::binary-size(4)>>) do
    "(#{area}) #{first}-#{last}"
  end
  def format_phone(error) do
    error
  end

  @png_signature <<137::size(8), 80::size(8), 78::size(8), 71::size(8), 13::size(8), 10::size(8),
  26::size(8), 10::size(8)>>

@jpg_signature <<255::size(8), 216::size(8)>>

def image_type(<< @png_signature, _rest::binary >>), do: :png
def image_type(<< @jpg_signature, _rest::binary >>), do: :jpg
def image_type(_other), do: :unknown

end

