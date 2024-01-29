---
layout: layouts/base.html
title: Regular Expression for Arabic and Similar Languages
description: Identify Arabic, Urdu, Pashto, Sindhi, Persian, Kurdish with this regular expression
date: 2022-08-01
tags: ['webtech']
---

<h1 style="font-family:Verdana,sans-serif"> Regular Expression for Arabic and Similar Languages</h1>

Regular Expressions are a powerful tool for string analysis which are present in all programming languages.

In this article we will discuss how to match `Arabic Script` characters using regular expressions in JavaScript language.

Regular Expressions utilize Unicode code points to perform their operations on characters.

Unicode has placed the characters or " <span dir="rtl" style="font-family:Arial,Tahoma,sans-serif">حروف الہجا </span> " of Urdu, Sindhi, Pashto, Persian, Arabic and Kurdish in a single unicode block called the [Arabic Script](https://en.wikipedia.org/wiki/Arabic_script_in_Unicode) which comprises of 256 code points.

The **`\w`** character class in regular expressions only matches latin alphabets or the 26 alphabets of English Language hence we cannot use it to match Arabic Script characters.

But Unicode has introduced some new special character classes to account for non-latin characters and special characters(like emojis).

The one's relevant to our purpose are **`\u`** and **`\p`**. You can find more information about them [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

The following regular expression matches any character which is included in the Arabic Script

```js
/\p{Script=Arabic}/u;
```

You can further customize this regular expression to test start positions, end positions with **`^`** and **`$`** respectively.

Here are some examples

```javascript
let str1 = 'دنیا گول ہے';
let regx1 = /\p{Script=Arabic}/u;

console.log(regx1.test(str1)); //  true

let str2 = 'پہاڑ اور squirrel'; //  starts with Arabic Script Character
let regx2 = /^\p{Script=Arabic}/u;

console.log(regx2.test(str2)); //  true

let str3 = 'religion and دنیا'; //  ends with Arabic Script Character
let regx3 = /\p{Script=Arabic}$/u;

console.log(regx3.test(str3)); //  true
```

<script src='clientside/hello.js' defer></script>
