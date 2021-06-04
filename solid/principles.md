# Software development principles

S: single responsability principle
O: open / close principle
L: liskov substitution principle
I: interface segregation
D: dependency inversion

# SOLID general notes

-   Demostrate the value, and build sensous around leading practices
-   It is not enough for 1 person to apply the principles
-   SRP: **WHO** might want to make changes to particular part of code
_   OCP: **WHAT** part of the codes are most likely to be changed, and how to make them more changable
Clo
# Single responsability Principle

-   Every class or module should have one responsability and that responsability has to be encapsulated in that module/class.
-   A class should have only one reason to change.
-   Helps code organization.
-   The goal is to isolate the sources of change and to minimised the cost of those changes
-   It is important to idenify source of change
-   Who are the request agents?
-   PM, Designer, Finance, Legal?
-   Command Query Separation
-   SRP can be applied to HTML and CSS in spirit

# Open and closed Principle

_ Extension: adding new classes, modules, functions or methods, take a look to the git diff it should be all green (new code)
_ Modification: referes to make inline changes to existing logic, it will add new ideas but destroy existing ones
_ Step back and ask, is there some missing abstraction that would allow me to make this change trhough extension
_ When we add abstractions in order to satisfy, one of the risk that we run is adding abstractions that are not right, not meaninful