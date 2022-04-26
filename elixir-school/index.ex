

 """
  !! Look out for built in Methods, data types , type of functions , export/import


 - IEx, an interactive shell, which allows us to evaluate Elixir expressions as we go. : similar to typing "node" into the terminal

 - Basic Data Types : Strings ,Integers, Floats (numbers with decimals) , Booleans , Atoms ( name of the value is the value || acts like a symbol )
 - Arithmetic Methods : div() : division , rem() : remainder/modulo
 - Booleans :
      - Elixir provides the ||, &&, and ! boolean operators
      - Three additional operators whose first argument must be a boolean (true or false): and , or , not

- String Interpolation :  "Hello #{name}"
- String Concatenation : "Hello " <> name
- List (JS arrays ) : [3.14, :pie, "Apple"] :  which may include multiple types; lists may also include non-unique values
* it is typically faster to prepend than to append a list

# Collection Types
- List Concatenation uses the ++/2 operator : [1,2] ++ [3,4,5]
- Head/Tail : Head(hd) is the first element inside the List and Tail(tl) is the last element inside the list
** (++/2) : ++ means the name of the operator to be used , /2 means the number of arguments the function takes
- List Subtraction : via the --/2 operator; its safe to subtract a missing value:
- '|' cons operator : used to split a list into head and tail : tail will include all elements that are not head

Tuples : {} used as a mechanism to return additional information from functions : File.read("path/to/unknown/file") {:error, :enoent}

- Keyword Lists (JS array but with key-value pairs) : keyword list is a special list of two-element tuples whose first element is an atom : [foo: "bar", hello: "world"]

- Maps :  are the “go-to” key-value store. Unlike keyword lists, they allow keys of any type and are un-ordered : %{}
    ex: %{:foo => "bar", "hello" => :world} , map[:foo] // "bar"
- '|' : Maps provide their own syntax for updating , ex: %{test | foo: "baz"} // {foo: "baz", hello: "world"}
KeyError will render with '|' operations since the Key does not exists already

#Enum (JS iteration methods for iteratable elements)
-A set of algorithms for enumerating over enumerables || All collections besides tuples work with these enumerables
* if need to find how to iterate over collections then search Enum docs
- &() : capture operator is used to be an anonymous variable to be used while enumerating over enumerables

# Pattern Matching

 """
