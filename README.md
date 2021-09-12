# E-mail sending

This is a very basic example of sending PHP emails (PHPMailer) using React and axios as dependence. 

It's pretty much a simple form with name, email and message field to send email to some website admin as "Contact Form".

## Feat

- PHP Mailer ( Backend sample included )
- React ( create-react-app )
- Typescript
- axios
- Basic form

## Before use it

In order to use the backend from the sample, you have to put the e-mail:

```php
// sender
$senderName = "React E-mail Sender";
$senderEmail = "..."; // email of the website

// receiver
$receiverName = "React E-mail Sender";
$receiverEmail = "..."; // email of the website or admin to receive the contact
```