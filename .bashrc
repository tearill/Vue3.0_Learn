# /**
#  * @file chmod hooks files
#  * @author caigang
#  * @create 2021-4-22
#  */

# make .husky/pre-commit hooks executable
# this file will run when run the command 'git init' to innitialize a git repository
ginit () {
    git init
    gitpath=`git rev-parse --show-superproject-working-tree --show-toplevel | head -1`
    chmod 777 "$gitpath"/.git/hooks/*
	chmod 777 "$gitpath"/.husky/*
    for submodule in "$gitpath"/.git/modules/*; do
        chmod 777 "$submodule"/hooks/*
    done
}
