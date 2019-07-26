# Zadatak 2

[google doc link](https://drive.google.com/drive/mobile/folders/1G-AjDUzgRHLCOfUn5rVhHCENW-7PSIBF?usp=sharing)

Autor: Zoran Lazic

Napraviti mali simulator borbe izmedju **n<=5** jedinica medjusobom.

### Jedinica poseduje sledece propertije
U zagradi je definisana vrednost i kako se racuna dati property<br>
- name
- health **(100)**
- rechargeTime **(1000 * health/100)**
- damage **(health/100)**
- criticalChance **(10 - health/10)**

Da bi jedinica napala, potrebno je da se ispuni **rechargeTime**. Pri svakom napadu, jedinica napada bilo koju drugu random jedinicu koja ima **health > 0**.

_Napomena:_<br>
U pitanju je asihrono ponasanje. Svaka jedinica napada onda kada se recharguje.<br>
Svaka jedinica, moze da bude napadnuta dok napada.

Svaka jedinica koja napadne, samo deliveruje damage, ne dobija nikakav damage.


### Critical Chance
Critical chance se racuna tako sto je **crticalChance >=  random(0, 100);**<br>
Ako je ispunjen uslov za CriticalChance, damage u tom trenutku je dupliran.

Borba traje sve dok su minimum 2 jedinice zive.

Potrebno je takodje logovati tok borbe u konzoli uz pomoc
```js
console.log
```

Kod se treba pokrenuti uz pomoc komande

```sh
node index.js
```


[../README.md](../README.md)
