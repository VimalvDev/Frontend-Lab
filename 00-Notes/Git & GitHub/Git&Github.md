## What is Git and GitHub? Are they the same?

### Git
  - A **version control system (VCS)** that tracks changes in our code and files.
  - Helps us **manage project history** and **collaborate** without losing previous work.
  - Works **locally on our computer**.

### GitHub
  - A **cloud platform** to store our Git repositories **online**.
  - Makes it easy to **share code, collaborate**, and contribute to open-source projects.
  - Provides **issues, pull requests, and project management** tools.

### **Are they the same?**
  - **No.** Git is the **tool**; GitHub is a **platform that uses Git**.
  - We can use Git **without GitHub**, but GitHub makes sharing and collaboration easier.

### **Why use them?**
  - Keep **backup and history** of our projects.
  - Easily **revert to previous versions** if something breaks.
  - Work **with teams** on the same project without conflicts.
  - Showcase our projects **publicly on GitHub**.

---

## Git & GitHub: Key Terminologies

- **Repository (Repo):** A project folder tracked by Git, storing our code and its version history.
- **Commit:** Saving your changes with a short message.
- **Clone:** Copy a GitHub (remote) repo to our local machine.
- **Push:** Upload our saved changes (commits) to GitHub.
- **Pull:** Download changes from GitHub to our computer.
- **Branch:** A copy of your project to add new features without breaking your main project.
- **Merge:** Combine changes from one branch into another.
- **Fork:** Create a personal copy of someone else’s repo on our GitHub.
- **Pull Request (PR):** A request to merge our changes into the main repo (used in collaboration).
- **Remote:** The URL of our online repo usually named `origin`.

---

## Useful Git Commands

- `git init` → Start using Git in our folder.
- `git clone <repo-url>` → Copy a remote repo locally
- `git remote add origin
- `git status` → Check the status of changes in your working directory.
- `git add filename` or `git add .` → Getting a specific or all files ready to save in Git.
- `git commit -m "commit message"` → Create a commit with a message describing our changes.
- `git log` → Show commit history.
- `git branch` → List branches in our repo.
- `git checkout -b branchname` → Create and switch to a new branch.

---

## Process: Creating a Repo and Uploading on GitHub

1. Create a local repo and type command to start Git tracking in our folder:
Open your terminal, go to your project folder, and type:
```bash
git init
```

2. Add files:
```bash
git add .
```

3. Commit changes:
```bash
git commit -m "initial commitJ"
```
4. Create a repo on GitHub and copy **repo URL**

5. Connect our local repo to Github:
```bash
git remote add origin <repo-url>
```
6. Push to GitHub:
```bash
git push -u origin main
```

7. Future changes
```bash
git add .
git commit -m "Your message"
git push
```
