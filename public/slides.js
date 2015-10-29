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
    title: "By example",
    code: [
      "var iterator = function(i) {",
      "  return i * 2 ",
      "}",
      "",
      "var array = [ 10, 20, 30, 40 ]",
      "",
      "var result = pattern(array, iterator)",
      "// or",
      "var result = array.pattern(iterator)"
    ]
  },
  {
    content: "<h2>This requires <em>passing a function as a parameter</em> into another function</h2>"
  },
  {
    code: [
      "$(document).on('ready', function(){",
      "  // do some stuff",
      "})",
      "",
      "$('.green-button').on('click', function(evt){",
      "  // do other stuff",
      "})"
    ]
  },
  {
    code: [
      "var startApplication = function(){",
      "  // do some stuff",
      "}",
      "$(document).on('ready', startApplication)",
      "",
      "var clickGreenButton = function(evt){",
      "  // do other stuff",
      "}",
      "$('.green-button').on('click', clickGreenButton)"
    ]
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
      "var arrayOfNumbers = [5, 10, 15, 20, 25]",
      "",
      "arrayOfNumbers.map(function(item){",
      "  return item * 2",
      "}) // [10, 20, 30, 40 , 50]"
    ]
  },
  {
    title: "Foundational patterns -- <em>filter</em>",
    code: [
      "var arrayOfNumbers = [5, 10, 15, 20, 25]",
      "",
      "arrayOfNumbers.filter(function(item){",
      "  return (item > 16)",
      "}) // [20, 25]"
    ]
  },
  {
    title: "Foundational patterns -- <em>reduce</em>",
    code: [
      "var arrayOfNumbers = [5, 10, 15, 20, 25]",
      "",
      "arrayOfNumbers.reduce(function(memory, item){",
      "  return memory + item",
      "}, 0) // 75"
    ]
  }
]