FROM node:18-alpine
# Добавляем установку репортера для Эластика
RUN npm install -g newman newman-reporter-elasticsearch
WORKDIR /app
COPY collections/ ./collections/
COPY environments/ ./environments/
CMD ["newman", "run", "collections/ultimate_api.postman_collection.json", "-e", "environments/qa_postman_environment.json"]
