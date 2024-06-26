FROM nginx:latest

COPY nginx.conf /etc/nginx/nginx.conf

COPY dist/postcards/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]