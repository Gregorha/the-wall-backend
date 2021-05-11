# BDD specs

## Narrative 1

```
As a user 
I want to be able to register a new accout and receive an welcome email. 
```

## Scenarios
```
Given that the user inputs correct data on Registration form, the system should save a new account and send an welcome email.
Given that the user inputs incorrect data on Registratios form, the system should return an Error, alerting the wrong data inserted. User must not be registered.
```

## Narrative 2
```
As a registered user 
I should be able to Login and Write new messages
```

## Scenarios
Given that the user inputs the right email and password he should be able to login.
Given that the user is logged in, he should be able to add new messages to the wall.
Given that the user is not logged in, he should not be able to add new messages to the wall.

## Narrative 3
```
As a authed and also as a guest user 
I should be able to see all messages on the wall
```

## Scenarios
Given that the user is not authed, he should be able to see all messages on the wall.
Given that the user is authed, he should be able to see all messages on the wall.