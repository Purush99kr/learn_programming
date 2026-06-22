Follow the methods to connect Vs Code editor with your Gthub account in order to push codes.

Part 1 [Installations ans Setup] 1. Intall git including git bash 2. Install Vs Code editor 3. Create account over Github

Part 2 [Installation verification] 1. Open command line 2. git --version [ confirm git Installation and version ]

Part 3 1. Open git bash 2. configure Github UserName & Email
git config --global user.name "UserName"
git config --global user.email "UserEmail" 3. Verify : git config --global --list [ UserName & UserEmail will appear ]

Part 4 [Generate SSH Key] 1. ssh-keygen -t ed25519 -C "UserEmail" 2. Press Enter for all steps further [set all as default]

Part 5 [Start SSH Agent] 1. eval "$(ssh-agent -s)" [Output: Agent pid xxxx]

Part 6 [Add SSH Key] 1. ssh-add ~/.ssh/id_ed25519

Part 7 [Copy SSH Key] 1. cat ~/.ssh/id_ed25519.pub [Copy the full Key Output]

Part 8 [Add SSH Key to Github] 1. Open "SSH and GPG keys" 2. Click over "New SSH key" 3. Title : My Laptop, Key : Paste the copied key
4, Add SSH key

Part 9 [Check Github SSH Connection] 1. ssh -T git@github.com [Answer "Yes" to the question asked] [Output : Hi UserName! You've successfully authenticated] 2. GitHub does not provide shell access [additional message recived]

Part 10 [Connect VS Code with Github] 1. Open Vs Code using a new folder 2. Sign In with your github account [profile icon present below left]

By using above 10 methods, your connection is established.

Commands to initialize repo and push the codes: 1. git init 2. git status 3. git add . 4. git commit -m "commit message" 5. git branch -M main 6. git remote add origin git@github.com:Purush99kr/<repository_name> 7. git push --set-upstream origin main

After running the above commands, your code folder with each files will be pushed over github inside a dedicated directory.
