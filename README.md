## Installation

Using npm:  

```bash
$ npm install searchtools  
```

Require : Lodash  
Require : stringtools  

## SEARCHTOOLS
Searchtools propose few functions to makes your search-engine faster.  

##Function

###searchTools(keywords[String], attr[array*], objects[array**], caseSensitive[boolean], latinize[boolean]) : 
* -> The array look like
```
 [

          {
            "name": "Attribut1"
          },
          {
            "name": "Attribut2"
          },
          {
            "name": "Attribut3",
            "child": {
              "name": "subAttribut3"
            }
          },
 ]
```

** -> It's an array which list the objects you have to browse.
The caseSensitive boolean while allow you to enabled or not the caseSensitive.
The latinize boolean will allow you to check or not the accent and others specials characters.
Keywords : put the word you want to check here . YOu can put few words in the same string, they will be split in an array before the search.
attr :it's an array with the attributes you want to check in your DataBase.
objects: It's an array with the objetcs you want to check in your Database.

Return an associative arrays with [object]->[foreach[attribut->[indices of the keyword]]


  
  



