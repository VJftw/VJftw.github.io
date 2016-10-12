---
layout: page
title: 7CCSMCIS Coursework 1
---

## Caesar Cipher: Exercise

>Use the following relative frequencies in an English text of 1000 letters:

>{: .table .table-striped}
| A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 73| 9 | 30| 44|130| 28| 16| 35| 74| 2 | 3 | 35| 25| 78| 74| 27| 3 | 77| 63| 93| 27| 13| 16| 5 | 19| 1 |

>to decide the most likely shift used to obtain:
```
K DKVO DYVN LI KX SNSYD, PEVV YP CYEXN KXN PEBI, CSQXSPISXQ XYDRSXQ.
```
Don't just *brute force* but proceed strategically. Tally the frequencies of letters in the ciphertext.

{: .table .table-striped}
| A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|   | 1 | 2 | 4 | 3 |   |   |   | 3 |   | 4 | 1 |   | 4 | 1 | 4 | 3 | 1 | 6 |   |   | 4 |   | 7 | 5 |   |

As `X` appears in the ciphertext 7 times and `E` is the most frequent letter in the given table, it is reasonable to assume that `X = E`. If `X = E`, we have a shift of $$-19 \bmod 26$$. This would result in our cipher -> plaintext looking like this:

{: .table .table-striped}
| A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z | A | B | C | D | E | F | G |

Which gives this plaintext for the ciphertext:
```
R KRCV KFCU SP RE ZUZFK, WLCC FW JFLEU REU WLIP, JZXEZWPZEX EFKYZEX.
```
which, doesn't make any sense. Systematically you can then apply `X = ?` where `?` is the next most frequent letter from the given table. This gives `X = T` and finally `X = N` $$-10 \bmod 26$$ where you'll find:

{: .table .table-striped}
| A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Q | R | S | T | U | V | W | X | Y | Z | A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P |

Which gives this plaintext for the ciphertext:
```
A TALE TOLD BY AN IDIOT, FULL OF SOUND AND FURY, SIGNIFYING NOTHING.
```

----

## The Playfair Cipher: Exercise

> Use the keyword "CHARLES" to encrypt the plaintext
>> MEET ME AT HAMMERSMITH BRIDGE TONIGHT

First we construct our $$5 \times 5$$ matrix with the keyword `CHARLES`:
$$
\begin{bmatrix}C & H & A & R & L\\E & S & B & D & F\\G & I/J & K & M & N\\O & P & Q & T & U\\V & W & X & Y & Z\end{bmatrix}
$$


We can then split the plaintext into pairs with `X`s to fill repeated characters when necessary:

```
ME ET ME AT HA MX ME RS MI TH BR ID GE TO NI GH TX
```

We can then cipher this to get:

```
DG DO DG RQ AR KY GD HD NK PR DA MS OG UP GK IC QY
```

And decrypt to get:

```
ME ET ME AT HA MX ME RS M(I/J) TH BR (I/J)D GE TO N(I/J) GH TX
MEET ME AT HAMXMERSM(I/J)TH BR(I/J)DGE TON(I/J)GHTX
MEET ME AT HAMMERSMITH BRIDGE TONIGHT
```

## The Churchyard Cipher (Simplified): Exercise

![alt text](https://docs.google.com/drawings/d/1Q46jjvIEIVu7e_gUorw3IS-b4B6nONyRHOLP2FA6dLc/pub?w=960&h=100 "Churchyard cipher question")

### What kind of cipher is it?

This is a mono-alphabetic cipher as each letter is mapped to one symbol/character in the ciphertext alphabet.

### Why is it so difficult to break? (Especially without the hint!)

It is really difficult to break as it uses a ciphertext alphabet that we are not as familiar with.

### What is the plaintext message?

So, after reading about the pigpen cipher and the tic-tac-toe hint; it's clear that we can place our alphabet inside 3 tic-tac-toe grids and use the surrounding borders as an identifier for each letter; like so:

![alt text](https://docs.google.com/drawings/d/1s8gjJIfxvfbyOEAxWH34FqJ2PFMKCs5aJcHD1YW1pgA/pub?w=960&h=282 "Churchyard cipher intermediate key")


We can guess that the dots refer to which grid to use, but which one? We can easily find out by writing down each combination (there are only 3!):

```
I E D E D B E T   D E A B H
R N M N M K N R   M N J K Q
_ W V W V T W _   V W S T _
```

From here, there is only one sensical phrase: `REMEMBER DEATH`.


### What is the key?

From the above, this makes our key:

![alt text](https://docs.google.com/drawings/d/1TMZ6_K5cHtGatu4Md_Vhtitvd8vo8PDzXRtUg4BhJVg/pub?w=960&h=282 "Churchyard Cipher complete key")

<script src='https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML'></script>
