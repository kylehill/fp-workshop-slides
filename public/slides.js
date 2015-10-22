var slides = [

  {
    feature: true,
    content: "<h2>Understanding <em>Functional Programming</em><br/>(or <em>Higher-Order Functions</em>)</h2>"
  },
  {
    feature: true,
    image: "wiki.png"
  },
  {
    title: "Functional programming is...",
    ul: [
      "One of several <em>patterns</em> involving",
      "a <em>generic</em>, <em>independent</em> iterator function",
      "executed on <em>each member</em> of a collection (read: array) in order",
      "which is <em>non-mutative</em>",
      "that <em>returns a value</em>",
      "which is pattern-specifically <em>synthesized</em> into a single, returned value"
    ]
  },
  {
    title: "Functional programming is...",
    ul: [
      "One of several <em>patterns</em> involving",
      "a <em>generic</em>, <em>independent</em> iterator function",
      "executed on <em>each member</em> of a collection (read: array) in order",
      "which is <em>non-mutative</em>",
      "that <em>returns a value</em>",
      "which is pattern-specifically <em>synthesized</em> into a single, returned value",
      "(and also there's forEach which only does, like, some of that)"
    ]
  },
  {
    title: "By example",
    code: [
      "// An 'iterator' is a function that accepts a value", 
      "// and returns a value",
      "var iterator = function(i) {",
      "  return i * 2 ",
      "}",
      "",
      "// An array is, well, an array",
      "var array = [ 10, 20, 30, 40 ]"
    ]
  },
  {
    title: "By example (cont'd)",
    code: [
      "/* The pattern is the specific higher-order operation",
      "which we are performing",
      "",
      "A pattern is a function that accepts both",
      "an array and an iterator",
      "",
      "Patterns are reusable and generic -- you'll get different",
      "results by changing either the array or the iterator",
      "*/",
      "pattern(array, iterator)"
    ]
  },
  {
    content: "<h2>This requires <em>passing a function as a parameter</em> into another function</h2>"
  },
  {
    title: "FP foundational patterns",
    ul: [
      "<em>map</em> -- returns the array, transformed",
      "<em>filter</em> -- returns a (usually) smaller array with the same members",
      "<em>reduce</em> -- returns a single value synthesized from all values in the array"
    ]
  },
  {
    title: "Foundational patterns - <em>map</em>",
    code: [
      "[5, 10, 15].map(function(item){",
      "  return item * 2",
      "}) // [10, 20, 30]"
    ]
  },
  {
    title: "Foundational patterns -- <em>filter</em>",
    code: [
      "[5, 10, 15].filter(function(item){",
      "  return (item % 2 !== 0)",
      "}) // [5, 15]"
    ]
  },
  {
    title: "Foundational patterns -- <em>reduce</em>",
    code: [
      "[5, 10, 15].reduce(function(memory, item){",
      "  return memory + item",
      "}, 0) // 30"
    ]
  }
]