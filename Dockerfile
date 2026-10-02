FROM node:18-alpine
RUN npm install -g newman
WORKDIR /app
COPY collections/ ./collections/
COPY environments/ ./environments/
CMD ["newman", "run", "collections/ultimate_api.postman_collection.json", "-e", "environments/qa_postman_environment.json"]
