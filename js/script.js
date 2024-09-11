//HTML elemek elérése:
const but3 = document.querySelector('ul li:last-child a');
but3.textContent = 'Új szöveg';
but3.style.backgroundColor = 'black';
but3.style.display = 'None'
const card = document.querySelector('.card')
card.style.backgroundColor = 'red';
const fDiv = document.querySelector('.float-div');
const p = document.createElement('p');
const text = 'Ez egy hosszú szöveg';
p.textContent = text;
fDiv.appendChild(p);
p.style.fontSize = '1.2rem'


// Változók, típusok, operátorok
/* 
Változók - var, let -> let a = 23;
let -> block scope
var -> function (függvény) scope

állandó - const
const a = 10;
blockscope

Elemi típusok:
- 'string', "string" , `string (template) literal ${}`
- number: 3, 3.14   parseInt(), parseFloat(), Number()
Math.round(3.56) -> 4
3.57.toFixed(1) -> 3.5
3.56.toFixed(1) * 10 -> 36
3.56.toFixed(1) + 10 -> 3.5610 -- number konvertálása sztringgé, konkatenálás
NaN -> number, a szám számosságát vizsgálja
- boolean
- undefined (érték és egybe típus is) -> Nincs definiálva, de majd lesz
- null -> vagy null a definiált értéke, vagy semmit sem adtak neki értékül

Operátorok:
+ (túlterhelt), *, -, / % (modulo, modulus), // =, ++ (inkrementális), -- (dekrementálás)

Összehasonlító: <, >, <=, >=, == (egyezik-e -> str), === (típusban is hasonlít)

Logikai: negálás -> !, and -> &&, or -> ||

A JS gyengén típusos nyelve:
- ==
- 3 + '4' -> '34'
- 3 * '4' -> 12
*/