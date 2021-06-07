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

# Livkov substitucion Principle

_ The cynefin framework:
    Snowden set out to create an organizational model that would help to explain different problem domains.
    Everyone in the team can form hypothesis and execute against it.
    Before writting any line of code we should talk with the manager in order to validate the project ideas with real users.
    validate your assumptions.
    assume you will things along the way
    work in short iterations with fast feedback

    Obvius problems:
        . Clasify the problem and apply the best practices
        . They have known best practices
    Complicated problems:
        . They have many moving parts
        . They required highly skilled workers
        . Coordination with different groups
        . Once we have the plane then it's all about execution
        . You know where you are and where you want to be A -> B
        . A successful execution will deterministically give you a successful outcome
        . A fail execution will deterministically give you a fail outcome
    Complex problems:
        . They don't have deterministic outputs because they don't have deterministic inputs
        . Best practices are innaplicable
        . We expect to find emergent pratices, through experimentation and trhough innovation
    Chaos:
        . You don't know where you nor where you go
        . Noble pratices, clafiry the situation
    
_ LSP is about letting the user handle different objects that implement a   supertype without checking what the actual type they are. This is inherently what polymorphism is about.

_This principle provides an alternative to do type-checking and type-conversion, that can get out of hand as the number of types grow, and can be achieved through pull-up refactoring or applying patterns such as Visitor.

# Interface segregation Principle
    It provides you with abstractions that take up less room in your head when trying to understand the system.
    ISP splits interfaces that are very large into smaller and more specific ones so that clients will only have to know about the methods that are of interest to them

    Approach #1 (extraction pattern):
        extract functionality from the base class
        and shared functionalitty will need to be there as well
    Approach #2 (facade pattern):
        We use this approach over extraction if the class you are trying to extract is to big and complex to be able to cleanly and safetly extract the class
    Approach #2 (classical inheritance):
        Use `extends` to extend methods from base class
        Downside is that the API will not be clear