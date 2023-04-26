# BigO Rules

In BigO we have to consider 4 important rules.

## 1. Worste Case

In this rule we should to consider worst scenario. for example if we are finding `nemo` in array by using for loop we should consider that is posible to `nemo` be the last element of array not the first one.
&nbsp;
___

## 2. Remove Constants

Do not forget to drop the constants for example in we have a function with `O(2n) notation` we can simply consider that as a `O(n)` so we droped `2` in this example.

&nbsp;
___

## 3. Different terms for inputs

When we have nested loop we are iterating multiple so the BigO number comes by using multiplier. for example when we have two nested loop we have two O(n) and they have to multiply to gether so the O notation finally is `O(n^2)`
And considered that if we have two different input and loop throw them but it's not nested and it should add to gether then the o notation finally is `O(n)`

&nbsp;
___

## 4. Drop Non Dominants

We always care the dominant term so if we have a function that run two different loop one of then `O(n)` and another one `O(n^2)` BigO is `O(n^2)`.

&nbsp;
___
