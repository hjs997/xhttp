FROM node:20.11.1-alpine3.19

WORKDIR /app

COPY package.json ./
COPY app.js ./

EXPOSE 7860

# 确保 npm 运行时有权限，并修复 /app 目录权限
RUN apk add --no-cache curl bash && \
    npm ci --unsafe-perm && \
    chmod -R 777 /app

USER node  # 可尝试改回 root 以排查问题

CMD ["npm", "start"]
