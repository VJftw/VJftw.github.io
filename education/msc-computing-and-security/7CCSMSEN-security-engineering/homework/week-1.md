Q2: Practice thinking like an attacker. Assume the following situation:
> Prof. V. Nasty gives the following final exam question (closed books, closed notes):

> Write the first 100 digits of pi: 3.________________________________________

Think of ways how you can cheat in this exam? How would you defend against such cheats?

A:
- The exam doesn't specify if calculators are permitted or not, thus we assume that we can use a calculator. To defend against this, specify only what the student is allowed to use (whitelisting), rather than specifying what they cannot use (blacklisting).


Q3: Here is another puzzle where you can practice thinking like an atacker: Consider modern car keys. They wirelessly open and close the central locking system of the car. Whenever you lock the car, the car "responds" by flashing the indicator lights. Can you think of a security relevant purpose for that? (Hint: Imagine you are in the business of stealing cars. What atack would be easier to perform if the lights do not flash?)

A:
- Cars respond with the light flashes after locking to confirm that they have been locked. Consumers will usually look out for these lights at a distance to acknowledge that their car has been locked. Without these, if the car is out of range of the remote, consumers may just assume their car is locked at a distance when it is not. Thieves may also interfere/block with the signal at a close range and the consumer wouldn't know the difference, thus leaving the car unlocked for the thief. 

Q4: And another one: A water company installed devices that transmit meter readings when their company car drives by. How can this transmited data be abused, if not properly encrypted? If you identified an abuse, then how would you encrypt the data so that such an abuse is prevented. Hint: Consider the fact that every person uses approximately 120l of water every day.

A:
- The water-usage data can be manipulated if it is not encrypted. For example, someone living in Flat 1, could change their water usage from 120L to 2L of water so that they pay less in their water bill. A solution to this could involve public-key cryptography where each meter is given a unique key pair, that is then whitelisted on the van that drives past.


Q5: Explain what hashes and salts are. Describe how they can be used for ensuring data integrity and storing password information.

A:
- Hashes are one way functions that turn data into a digest. The same data will always return the same digest when passed through the same hash function. It is useful for storing password information as during authentication we can compare a hashed attempt to the hashed password instead of the plain password. thus the plain password does not need to be persisted/stored. For data-integrity, it is much faster for comparing larger files as the one way function will create a smaller digest which can be compared, rather than comparing each bit of the actual data.
