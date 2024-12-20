## Summary
The task was done for **8 hours** as part of an interview exercise for the **Fullstack Developer** role.
## Task 
**Fullstack Developer** - Interview Exercise

Set up a fresh Laravel application.

Use Tailwind CSS or any other CSS framework.

CDN version is fine.

Bonus points if installed via NPM.

Create a contact form on the page.

The form should be built as a Vue or React.

The form should submit via axios.

The form should have the following fields:

- Name

- Email

- Phone

- Message

Implement proper server-side form validation, and display those errors client-side.

All fields are required.

Name and Email have a max length of 50 characters.

Email must be a valid email.

Message has a max length of 500 characters.

On a successful form submission:

Save the form data to the database in an inquiries table.

Send an email notification to support@anon.com. An actual email is not required. Feel free to use mailtrap.io or other to test.

Write a basic HTTP test to verifying:

- The form validation works.

- That the value is being saved to the database.

- That the email notification was sent.

Provide the final codebase as a Git repository.
## Prerequisites 
- Php >= ^7.4
- Node >= ^16.0
## Installation 
Clone repo 
```shell
git clone git@github.com:sasha-ajin/interview-task-react-laravel.git
```
Install `/node modules`
```shell
npm i
```
Install `composer`
```shell
composer install
```
Set up your `.env` file using `.env.example`
```shell
cp .env.example .env
```
Open the .env file and configure the settings, such as database connection and mailing (`DB_*` and `Mail_*` values)
```shell
vim .env
```
Generate your app key 
```shell
php artisan key:generate
```
Now you should run migrations
```shell
php artisan migrate
```
### Start servers
```shell
php artisan serve
```
```shell
php artisan queue:work
```
```shell
npm run watch
```
