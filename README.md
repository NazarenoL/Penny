#El Framework que usa alf

##Like a Framework, but better

###Like an Alf, but better

===

### Pre-Install

- First, we need to install [iTerm](https://www.iterm2.com/) because
- In the same way we need NodeJs and NPM. If you don't have them, you should use [Homebrew](http://brew.sh/)
```
brew install node
```
- After NPM installation, we need to install our global dependencies with the next command (**This is only necessary to do once in a lifetime**)
```
npm install -g gulp browser-sync npm-cache bower
```


### Installation

Browse to the root folder of the project and then run

```
npm-cache install bower npm
```


### Use

- Done! Now the only thing you need is run `gulp`

- When the proyect is done run `gulp production`

- Also there's a way to generate html files with critical css inline. Run `gulp critical`


## Features
- **SVG Power!**: Drop svg images in 'svg' folder and, as if by magic (No really, there's a gulp task for that) it will generate 1 file with all of them.

- **Custom fonts Base64** Yeap! Put yours fonts in the 'fonts' folder and drink a beer 🍺


