FROM node:14-alpine AS ui-build
WORKDIR /usr/src/app
COPY client/ ./client/
RUN cd client && npm install && npm run build

FROM node:14-alpine AS server-build
WORKDIR /usr/src/app
COPY --from=ui-build /usr/src/app/client/build ./client/build
COPY server/package*.json ./server/
RUN cd server && npm install
COPY server/ ./server/

EXPOSE 4000

CMD ["node", "./server/server.js"]