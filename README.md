# reCAPTCHA test
The application helps to develop and test an API that has integration with reCAPTCHA.

## Links
- [Developer's Guide](https://developers.google.com/recaptcha/intro)
- [reCAPTCHA Admin](http://www.google.com/recaptcha/admin)

## Environment variables
- *PUBLIC_KEY* - reCAPTCHA public key
- *SECRET_KEY* - reCAPTCHA secret key
- *SERVER_PORT* - Http server port (by default 3000)

## Supported versions
- reCAPTCHA V3
- reCAPTCHA v2 (Checkbox)
- reCAPTCHA v2 (Invisible)

For each version of reCAPTCHA, needed to retrieve and pass to configuration their combination of the public key and secret key.

## Usage

- Windows:
```bash
SET PUBLIC_KEY=<public key>&& SET SECRET_KEY=<secret key>&& node .
```

- Unix:
```bash
PUBLIC_KEY=<public key> SECRET_KEY=<secret key> node .
```

## Docker

```bash
docker container run --env PUBLIC_KEY=<public key> --env SECRET_KEY=<secret key> -d -p 3000:3000 mclaud53/recaptcha-test
```
