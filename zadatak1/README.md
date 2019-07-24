# Zadatak 1

[goggle doc link](https://docs.google.com/document/d/1qYclBhKa3I-md-J7EMyaMH2X6mb5OIoIhF-A2gMdoRY/mobilebasic)

Autor: Zoran Lazic



Potrebno je napraviti minimum 3 fajla.

````sh
index.js
functions.js
config.js
````

``index.js`` ce pozivati funkcije iz fajla ``functions.js`` i prikazivati rezultate.



index.js se pokrece komandom

````sh
node index.js
````


Svi ulazni podaci funkcija moraju da se nalaze u fajlu ``config.js``. Promenom podataka u config-u i pokretanjem komande
````sh
node index.js
````
dobice se novi rezultati.



U ``functions.js`` potrebno je napraviti sledece funkcije

#
````js
function random(min, max){}
````

Funkcija random treba da vrati random broj koji je veci ili jednak sa min ili manji ili jednak sa max.


Funkcija kao ulazne parametre sme da primi samo broj. Potrebno je validirati ulazne paramtere i u slucaju nepravilnih parametara, ispisati gresku.


Primer
````js
random(1, 2) //  can return value  1, 2
````

#
````js
function minIntegerFromArray(array) {}
````

Potrebno je vratiti najmanji broj koji se nalazi u nizu (array.length > 5). Niz ne mora da bude samo niz brojeva, vec moze sadrzati bilo sta kao clan niza. U slucaju da ne postoji ni jedan broj u nizu, vratiti false


Potrebno je validirati funkciju i prikazati adekvatnu gresku u slucaju neispravno unetog niza.


Primer

````js
const array  = [1, ‘etf’, ‘kgj’, 4, 0, 2]

minIntegerFromArray(array) // return 0
````

#
````js
function minIntegerFromString(string) {}
````

U ovu funkciju se unosi neki string >= 10 karaktera. Funkcija mora da proveri da li u tom stringu postoje celi brojevi (integeri) i da kao rezultat vrati najmanji od postojecih brojeva ili false ako nije nadjen ni jedan.


Potrebno je validirati funkciju i prikazati adekvatnu gresku u slucaju neispravno unetog stringa.


Primer

````js
minIntegerFromString(‘Danas, 17tog Septembra, bice hladnije nego juce u 20h, 16og Septembra’) // return 16
````

#
````js
function concatStringsByLength(arrayOfStrings, type) {}
````

Funkcija ima dva ulazna paramtera. Prvi je niz stringova, a drugi je tip koji moze imati vrednost 0, ili 1.


Funkcija kao rezultat  treba da vrati sve stringove koji su uneti spojene u jedan, ali po odredjenom redosledu. Redosled se odredjuje na osnovu tipa. Za tip 0 vraca se string spojen od najmanjeg ka najvecem, za tip 1 vraca se string spojen od najveceg ka najmanjem


Primer

````js
const arrayOfStrings = [‘abc’, ‘ac’, ‘bdca’, ‘edagas’]

type = 0

concatStringsByLength(arrayOfStrings, type) // return acabcbdcaedagas
````


Primer 2

````js
const arrayOfStrings = [‘abc’, ‘ac’, ‘bdca’, ‘edagas’]

type = 1

concatStringsByLength(arrayOfStrings, type) // return edagasbdcaabcac
````