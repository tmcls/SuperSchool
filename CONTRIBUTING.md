# How to contribute

I'm really glad you're reading this, because we need volunteer developers to help this project come to fruition.

## **Did you find a bug?**

* **Ensure the bug was not already reported** by searching on GitHub under [Issues](https://github.com/tmcls/SuperSchool/issues).

* If you're unable to find an open issue addressing the problem, [open a new one](https://github.com/tmcls/SuperSchool/issues/new). Be sure to include a **title and clear description**, as much relevant information as possible, and a **code sample** or an **executable test case** demonstrating the expected behavior that is not occurring.

## **Did you fix whitespace, format code, or make a purely cosmetic patch?**

Changes that are cosmetic in nature and do not add anything substantial to the stability, functionality, or testability of SuperSchool will generally not be accepted.

## **Do you intend to add a new feature or change an existing one?**

Please send a [GitHub Pull Request](https://github.com/tmcls/SuperSchool/pull/new/master) with a clear list of what you've done. Please make sure all of your commits are atomic (one feature per commit).

## **Creating a SuperSchool Pull Request?**

#### Fork SuperSchool

From your fork's dev branch, create a new branch to hold your changes:
```
  git checkout -b some-feature
```

#### Develop & Test

Make your changes, create a new platform, develop a new component, or fix issues.
Test your changes and check for style violations.

If everything looks good according to these musts, commit your changes:
```
  git add .

  git commit -m "Added some-feature"
      Write a meaningful commit message and not only Update or Fix.
      Use a capital letter to start with your commit message.
      Don't prefix your commit message with [bla.bla] or platform:.
      Consider adding tests to ensure that your code works.
```
Push your committed changes back to your fork on GitHub:

```
  git push origin HEAD
```

#### Create pull request

Follow these steps to create your pull request.
1. On GitHub, navigate to the main page of the Home Assistant repository.
2. In the "Branch" menu, choose the branch that contains your commits (from your fork).
3. To the right of the Branch menu, click New pull request.
4. Use the base branch dropdown menu to select the branch you'd like to merge your changes into, then use the compare branch drop-down menu to choose the topic branch you made your changes in. Make sure the Home Assistant branch matches with your forked branch (dev) else you will propose ALL commits between branches.
5. Type a title and complete the provided description for your pull request.
6. Click Create pull request.

Check for comments and suggestions on your pull request and keep an eye on the CI output.
