# FROM php:7.1-fpm
FROM php:7.1.33-apache-buster

# hostgator server
# FROM php:7.3.28-zts-buster

RUN docker-php-ext-install mysqli pdo_mysql
RUN a2enmod rewrite

WORKDIR /var/www/backend/

# Wideimage
RUN apt-get update -y && apt-get install -y sendmail libpng-dev

RUN apt-get install -y \
    libwebp-dev \
    libjpeg62-turbo-dev \
    libpng-dev libxpm-dev \
    libfreetype6-dev
RUN docker-php-ext-configure gd \
    --with-gd \
    --with-webp-dir \
    --with-jpeg-dir \
    --with-png-dir \
    --with-zlib-dir \
    --with-xpm-dir \
    --with-freetype-dir \
    --enable-gd-native-ttf
RUN docker-php-ext-install gd

# sendmail
RUN echo "sendmail_path=/usr/sbin/sendmail -t -i" >> /usr/local/etc/php/conf.d/sendmail.ini 

RUN sed -i '/#!\/bin\/sh/aservice sendmail restart' /usr/local/bin/docker-php-entrypoint
RUN sed -i '/#!\/bin\/sh/aecho "$(hostname -i)\t$(hostname) $(hostname).localhost" >> /etc/hosts' /usr/local/bin/docker-php-entrypoint

# And clean up the image
RUN rm -rf /var/lib/apt/lists/*
