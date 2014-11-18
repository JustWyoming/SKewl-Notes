#WDI Week 1
##Day 1

###GitHub for Class and Notes:
[GitHub WDI](http://github.com/wdi-sea-01)

##Morning Notes:
* went over hipchat
* went over Mou and markdown
	* experimenting with Markdown sub menus
	* email wyoming <wyomingt@gmail.com>
* went over notes uploading and format for GitHub

##Afternoon Notes:
###terminal commands
* downloaded iterm2 and set up folder to store called wdi
* navigated to current folder
* `cd` is current directory
* `ls` lists contents of folder
* `pwd` shows working directory
* `touch` creates new file
* used our shortcut `subl` to open sublime text editor
* if you get stuck in vim you can use `esc:q` to quit
* `cp` is copy
* `mkdir` is new folder
* `mv` is move
* `grep` finds a string of text that the user specifies. ex: `grep hello` would bring anything that has hello in it from your working directory.
* using | (pipe) allows you to use other programs along with your command. 
* tab finishes auto-completing up to the difference in the new text you are typing.
* a parameter is the arguments that you are putitng into the command. ex: cp is copy. `cp newfile.js temp` copies the new file to your temp file
* `/` makes the folder at the root of your directory every time, if you don't start the path with a / it becomes relative to the folder you are currently working in.
* to use an absolute path you could do a `.` for every current directory. `..` is two directories. ex: `mv newfile.js ./wdi`
* `rm -rf` forces to remove entire contents and folder rather than deleting every file first then the folder
* `brew` brings brew directory up
* `man` brings up manual to check your commands of whatever program you are using.
* brew installed `trash` feature that moves files to the trash when you use the trash command, so you can make sure you do not rm a file you need on accident
* `clear` clears the screen
* `history` brings up your history. you can make it further specific to make it shorter and more concise ex: `history | git` brings up anything in my history that has git in it


###Git and GitHub History
* projects exist centrally on github and keeps history and revisions so that changes do not overwrite each other
* very fast to save new work and not waste time in complicated workflows.
* is the industry standard for group project work
* Git is the opensource project, and GitHub is a web app that is used for collaboration.  other versions and web apps are out there
* Git will be used daily, in all coding environments and jobs.  PREREQUISITE for web dev

###Git commands
* `git` starts command
* `git clone` plus the SSH link of the git directory clones the remote repo to your desktop
* up down arrows copy previously typed terminal commands
* `git pull` will fetch updates
* forking creates a virtual copy of the project on your github account.  it's not a GIT property, it's a feature of github
* `~` is a root command shortcut
* `ls -a` means show hidden files too
* `ls -la` formats the hidden files in a formatted list with timestamps and additional information
* `cat` lists details contained in the file you type as a parameter. ex: `cat .gitignore`
* `open` in terminal opens default open folder in whatever program is related
* `git init` creates a project and initializes it as a repository
* `git status` give status of current repository
* if git status displayed 'untracked' files it means they haven't been added to the log for the project
* you then have to commit the file 
* `git add -A` adds all untracked files
* you can also `git add` individual files, or files by type. for example to add all html files you would do `git add *.html` adds all html files
* when you add untracked files it marks them to be committed
* they are not committed until you type `git commit -m` and type description message to go along with the commit
* after the repo has been added you don't have to `add` you just continue to use the `commit` command for untracked changes by using `git commit -am` and the message in quotes to follow for the commit. 
* ex: `git commit -am "edited index on git repo"`

###Make Git Hub Personal Page
* added repo from web client with `JustWyoming.github.io` address
* uploaded about me doc we created pre-class
* committed files and pushed to new repo

#WDI Week 1

##Day 2

###Javascript History:

* loosely based on Java, but nothing alike these days, a lot of diversion.
* front end and back end means code runs in browser vs code that runs in the servers/back end.  historically Javascript is a front end language
* now javascript can run backend thanks to v8 engine and google chrome. we can use scripts now on server side and front.
* node js comes from the open source v8 engine model. 
* javascript can now cross over.
* comparative languages are Ruby, Python and Node JS

###Javascript details:
* comments in javascript are notated by `//` 
* comments are used for notes for other developers and to remember and layout your code before you execute it.
* `cmd /` will create a comment in whatever language you are working in
* access node in terminal by typing `node`
* escape node by typing `ctr c c`
* strings are text between ` "text"`
* numbers
* boolean always equate to true or false
* variables are ` var taco = "this is a taco";`
* unlike ruby you use `var` to create a variable the first time.
* javascript lets you get away with shady code, but it can have far reaching problems. ex `cheese = 5` becomes a global variable and override your program. which is why you use `var cheese = 5`
* `cmd k` clears node string
* array is `var a = [1, 3, "text"]`
* `.length` brings the length of a string, variable, etc
* `a[a.length-1]` brings the length of the array - 1
* in arrays and strings, the positions in a count always start at 0 ex: `[1,3,"test"]` puts 1 in the 0 position,
* objects are defined in curly braces ex: ` var person = firstName:, "Jane", lastName: "Smith", age:34};`
* you can call the var using `person` which returns `Jane`
* you can call the persons age using `person.age` which returns `35`
* you can call person and firstName using `person.firstName;` which returns `Jane`
* lines should end in a `;` but sometimes when you're working in a console you don't need them.  good to do it
* you DON'T use `;` before and after closures for loops (if/ else)
* `a.push("new value");` extends the length of the a array to 8 and adds the value
* questions on Javascript go to MDN for the best documentation, and on other languages.  
* `a.reverse();` reverses the order of an array it's a `method` so you have to have the `();`
* when you use `.reverse();` the array stays in reverse unless you reverse it again.
* so when you call an item in the array after it reverses it returns it's new position. ex: `a[0];` returns `"new value"` instead of `3`
* `var myVal = a.pop();` pops an item off the end of an array - everytime you run it
* `.push` puts it in the array
* `a.shift("this");` takes the first item of the array away
* `a.unshift("this");` adds an item to the first position of an array
* `a[6] = "those"` adds the item to the position in the array specified.
* also methods for strings ` var s = "this is a string";`
* `s.length` brings length  of a string including spaces
* `var newA = s.split(" ");` splits items in a string to an array
* `s.replace("this,"that");` replaces a specified item in the array with a new one
* `s.split(i);` takes out i from the strings
* `s.substring(0,4);` gives you characters between 0 and 4
* `s.substr(1, 4);` brings you 4 characters but shifts the position to the first
* `var num = "3.14"` makes a string called num
* `num` returns the string `'3.14'`
* `parseInt(num);` turns it into a number rather than a string
* so when you run`num` you get 3
* `parseFloat(num);` brings the whole number not rounded to the integer
* Object called Math in Javascript
* `Math.round(3,2);` rounds down
* `Math.ceil(3,1);` gives the ceiling
* `Math.floor(3,2);` returns the floor
* `Math.abs(3.2);` returns an absolute 
* `Math.random();` returns a random number
* `Math.random()*10;` multiplies random number by 10
* `parseInt(Math.random()*10);` gives the number multiplied by 10 to the closest whole number
* ` var c = a.concat( b );` method to combine two arrays
* `var a = foods.indexOf("Pho") -1;` indexOf is a method to call a specific item from an array. In the example above it has -1 to get the rank number properly to account for the 0 position in the index
* `foods.splice(foods.indexOf("Donuts"));` finds index of Donuts and removes it (specific index in array and remove)
* `var selects = foods.slice(4,10);` creates a new array from foods array and selects just the indexes indicated
* `var people = {
  'Moe' : 18,
  'Larry' : 19,
  'Curly' : 20,
  'Jane' : 20,
  'Emma' : 21,
  'Elizabeth' : 18,
  'Elinor' : 23,
  'Mary' : 25,
  'Darcy' : 24,
  'Grey' : 18,
  'Lydia' : 24,
  'Harriet' : 18
};` creates an object called people with multiple keys and values
* Function for median of an array 

###Javascript Exercises:
* to create a new test js file in sublime `subl test.js`
* type some text and save and run `ls' to see the file appear in your working directory
* `console.log("hello World!");` in your test.js file and save
* in terminal `node test.js` returns our "Hello World" string
* add `var person = {firstName:"Jane",lastName:"Doe"};
console.log("hello " +person.firstName+"!");` to test.js and save
* back in terminal run `node test.js` again to display "hello Jane!"

###Day 2 Exercise:
* Function for median of an array :

```

var ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];

	function median(ages) {
		ages.sort( function(a,b) {return a - b;});

		var half = Math.floor(ages.length/2);

		if(ages.length % 2)
			return ages[half];
		else
			return (ages[half-1] + ages[half]) /2.0; }

var ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];

console.log(median(ages));
```





