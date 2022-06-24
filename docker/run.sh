#!/bin/sh

cd /var/www
composer install
# php artisan migrate:fresh --seed
php artisan cache:clear
php artisan route:cache

