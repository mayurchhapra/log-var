# **log-var**
This package will help you to print logs handy. I make this package because I bored to write `console.log()` every time for log the value. Now it makes my code easier. Currently this package is in initial phase. I will try to add some more functionality to make it more useful. I alway lookig for best parts. So, if you have any suggestion, please comment it, If any issue, notify me. Your fork will be appreciated.

## **Introduction**
Basicaly this package contain two variables. `_` and `type`.

* **`_`** is used to print the log on the console.
* **`type`** is used to know the type of the variable.

## **How to use?**

### **ES5**

import the package:

    const {_, type} = require('log-var');
declare the variable and log.

    const value = 10;
    value._         // 10
    value.type      // number
or you can simply log the value like

    using string:

    "This is simple example of log-var"._       //this will print string to the console.
    "This is simple example of log-var".type       //string

    Using numner:
    10._        // 10
    10._        //number

Explore it, This will make your life easier.