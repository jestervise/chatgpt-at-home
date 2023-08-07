FROM nginxinc/nginx-unprivileged:stable-alpine

USER root

RUN apk update && \
    apk upgrade --no-cache --available && \
    rm -rf /var/cache/apk/* && \
    rm /etc/nginx/conf.d/default.conf

COPY dist /usr/share/nginx/html 

RUN mkdir /etc/nginx/templates
COPY deployment/main.conf /etc/nginx/nginx.conf
COPY deployment/nginx.conf /etc/nginx/conf.d

RUN chown -R 10001:0 /var/cache/nginx \
    && chmod -R g+w /var/cache/nginx \
    && chown -R 10001:0 /etc/nginx \
    && chmod -R g+w /etc/nginx \
    && chown -R 10001:0 /usr/share/nginx \
    && chmod -R 544 /usr/share/nginx/html/locales

USER 10001

EXPOSE 8000
EXPOSE 8080

CMD [ "nginx","-g","daemon off;" ]