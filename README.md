# BIProject-Development

This project will be used to create a Module. That will be later on used in the _BIDocs_ project, which integrates both _NRDG_ and _PPR_.

# Installing

## Repository and branching

```
git clone http://[userNameProvided]@code.brandinstitute.com:5501/scm/bid/biprojectdevelopment.git

git checkout -b "Name of your Branch"
```
- You might have to add, commit and push all the information from your branch to the main branch.
    if needed after checking out the code into your branch:
```
git push --set-upstream origin cacev-development
```

## Bower

- Once the repository is cloned please do: `bower install` in order to install the front end dependencies

# Running project

- In order to run the project you would have to used `grunt serve`

## Testing

- Inside the _test folder_ do `protractor protractor.conf.js` to run the functional test.
