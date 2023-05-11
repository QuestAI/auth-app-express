# Auth App Express

Basic React + Node App

**How to run it locally**

### Without Docker
***Server***
```bash
cd server && npm install && npm run start:dev
```

***Client***
```bash
cd client && npm install && npm start
```



### With Docker

**Build**
```bash
docker build -t auth-app-express .
```

**Run**
```bash
docker run -p 4000:4000 auth-app-express
```