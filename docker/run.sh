chmod -R 777 storage
chmod -R 777 bootstrap
compose install
php artisan config:cache