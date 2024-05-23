Welcome to NOTIFICATION SERVICE

Project Setup

Clone the project on your local Execute npm install on the same path as of your root directory of the downloaded project Create a .env file in the root directory and add the following environment variable ```PORT=3004```,```EMAIL_ID=golirahul21@gmail.com```,```EMAIL_PASSWORD=<your_pass_word_hgmmsfmisihrkytr>```. Inside the src/config folder create a new file config.json and then add the following piece of json

```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "REMINDER_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
Once you've added your db config as listed above, go to the src folder from your terminal and execute 
```npx sequelize db:create``` to create ```REMINDER_DB_DEV``` the and then execute ```npx sequelize db:migrate``` for migrating/creating the tables for the models below in ```REMINDER_DB_DEV```

### TABLES

NotificationTicket Table
 id , subject, content, recepientEmail, status, notificationTime, updatedAt, createdAt
``` npx sequelize model:generate --name NotificationTicket --attributes subject:string,content:string,recepientEmail:string,status:enum,notificationTime:date```
