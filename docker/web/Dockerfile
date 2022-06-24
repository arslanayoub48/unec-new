FROM php:7.4-apache

RUN docker-php-ext-install \
    pdo_mysql \
    && a2enmod \
    rewrite

RUN chown -R www-data:www-data \
        /var/www/html/storage \
        /var/www/html/bootstrap/cache
 