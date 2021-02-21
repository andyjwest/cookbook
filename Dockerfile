FROM node:13.12.0-alpine as builder

ARG REACT_APP_ENV
ENV REACT_APP_ENV=${REACT_APP_ENV}

WORKDIR /app
COPY . .
RUN npm install react-scripts -g
RUN npm install
RUN NODE_ENV=production REACT_APP_ENV=$REACT_APP_ENV npm run build

FROM node:13.12.0-alpine
RUN npm install serve -g --silent
WORKDIR /app
COPY --from=builder /app/build .
EXPOSE 8080
CMD ["serve", "-p", "8080", "-s", "."]