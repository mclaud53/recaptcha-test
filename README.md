# ReCaptcha test
The application helps to develop and test an API that has integration with ReCaptcha.

## Links
- [Developer's Guide](https://developers.google.com/recaptcha/intro)
- [ReCaptcha Admin](http://www.google.com/recaptcha/admin)

## Environment variables
- *PUBLIC_KEY* - ReCaptcha public key
- *SECRET_KEY* - ReCaptcha secret key
- *SERVER_PORT* - Http server port (by default 3000)

For each version of ReCaptcha, needed to retrieve and pass to configuration their combination of the public key and secret key.

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
