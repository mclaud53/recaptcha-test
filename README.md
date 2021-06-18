# ReCaptcha test

## Links
- [Developer's Guide](https://developers.google.com/recaptcha/intro)
- [ReCaptcha Admin](http://www.google.com/recaptcha/admin)

## Environment variables
- *PUBLIC_KEY* 
- *SECRET_KEY* 

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
