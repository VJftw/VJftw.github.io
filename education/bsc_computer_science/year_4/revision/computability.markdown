---
layout: page
title:  ECS631U - Computability Notes
---

# Introduction
This course aims to teach and prove the abilities and limitations of computers with maths.

**Decision Procedure:** Studies the general algorithms that determine the termination of a computer program.

## Numbers

{: .table .table-striped}
| Class                     | Examples                          | Description
|---------------------------|-----------------------------------|-------------
| Natural ($$\mathbb{N}$$)  | $$3$$, $$30$$                     | Positive numbers including $$0$$.
| Integer ($$\mathbb{Z}$$)  | $$-3$$, $$3$$                     | Positive and negative numbers.
| Rational ($$\mathbb{Q}$$) | $$0.6$$, $$\frac{3}{5}$$          | Decimal numbers.
| Real ($$\mathbb{R}$$)     | $$\pi$$, $$\sqrt{2}$$, $$e$$      | Not enumerable. All numbers but not imaginary.
| Imaginary                 | $$\sqrt{-1} (i)$$                 | When squared, give a negative result.
| Algebraic                 | $$\sqrt{2}$$, $$\sqrt{-1} (i)$$   | A root of a non-zero polynomial equation.
| Transcendental            | $$\pi^{\pi}$$, $$\pi$$, $$e$$     | Cannot be defined by an algebraic expression. All incomputable numbers are this, but not all transcendental numbers are incomputable (e.g. $$\pi$$).

**Computable Numbers:** A real number whose decimal expansion is *computable by finite means* or *written down by a machine*.

### Fermat's Last Theorem
states that there is no  $$\mathbb{N} > 2$$ can satisfy $$a^n + b^n = c^n$$.

-----

# Sets and Functions

### Function
A map from a set to a set that assigns each element of the first set a *single* element of the second set. *Many-to-one* allowed. A function from a set to itself is called an *endofunction*.

$$A = \lbrace a_1, a_2, a_3 \rbrace \quad B = \lbrace b_1, b_2, b_3 \rbrace$$

$$f(a_1) = b_2 \quad f(a_2) = b_1 \quad f(a_3) = b_2$$

## Injective, Surjective, Bijective

### Injective

Every member of $$A$$ has *its own unique* matching member in $$B$$. *one-to-one* but not all inclusive of $$B$$.

e.g. $$b_4$$ is left out.

$$A = \lbrace a_1, a_2, a_3 \rbrace \quad B = \lbrace b_1, b_2, b_3, b_4 \rbrace$$

$$f(a_1) = b_2 \quad (a_2) = b_1 \quad f(a_3) = b_3$$


### Surjective
Every element in $$B$$ has at least one mapping from $$A$$. *Many-to-one* allowed but must be all inclusive of $$B$$.

e.g. all elements in $$B$$ have a mapping from $$A$$.

$$A = \lbrace a_1, a_2, a_3, a_4, a_5 \rbrace \quad B = \lbrace b_1, b_2, b_3, b_4 \rbrace$$

$$f(a_1) = b_2 \quad (a_2) = b_1 \quad f(a_3) = b_3 \quad f(a_4) = b_4 \quad f(a_5) = b_3$$

### Bijective
A function, $$f: A\rightarrow B$$, is bijective if there is a one-to-one mapping from every element in $$A$$ to every element in $$B$$ such that it is both injective and surjective. *one-to-one* inclusive of $$A$$ and $$B$$.

$$A = \lbrace a_1, a_2, a_3, a_4 \rbrace \quad B = \lbrace b_1, b_2, b_3, b_4 \rbrace$$

$$f(a_1) = b_2 \quad (a_2) = b_1 \quad f(a_3) = b_3 \quad f(a_4) = b_4$$


## Proofs

In general, when a proving a Bijection, provide proof that it is a function, injective and surjective.

### Give a bijection between the set of Odd numbers and the set of Natural numbers and provide proof that it is a bijection

$$ \text{let } A = \text{ the set of Odd numbers} \quad B = \text{the set of Natural numbers} $$

A map between these two sets is

$$f(a) = \begin{cases}
    -(a + 1), & \text{if } a < 0.\\
    a, & \text{otherwise.}
\end{cases}$$

This results in a mapping like:

$$-5 \rightarrow 4, \quad -3 \rightarrow 2, \quad -1 \rightarrow 0, \quad 1 \rightarrow 1, \quad 3 \rightarrow 3, ...$$

1. This is a function because every odd number is mapped to a single natural number as it is impossible for an $$a + 1$$ to result in two different numbers.
2. This is injective because every odd number is mapped to a unique natural number as it is impossible for $$a + 1$$ to result in an odd number.
3. This is surjective because every natural number is included in the mapping as I have accounted for $$0$$ and an inverse function can be defined as:

    $$
    f^{-1}(b) = \begin{cases}
        -(b + 1), & \text{if } b \text{ is even}.\\
        b, & \text{otherwise.}
    \end{cases}
    $$

    The above proofs of function, injectivity and surjectivity show that this is a bijection.


### The Inverse of a Bijection is a Bijection

The inverse of a function $$f: A \rightarrow B, \quad f^{-1}: B \rightarrow A$$ and is defined for all $$a \in A$$ and $$b \in B$$.

$$f^{-1}(b) = a \quad \text{iff} \quad f(a) = b$$

To show that $$f^{-1}$$ is also bijection when $$f$$ is a bijection, we have to show that it is a function, injective and surjective.

1. $$f^{-1}$$ *must* be a function as it is not possible that a single element $$b_1 \in B$$ is mapped to more than one element in $$A$$.

    If $$f^{-1}(b_1) = a_1 = a_2$$, then $$f(a_1) = f(a_2) = b_1$$.

    This is contradictory as we know that $$f$$ is injective (every element in $$A$$ has its own unique matching member in $$B$$).

2. $$f^{-1}$$ *must* be injective as it is not possible that two different elements $$b_1, b_2 \in B$$ are mapped to a single element $$a \in A$$.

    If $$f^{-1}(b_1) = a$$ and $$f^{-1}(b_2) = a$$, then $$f(a) = b_1, b_2$$.

    This is contradictory as we know that $$f$$ is a function (every element in $$A$$ has a *single* matching in $$B$$)

3. For each element $$a \in A$$, there is an element $$b \in B$$ such that $$f^{-1}(b) = a$$.

    This is satisfied by $$f(a) = b$$, which shows that for a given $$a$$, there is a $$b$$ and thus vice-versa.

## Cardinality
Two sets have the same cardinality if and only if there exists a bijection between them:

$$|A| = |B| \quad \text{iff there exists} \quad f: A \rightarrow B \quad \text{and} \quad f \text{ is one-to-one}$$

## Diagonal Lemma
Reals ($$\mathbb{R}$$) and naturals ($$\mathbb{N}$$) do not have the same cardinality and thus do not have a bijection between them. Suppose we have a bijection that listed the set of reals, we can take an element from each number and increment it by 1 to get a completely new real number. e.g.

$$0.123 = 0.223$$

$$0.234 = 0.244$$

$$0.345 = 0.346$$

$$= 0.246$$

## Proofs

### Prove that there is a bijection between the set of subsets of set $$A$$ and the set of functions from $$A$$ to $$\lbrace 0, 1 \rbrace$$

We are looking for $$f: \mathcal{P}(A) \rightarrow \lbrace 0, 1 \rbrace ^A$$ where $$\mathcal{P}$$ is the powerset (set of subsets) of $$A$$.

This is equivalent to a map that takes a subset of $$A$$ and an element of $$A$$ and returns $$0$$ or $$1$$:

$$f: \mathcal{P} \times A \rightarrow \lbrace 0, 1 \rbrace$$

For $$T$$, a subset of $$A$$, we can define a map as follows:

$$f(T)(a) = \begin{cases}
    0, & a \notin A.\\
    1, & a \in A.
\end{cases}$$

e.g. if $$A = \lbrace 1, 2, 3 \rbrace$$ and $$T = \lbrace 1, 2 \rbrace$$ we get

$$f(\lbrace 1, 2 \rbrace)(1) = 1, \quad f(\lbrace 1, 2 \rbrace)(2) = 2, \quad f(\lbrace 1, 2 \rbrace)(3) = 0$$

### Prove that there can be no bijection between a set $$A$$ and the set of functions from $$A$$ to $$\lbrace 0, 1 \rbrace$$.
let $$X = \text{ the set of functions from } A \text{ to } \lbrace 0, 1 \rbrace$$.

We know that for a bijection to exist, both sets must have the same cardinality. $$X$$ will have a different cardinality to the $$A$$. If $$ \left\vert{A}\right\vert = n $$, then $$ \left\vert{X}\right\vert = 2^n $$.

This can also be proved with the diagonal lemma by forming a new subset that is not in $$X$$.

----

# Turing Machines
A Turing Machine consists of:

{: .table .table-striped}
| Part      | Description
|-----------|-------------
| Tape      | Analog of paper, divided into sections(squares) each capable of bearing a symbol.
| Head      | At any moment has one symbol in it. The square of this symbol is called a scanned square. The $$r$$th square and its symbols are denoted by $$S(r)$$.
| Symbols   | Are either (0, 1) standing for decimal expansions of numbers or rough notes to assist the memory.
| Moves     | Changes of machine and tape between two successive complete configurations.


### Definitions:
 - **m-configurations** are a finite set of conditions: $$\lbrace q_1, q_2, ..., q_r \rbrace$$
 - **Complete configuration** at any moment:
    - The number of the scanned square.
    - The complete sequence of all symbols on the tape.
 - **Circular:** The machine halts (stops printing output).
 - **Circle-Free:** The machine continuously prints symbols(numbers) forever.
 - **Computed sequence:** The binary subsequence of symbols on the tape ignoring other symbols ($$0101001$$).
 - **Computed number:** $$0.$$ in front of the *computed sequence*. This can be converted into a real number using binary expansion.
 - **Computable sequence:** a sequence computed by a *circle-free* machine.
 - **Computable number:** a real number whose decimal expansion is *computable by finite means* or *written down by a machine*. It can be represented by a *circle-free* machine.
 - **E and F squares:** *E* squares are volatile, in that they can be erased and have a variety of non-binary letters such as $$e$$ and $$\text{x}$$ printed on them. The symbols on *F* squares form a continuous sequence. These are useful for convention.

## M-Configurations

{: .table .table-striped}
| m-config   | symbol     | operation | m-config
|------------|------------|-----------|---------
| $$q_1$$      | $$1$$        | $$P0, R$$   | $$q_1$$


## Standard Configuration

### Standard Form

1. Only the following operations are allowed:

    {: .table .table-striped}
    | Operation | Description
    |-----------|------------
    | $$\_$$       | Do nothing
    | $$E$$       | Erase
    | $$E, R$$    | Erase, move right
    | $$E, L$$    | Erase, move left
    | $$Px$$      | Print $$x$$ (will overwrite)
    | $$Px, R$$   | Print $$x$$, move right
    | $$Px, L$$   | Print $$x$$, move left
    | $$R$$       | Move right
    | $$L$$       | Move left

2. **Number the configurations** in the form $$q_n$$.
3. **Number the symbols**:

    {: .table .table-striped}
    | Symbol    | Number
    |-----------|--------
    | _         | $$S0$$
    | 0         | $$S1$$
    | 1         | $$S2$$
    | e         | $$S3$$
    | x         | $$S4$$

4. The lines should be in the following standard forms:

    $$N1 = q_i \text{  } S_j \text{  }  PS_k \text{  } L \text{  } q_m$$

    $$N2 = q_i \text{  } S_j \text{  }  PS_k \text{  } R \text{  } q_m$$

    $$N3 = q_i \text{  } S_j \text{  }  PS_k \text{  } q_m$$

    *(Abbreviated):*

    $$N1 = q_i \text{  } S_j \text{  }  S_k \text{  } L \text{  } q_m$$

    $$N2 = q_i \text{  } S_j \text{  }  S_k \text{  } R \text{  } q_m$$

    $$N3 = q_i \text{  } S_j \text{  }  S_k \text{  } q_m$$

### Standard Description
a complete description of a machine. It only consists of the following alphabet:
$$A, C, D, L, R, N, ;$$

Given a configuration of in standard form ($$q_i \text{  } S_j \text{  } S_k \text{  } R \text{  } q_m$$):

- Replace $$q_i$$ with $$D$$ followed by $$A$$ repeated $$i$$ times.
- Replace $$S_j$$ with $$D$$ followed by $$C$$ repeared $$j$$ times.
- Replace $$S_k$$ with $$D$$ followed by $$C$$ repeared $$k$$ times.
- Replace $$q_m$$ with $$D$$ followed by $$A$$ repeated $$m$$ times.
- The configuration ends with a $$;$$
- $$N$$ is for no move???


### Description Numbers
Uniquely identifies a machine.

With a standard description:

{: .table .table-striped}
| Character | Number
|-----------|--------
| A         | 1
| C         | 2
| D         | 3
| L         | 4
| R         | 5
| N         | 6
| ;         | 7


A Turing machine with D.N. $$n$$ is described by $$M(n)$$. This can be read as "machine number n".

Each computable sequence has a description number assigned to it. This means that the set of computable sequences have the same cardinality as the set of natural numbers and is therefore *enumerable*.

**Satisfactory Number:** If a D.N. is *circle-free*. There is no general procedure for determining a given D.N. is satisfactory (if a machine will halt on a given input) without running it.


## Universal Turing Machines
Are arguably the first general purpose computers conceived. They take an input of an *Individual Machine*'s D.N. and run it.

**Individual Machine:** Can only perform specific operations. Denoted by $$M$$.

**Universal Turing Machine:** A machine that can run the D.N. of other machines. It can compute any computable sequence and is *programmable*. Denoted by $$U$$.


## Proofs:

### Diagonal Lemma is NOT applicable to Computable sequences
So if we apply the diagonal lemma to the set of computable sequences:

$$\text{let } A = \text{the set of computable sequences}$$

$$\alpha = a_1a_2a_3 ..., a \in A$$

$$\beta = b_1b_2b_3 ..., b \in A$$

$$\gamma = c_1c_2c_3 ..., c \in A$$

$$ ... $$

We can find a new sequence by:

$$p = (a_1 + 1)(b_2 + 1)(c_3 + 1) ...$$

Whilst this new sequence is not in the original list, we do not have proof that it is a computable sequence. It could represent a transcendental number than cannot be computed in a finite number of steps.

### We cannot decide if a Description Number is Satisfactory or not
Given a Universal Turing machine, $$U$$, and a D.N, $$U$$ cannot determine if the D.N. is satisfactory without running it, because it would have to evaluate its own D.N. which is impossible as the evaluation would happen recursively forever.???

----

# Binary Operations

## Addition
Same as normal addition, carry the 1. e.g.

```
  101
+ 111
-----
 1100
 111
```

## Multiplication
Shift for each positive bit.

```
    101
x   111
-------
    101
   1010
+ 10100
-------
 100011
  11
```

## Shift
**Right shift:** Divide by 2

**Left shift:** Multiply by 2

----

# Modern Turing Machines

The intuitive notion of *reasonable* models of computations is equivalent to Turing machines.

There is an algorithm to compute a function if and only if there is a Turing machine that computes this function.

## Definition

A Turing machine $$M$$ is $$\lbrace Q, \Sigma, \Gamma, \delta, q_0, q_a, q_r \rbrace$$ where:

{: .table .table-striped}
|           |           
|-----------|-----------
| $$Q$$       | The finite set of states.
| $$\Sigma$$  | The input alphabet not containing the blank symbol, $$\_$$.
| $$\Gamma$$  | The tape alphabet where $$\_ \in \Gamma \text{ and } \Sigma \subset \Gamma$$.
| $$\delta$$  | $$\delta : Q \times \Gamma \rightarrow Q \times \Gamma \times \lbrace L, R \rbrace$$ is the transition function.
| $$q_0$$     | The start state
| $$q_a$$     | The accepting state
| $$q_r$$     | The rejecting state

## Transition Function

$$\delta : Q \times \Gamma \rightarrow Q \times \Gamma \times \lbrace L, R \rbrace$$

$$\delta(q, a) = (r, b, L)$$ means that in state $$q$$ where head reads tape symbol $$a$$, the machine:

1. Writes $$b$$ over $$a$$ (they can be the same symbol).
2. Enters state $$r$$.
3. Moves head left on the tape.

If $$\delta(q, a)$$ is undefined, assume that we should enter the reject state $$q_r$$.

If $$M$$ tries to move beyond the left-most edge of the tape, it does not move (or crash).

### Yield Relations

- if $$\delta(q_i, b) = (q_j, c, L)$$ then $$uaq_ibv$$ yields $$uq_jacv$$
- if $$\delta(q_i, b) = (q_j, c, R)$$ then $$uaq_ibv$$ yields $$uacq_jv$$

## Languages
The collection of strings accepted by $$M$$ is called the language of $$M$$, and is denoted $$L(M)$$.

### Decidable Languages $$L \in \mathcal{R}$$
A Turing machine $$M$$ decides a language $$L$$, if it accepts it and $$M$$ halts on every input in $$\Sigma^{\ast}$$. It is allowed to reach $$q_a$$ or $$q_r$$, but it is not allowed to loop. Such $$M$$ is called a decider for $$L$$.

A language $$L$$ is decidable ($$L \in \mathcal{R}$$) if some $$M$$ decides it.

### Semi-Decidable Languages $$L \in \mathcal{RE}$$
A language $$L$$ is semi-decidable if some Turing machine accepts $$L$$. On an input $$w$$, a Turing machine may:

- Accept (Enter $$q_a$$) if $$w \in L$$
- Reject (Enter $$q_r$$) if $$w \notin L$$
- Loop (run forever) if $$w \notin L$$


## Turing Completeness
A computational model is *Turing-complete* if it can simulate a (general) Turing machine. A *Turing-complete* model can compute anything a Turing machine can.

### Church-Turing Thesis
Any "reasonable" computation model can be simulated by a Turing machine.

### Turing-complete Models of Computation:

- Recursive functions
- Church's $$\lambda$$-calculus
- Recursive function of Godel and Kleene
- All reasonable programming languages (Java, C, Python, Haskell, Caml, Cobol)
- Unrestricted grammars
- Two pushdown automata
- Random access machines (RAMs)
- Modern CPUs

Turing machines are not suited for modelling unbounded non-determinism such as in multi-threading or in distributed computing. Parallelism does not fundamentally change what can compute. The essential feature of every computer is programmability.


#### Wild Model of Computation
is like a Turing machine, but keeps speeding up and so in 2 seconds it will decide any enumerable language. It does not invalidate the Church-Turing thesis, because it is currently impossible to implement a machine like this where the machine speeds up indefinitely.

## Other Models of Computation

### Two-tape Turing machine
The same as a singly-tape (normal) Turing machine, but the tape is infinite on both ends.

Defined as $$\lbrace Q, \Sigma, \Gamma, \delta, q_0, q_a, q_r \rbrace$$ where:

{: .table .table-striped}
| |  |
|-|--
| $$Q$$                     | is the finite set of states.
| $$\Sigma$$                | is the alphabet of symbols.
| $$\delta$$                | $$\delta : Q \times \Gamma \times \Gamma \rightarrow Q \times \Gamma \times \lbrace L, R, S \rbrace \times \Gamma \times \lbrace L, R, S \rbrace$$ is the transition function.
| $$q_0$$ | the start state
| $$q_a$$ | the accept state
| $$q_r$$ | the reject state


### Deterministic Finite Automata
Finite state machines. These are not Turing complete because they cannot loop forever.

A DFA, $$A$$, is defined by $$\langle Q_A, \Sigma_A, \delta_A, \text{init}_A, \text{acc}_A \rangle$$ where:

{: .table .table-striped}
| |  |
|-|--
| $$Q_A$$                     | is the finite set of states.
| $$\Sigma_A$$                | is the alphabet of symbols.
| $$\delta_A$$                | $$\delta_A : Q_A \times \Sigma_A \rightarrow Q_A$$ is the transition function.
| $$\text{init}_A \in Q_A$$   | is the initial state.
| $$\text{acc}_A \in Q_A$$    | is the accepting state.


### Pushdown Automata
Not Turing complete. Has unbounded auxiliary storage like a stack.

A PDA, $$A$$, is defined by $$\langle Q_A, \Sigma_A, \Gamma_A, \delta_A, \text{init}_A, \text{acc}_A \rangle$$ where:

{: .table .table-striped}
| |  |
|-|--
| $$Q_A$$                     | is the finite set of states.
| $$\Sigma_A$$                | is the alphabet of input symbols.
| $$\Gamma_A$$                | is the alphabet of stack symbols.
| $$\delta_A$$                | $$\delta_A : Q_A \times \Sigma_A \times \Gamma_A \rightarrow Q_A \times \Gamma^{\ast}_A$$ is the transition function.
| $$\text{init}_A \in Q_A$$   | is the initial state.
| $$\text{acc}_A \in Q_A$$    | is the accepting state.


### Hierarchy

- Regular languages (Deterministic Finite Automata): $$(ab)^{\ast}$$
- Context free languages (Pushdown Automata): $$a^nb^n$$
- Decidable languages $$\mathcal{R}$$ (Turing machines that halt on all inputs): $$a^nb^na^n$$
- Semi-decidable languages $$\mathcal{RE}$$ (Turing machines that accept all inputs in the language, but may not halt): Halting problem: $$H = \lbrace \langle M, w \rangle \mid M \text{ halts on input } w \rbrace$$
- Languages in $$\mathcal{coRE}$$ (Turing machines that accept all inputs outside of the language, but might not halt on other inputs): Complement of the Halting problem: $$ \overline{H} = \lbrace s \in \Sigma^{\ast} \mid s \notin H \rbrace$$
- Languages outside of $$\mathcal{RE} \cup \mathcal{coRE}$$: Termination problem: $$T = \lbrace \langle M \rangle \rbrace \mid M \text{ terminates on all inputs}$$

### Simulations

#### Two-Tape using a Single-Tape

#### A Pushdown using a Turing machine

----

# Decidability

{: .table .table-striped}
| | |
|-|-
| Recursive ($$\mathcal{R}$$) | Decidable (in both $$\mathcal{RE}$$ and $$\mathcal{coRE}$$).
| Recursively Enumerable ($$\mathcal{RE}$$) | Semi-Decidable.
| $$\mathcal{coRE}$$ | The complement of recursively enumerable languages.
| Undecidable | not in $$\mathcal{R}$$. simply *not decidable*.

## Languages
A Turing machine, $$M$$, accepts input $$w$$ if it reaches the accepting state $$q_a$$. The collection of string accepted by a Turing machine, $$M$$, is called the language of $$M$$, and is denoted $$L(M)$$.

### Enumerators
A Turing machine, $$M$$, is an *enumerator* for a language $$L$$, if $$M$$ outputs all the strings in $$L$$ and nothing else.

### Recursively Enumerable $$\mathcal{RE}$$
A language $$L$$ is *recursively enumerable*, if some Turing machine accepts $$L$$.

A language is in $$\mathcal{RE}$$ if and only if it has an enumerator.

### Recursive $$\mathcal{R}$$
A language $$L$$ is *recursive*, if some Turing machine accepts it and halts on every input $$\Sigma^{\ast}$$.

A language is in $$\mathcal{R}$$ if and only if it has an in-order (lexicographic) enumerator. If we ran an input $$w$$, we can tell if $$w$$ is in the language once we have enumerated past the expected position of $$w$$.

## The Halting Problem (in $$\mathcal{RE}$$, Undecidable)
Describes the problem:

- Given a Turing machine $$M$$ and input $$w$$, does $$M$$ halt on $$w$$?
- Does the computation of $$M$$ on input $$w$$ reach $$q_a$$ or $$q_r$$?

$$H = \lbrace \langle M, w \rangle \mid M \text{ halts on input } w \rbrace$$

$$\text{HALT}$$ is in $$\mathcal{RE}$$ because we can enumerate the language by passing inputs $$w$$s and using an unbounded amount of Turing machines to execute the $$w$$s.

## Proofs

### The Complement of the Halting problem is not semi-decidable

1. Assume that the complement of the Halting problem is in $$\mathcal{RE}$$. Such that $$\overline{H} \in \mathcal{RE}$$.
2. If a problem is in $$\mathcal{RE}$$, then its **complement** is in $$\mathcal{coRE}$$ by definition of $$\mathcal{coRE}$$. Such that $$\overline{\overline{H}} \in \mathcal{coRE}$$.
3. $$\overline{\overline{H}} = H$$, thus the halting problem is in $$\mathcal{coRE}$$.
4. We know that the halting problem is in $$\mathcal{RE}$$.
5. Thus, if the halting problem is in both $$\mathcal{coRE}$$ and $$\mathcal{RE}$$, it is in $$\mathcal{R}$$ and is therefore decidable.
6. We have other proofs that the halting problem is undecidable and therefore we obtain a contradiction proving that the complement of the halting problem is not in $$\mathcal{RE}$$, such that $$\overline{H} \notin \mathcal{RE}$$.


## Computable Functions

{: .table .table-striped}
| | |
|-|-
| Total | defined for all inputs. Does not necessarily mean computable.
| Partial | possibly undefined for some inputs. e.g. the square root function is defined for $$sqrt(25)$$ but undefined for $$sqrt(26)$$ over $$\mathbb{N}$$.
| Computable | if there is a Turing machine that can compute it.
| Recursive | if it is *total* and *computable*.
| Partial Recursive | if it is *partial* and *computable*.

### Mapping Reductions
A mapping reduction converts questions about membership in $$A$$ to membership in $$B$$. If a reduction from $$A$$ to $$B$$ exists, we denote it by $$A \leq B$$. This means that if $$A$$ is decidable/undecidable/recursively-enumerable then $$B$$ is also decidable/undecidable/recursively-enumerable.

## Examples

### Does a Turing machine halt on the empty input?

The non-emptiness problem can be defined as:

$$\text{NONEMPTY} = \lbrace \langle M \rangle \mid L(M) \neq \emptyset \rbrace$$

Using a mapping reduction from another undecidable problem, we can prove that this problem is undecidable. i.e. if $$A \leq B$$ and $$A$$ is undecidable, then so is $$B$$. We know that the halting problem is undecidable from other proofs and so we can use it as our $$A$$.

The Halting problem can be defined as:

$$\text{HALT} = \lbrace \langle M, w \rangle \mid M \text{ halts on input } w \rbrace$$

We can show that $$\text{HALT} \leq \text{NONEMPTY}$$. Consider the computable function $$f$$ that maps $$\langle M, w \rangle$$ to $$\langle M' \rangle$$ where $$M'$$ is the following machine:

Operation of $$M'$$ on input $$u$$:

- if $$u = w$$, simulate $$M$$ on input $$w$$ and accept if $$M$$ accepts.
- if $$u \neq w$$, reject.

The language of $$M'$$ is non-empty if and only if $$M$$ accepts $$w$$. Therefore, $$f$$ is a reduction from $$\text{HALT}$$ to $$\text{NONEMPTY}$$, which shows that $$\text{NONEMPTY}$$ is undecidable.

----

# Rice's Theorem and Rice-Shapiro Theorem

**Rice's Theorem:** The problem "given a language $$L \in \mathcal{RE}$$, does $$L$$ satisfy property $$P$$" is undecidable for all non-trivial properties $$P$$. This tells us what *recursive* languages of partial recursive functions look like.

**Rice-Shapiro Theorem:** tells us what *recursively-enumerable* languages of partial recursive functions look like. Can be used to prove that a language is not in $$\mathcal{RE}$$ (not semi-decidable).

## Primitive Recursion
A function is *primitive recursive* if and only if it has a *primitive recursive definition*:

- The value of $$f(0)$$ is given explicitly.
- The value of $$f(n + 1)$$ is given in terms of the value of $$f(n)$$, and there is no other recursion.
- For functions with multiple arguments, only one of the arguments is allowed to decrease.
- Function composition with previously-defined primitive recursive functions.

**Functions:**

- **Factorial:** Primitive recursive
- **Fibonacci:** Primitive recursive
- **Archimedes:** Primitive recursive
- **Ackerman:** No, because it grows faster than any other primitive recursion.

### All primitive recursive functions are total

<script type="text/x-mathjax-config">
MathJax.Hub.Config({
    tex2jax: {
        inlineMath: [['$','$'], ['\\(','\\)']],
        processEscapes: true
    },
    jax: ["input/TeX","output/HTML-CSS"],
    extensions: [],
    TeX: {
        extensions: ["AMSmath.js","AMSsymbols.js","noErrors.js","noUndefined.js"]
    },
    showMathMenu: false
});
</script>
<script type="text/javascript" src="//cdn.mathjax.org/mathjax/latest/MathJax.js"></script>
