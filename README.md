## Installation

Using npm:  

```bash
$ npm install searchtools  
```
##Dependencies
```
  "dependencies":{
    "lodash":"3.10.1",
    "stringtools":"O.O.1"
  }  
```
## SEARCHTOOLS
Searchtools propose few functions to makes your search-engine faster.  

##Function

######searchTools(__keywords__:String, __attributes__ :array, __objects__:array, __caseSensitive__:boolean, __latinize__:boolean) : 

  Keywords : put the word you want to check here . You can put few words in the same string, they will be split in an array before the search.

  
  Attributes : It's an array with the attributes of each objects you want to brows. The array looks like
```
 [

          {
            "name": "Title"
          },
          {
            "name": "Article"
          },
          {
            "name": "Edition",
            "child": {
              "name": "ID"
            }
          },
 ]
```


 Objects :  It's an array which list the objects you have to browse, from the database for examples.
 
 The caseSensitive boolean while allow you to enabled or not the caseSensitive.
 The latinize boolean will allow you to check or not the accent and others specials characters.



  
  



