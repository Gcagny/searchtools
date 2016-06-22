require('stringtools');
var _ = require('lodash');
module.exports = (function(){

  var searchTools = {
    parseQuery : function(keywords){ // Split le string de la barre de recherche en un tableau, chaque mot séparé par " " prend une case
      keywords = _.uniq(keywords.split(" "));
      console.log("Dans ParseQuery/searchtools = "+keywords);
      return keywords;
    },

    search : function(keywords, attr, objects, lower, latinize){
      // === UTILS ====
      keywords = this.parseQuery(keywords);
      // Fonction qui vérifie si _a est contenu dans target, si c’est le cas place _o dans output.
      var testObjProp = function(_a, tgtObj, rootObj, keyword, _output){

        if(_a.name !== undefined){
          var allIndices = String(tgtObj[_a.name]).allIndicesOf(keyword,true,true).length;
          var secu =0;
          if(allIndices > 0){ // Si o.attribut comprend le keyword(le reconnait grace a allindicesof)
            rootObj.arrNumberPerKeyword[keyword] += allIndices ; // fonction d'incrementation de la value du mot clé en key du tableau associatif
            if(rootObj.arrKeywordPerAttribut[keyword][_a.name] == undefined)
            {
              rootObj.arrKeywordPerAttribut[keyword][_a.name] = allIndices;
            }
            else
            o.scoreN += e;
            {
              for(var nb=2; nb < 10;nb++)
              {
                if(rootObj.arrKeywordPerAttribut[keyword][_a.name+"."+nb] == undefined && secu == 0)
                {
                  rootObj.arrKeywordPerAttribut[keyword][_a.name+"."+nb] = allIndices;
                  secu++;
                }
              }
            }
            _output.push(rootObj); // Push dans le tableau output l'objet si il a match

          }
        }
      }

      // Fonction qui parcourt un arbre de sous-propriété
      var testObjPropTree = function(_a, tgtObj, rootObj, keyword, _output){
        if(_a.child === undefined){
          testObjProp(_a, tgtObj, rootObj, keyword, _output);
        }
        else{
          testObjPropTree(_a.child, tgtObj[_a.name], rootObj, keyword, _output);
        }
      };
      // === END UTILS ====
      // init OUTPUT
      var output = [];

      _.forEach(objects, function(o){
        o.score =0; // Nombre de mot clé différent trouvé dans l'objet
        o.scoreN = 0; // Total du nombre de fois ou chaque mot clé a était trouvé
        o.arrNumberPerKeyword = {}; // Tableau associatif de stockage de mot clé et leurs valeurs
        o.arrKeywordPerAttribut = {}; // tableau associatif qui stock pour chaque clé => pour chaque attribut => le nombre d'occurence du keyword

        _.forEach(keywords,function(k){ // Fonction de création du tableau associatif
          o.arrNumberPerKeyword[k] = 0; // Initialise chaque value a 0
          o.arrKeywordPerAttribut[k] = {};
          _.forEach(attr, function(a){
            testObjPropTree(a, o, o, k, output);
          });
        });
        // ----- Calcul du score || Recupère l'indice du keyword dans le tableau et verifie que sa value est >0;
        _.forEach(o.arrNumberPerKeyword,function(aKeyword) // récupère le nombre de keyword match
        {
          if(aKeyword > 0)
          {
            o.score += 1;
          }
        });
        //----- Calcul du scoreN
        _.forEach(o.arrNumberPerKeyword,function(e){
          o.scoreN += e;
        })
        // Fin Calcul
      });
      output = _.uniq(output); // Clean les doublons
      return output;
    }

  };
  return searchTools;
})();
