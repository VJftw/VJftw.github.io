---
layout: post
title:  Implementations of Homomorphic Encryption
summary: Excerpts from my undergraduate dissertation about Homomorphic Encryption
date:   2016-04-24 12:24:03
categories: dissertation cryptography bsc homomorphic encryption
---

## Introduction
Cryptography is the study and practice of techniques for secure communication in the presence of third parties called adversaries (Rivest 1990). This art is and always will play an important role in society and its importance has exploded with the rise of the internet as it allows for information to be shared easily but with a greater amount of adversaries present.

Cryptography is an umbrella consisting of the following services (Martin 2012):

 - **Confidentiality**, the assurance that data cannot be viewed by an unauthorised user.
 - **Data integrity**, the assurance that data has not been altered in an unauthorised manner.
 - **Data origin authentication**, the assurance that a given entity was the origin source of received data.
 - **Non-repudiation**, the assurance that an entity cannot deny a previous commitment or action.
 - **Entity authentication**, the assurance that a given entity is involved and currently active in a communication session.

For this project, we will be exploring *encryption* (*homomorphic encryption* in particular) which belongs to the *Confidentiality* aspect of cryptography.

### Symmetric Encryption

Symmetric encryption involves the use of a single key or password which is used to encrypt the plaintext and also used to decrypt the cipher-text.

One of the earliest and basic known cryptosystems is the Caesar cipher, used by the Roman general Gaius Julius Caesar in private correspondence. The Caesar cipher is used by shifting characters in the alphabet such that

$$E_x(m) = (m + x) \bmod 26$$

Where $$m$$ is the message and $$x$$ is a secret number. Decryption is simply done with

$$ D_x(m) = (m - x) \bmod 26$$

The Vigenère cipher, invented by Blaise de Vigenère in the sixteenth century, builds upon the Caesar cipher and was believed to be secure for a significant period in history (Simmons 2016). It demonstrates using a positional dependency to defeat single letter frequency analysis (which easily breaks the Caesar and substitution ciphers) (Martin 2012). It achieves this by introducing a key-word that is compared against the plaintext to create an individual secret $$x$$ for each character and then used in the classical Caesar cipher. Figure 1 illustrates this.

{: .table .table-striped}
| Plaintext | Key-word  | $$x$$ for character   | Cipher-text   |
|-----------|-----------|-----------------------|---------------|
| b         | s         | 18                    | t             |
| o         | e         | 4                     | s             |
| n         | c         | 2                     | p             |
| j         | r         | 17                    | a             |
| o         | e         | 4                     | s             |
| u         | t         | 19                    | n             |
| r         | k         | 10                    | b             |

*Figure 1: Example of Vigenère cipher*


When the key-word is known, you can perform decryption with the Caesar cipher for each character once you have determined each individual $$x$$.

This scheme can be cracked once the length of the key-word is learnt because an adversary is able to learn at which positions the same individual $$x$$ is used and perform frequency analysis.

### Asymmetric Encryption
Symmetric encryption can only work once all parties in a conversation know the secret password. In an open network, such as the internet, it is difficult to exchange symmetric keys without an adversary being able to see them. Asymmetric encryption solves this problem by having a key-pair (two related keys). One key is a public key that is broadcast for anyone that wants to send you a message, whilst the second is a private key that you use to decrypt any messages that people have sent you. This is more computationally expensive than symmetric encryption and so in practice, for example the secure Hypertext Transport Protocol (HTTPS), we can use asymmetric encryption to exchange a secret key which is then used with symmetric encryption for the rest of communication (Heaton 2014).

#### Rivest-Shamir-Adleman (RSA) Encryption

One of the first proposed and widely used practical asymmetric cryptosystems is RSA (Martin 2012). It is named after its creators Ron Rivest, Adi Shamir and Leonard Adleman with the first initial of each of their surnames. Plain RSA encryption is illustrated in the following example:

*Bob* and *Alice* are two people that wish to communicate securely. They both take the following steps to create their own unique public and private key pairs.

1. Find two random primary numbers $$p$$ and $$q$$.
2. Calculate $$n = p \times q$$
3. Calculate $$\phi(n)$$ using Euler's totient function.
4. Find a random integer $$e$$ that is coprime with $$\phi(n)$$.
5. Calculate $$d = e^{-1} \bmod \phi(n)$$.

The public key is made up of $$n$$ and $$e$$, whilst the private key consists of $$n$$ and $$d$$. The other variables ($$p$$, $$q$$ and $$\phi(n)$$) can be discarded but not revealed as they are used to calculate $$d$$. Both *Bob*’s and *Alice*’s public keys can be placed in a public domain where anyone is able to read them.

Once *Bob* and *Alice* have their key pairs, they can communicate with each other. If *Bob* wanted to send *Alice* a message, he would:

1. Read *Alice*'s public key from the public domain which bears the variables $$n$$ and $$e$$.
2. Calculate the cipher-text $$c = m^e \bmod n$$, where $$m$$ is the message he wants to send.
3. Transmit the cipher-text $$c$$ to *Alice*.

*Alice* can then decrypt $$c$$ to $$m$$ by calculating $$m = c^d \bmod n$$ with her private key that contains the values of $$n$$ and $$d$$. *Alice* can also send *Bob* messages by using *Bob*'s public key.

RSA is regarded as secure based on the assumption that large number factorisation is difficult for current computers. These problems are in a complexity class known as $$NP$$ #TODO: explain complexity with computability and P = NP.

This is an impending weakness of this cryptosystem that we currently rely on as Shor's quantum factorisation algorithm can be used to rapidly factorise large numbers in polynomial time, thus placing this problem into $$P$$ and breaking this scheme (Cao 2005).


#### Homomorphic Encryption
Homomorphic encryption describes the use of an untrusted third party’s computer to perform computations on a cipher-text without the third party being able to discover the plain-text. This is currently a hot topic in the industry because it opens doors in secure computing in the cloud where for example, mobile devices could offload computations to other computers in the cloud in order to save power (Parno 2013) and even enabling private queries to a search engine (Gentry 2009). The idea was first presented in 1978 through the idea of privacy homomorphism (Rivest et al. 1978).

##### Verifiable Computing
Verifiable computing allows us to validate whether or not a computation has been computed correctly and that the result is correct. This goes hand-in-hand with homomorphic computing as it would prevent a malicious third party computer giving an incorrect response.

## Research

### Homomorphic Encryption
As mentioned before, homomorphic encryption describes the ability to encrypt values and allow any untrusted external process to perform operations on them whilst retaining their original meaning.

#### Somewhat Homomorphic Encryption (SWHE)
A somewhat homomorphic cryptosystem supports a limited amount of homomorphic operations. They can be used in some situations, but not all.



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
