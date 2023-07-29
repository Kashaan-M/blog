---
layout: layouts/base.html
title: How to run Python Script inside Node JS App
description: Build Apps that use the best of both Python and Node JS
date: 2023-02-19
tags: ['post']
---

<h1 style="font-family:Verdana,sans-serif"> How to run Python Script inside Node JS App</h1>

Python and Node JS have their own capabilities. Node JS is primarily used for building apps that are not computationally intensive.If we need to build apps that require a lot of computing resources then Node JS is not ideal because it runs in a single process.

However Node JS has a [**child_process**](https://nodejs.org/dist/latest-v18.x/docs/api/child_process.html) module with which we can run sub processes from inside a Node JS App !

We will use `child_process` module in combination with `bash scripting` to run a Python Script from inside Node JS

[Here](https://github.com/Kashaan-M/computer-programs/blob/main/extract.py) is the python script we will be using. This script will read a `.docx` file , analyze it and write to it. You can find more information about how it works on GitHub.

Let's start !

Make a new directory. We can name it node-python-app

```bash
mkdir node-python-app
```

We will keep it really simple for now. We will create a Node JS script and execute it from the command line. This way we won't need to setup a `package.json` file.

```bash
touch app.js
```

Now we have an `app.js` file inside our `node-python-app` directory. At this point you should also create an `extract.py` file inside this directory and copy paste the code from [here](https://github.com/Kashaan-M/computer-programs/blob/main/extract.py)

We will need a word document on which `extract.py` will perform operations. For that you should download [this file](https://github.com/Kashaan-M/computer-programs/blob/main/dickens.docx) and place it inside `node-python-app` directory.

This file contains styled text from the first chapter of "A tale of Two Cities" by Charles Dickens.

Now let's create a shell script with which we can automate the execution of python script.We will create a `script.sh` file in root directory

```bash
touch script.sh
```

We will add the following code to `script.sh` file

```bash
#! usr/bin/bash
python3 extract.py dickens.docx
#For Windows
#py extract.py dickens.docx
```

You will need to install Python on your computer. Also you will need the `python-docx` package in order for `extract.py` to work as it is a dependecy of it.

To install `python-docx` type

```bash
pip install python-docx
```

This shall install the package in the global scope. If you are comfortable with creating virutal environments in Python you should do so.

Finally, our directory should look like this

```bash

node-python-app
-- app.js
-- extract.py
-- dickens.docx
-- script.sh
```

Open `app.js` in text editor and write the below code in it

```javascript
const { exec } = require('child_process');
const http = require('http');

const port = 5000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    exec('bash script.sh', (err, stdout, stderr) => {
      if (err) {
        console.log(err);
      } else {
        res.write(stdout);
        res.end();
      }
    });
  }
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
```

The `exec()` function is used to run the bash script which contains the commands for running the python script.The first argument to `exec()` is the shell command and the second argument is a callback function in which we first check if there was an error and, in that case, output error to console.Else,in case of no error, we attach the console output from our python script to our response object which returns it.

At this point you should check out the `dickens.docx` file and what it contains (and close it).

Now open your terminal or command prompt or powershell in the `node-python-app` directory and type

```bash
node app.js
```

Go to your browser and type `localhost:5000` and hit Enter.

After you visit this URL in the browser, open the `dickens.docx` file again and you will see it has changed!

Here I have created a very simple server to demonstrate how we can execute a sub process on the server side with Node JS. We can add more business logic and facilitate ourselves by using Express JS but that could be another blog post.
