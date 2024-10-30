# Inventory Management Database

## Step 1: Install the mysql database using docker

1. Install the docker desktop
2. Pull the image from the docker hub using command ```docker pull mysql:latest```
3. Run the docker container ```docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=rootpassword -d mysql:latest``` replace the rootpassword with databsse password

4. Use ``` docker ps ``` to chek=ck whether container is running or not.
