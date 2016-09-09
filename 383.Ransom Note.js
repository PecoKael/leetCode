/*
  *Given  an  arbitrary  ransom  note  string  and  another  string  containing  letters from  all  the  magazines,  write  a  function  that  will  return  true  if  the  ransom   note  can  be  constructed  from  the  magazines ;  otherwise,  it  will  return  false.   
 *Each  letter  in  the  magazine  string  can  only  be  used  once  in  your  ransom  note.
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    for (var x in ransomNote){
        if (magazine.indexOf(ransomNote[x]) == -1){
            return false;
        } else {
            magazine = magazine.replace(ransomNote[x],'');
        }
    }
    return true;
};