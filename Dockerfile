FROM node:20.11.1-alpine3.19

WORKDIR /app

COPY package.json ./
COPY app.js ./

EXPOSE 7860

# 安装 `apk` 依赖，并检查是否成功
RUN apk add --no-cache curl bash

# 使用 `npm install`，如果失败则尝试 `--legacy-peer-deps`
RUN npm install --unsafe-perm || npm install --legacy-peer-deps

# 修复权限问题
RUN chmod -R 777 /app

USER node  # 如果仍然报错，可以改成 `USER root`

CMD ["npm", "start"]
