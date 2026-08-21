FROM php:8.4-cli-alpine

# Install system dependencies
RUN apk add --no-cache \
    nginx \
    nodejs \
    npm \
    libpng-dev \
    libjpeg-turbo-dev \
    libwebp-dev \
    libxpm-dev \
    libzip-dev \
    zip \
    unzip \
    git \
    curl \
    libpng-dev \
    libwebp-dev \
    libjpeg-turbo-dev \
    libxpm-dev \
    freetype-dev

# Install PHP extensions
RUN docker-php-ext-configure gd --with-freetype --with-jpeg --with-webp \
    && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd zip

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /app

# Copy composer files first for better caching
COPY composer.json composer.lock ./

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader --no-scripts --no-interaction

# Copy application files
COPY . .

# Install Node dependencies and build assets
RUN npm install && npm run build

# Remove build dependencies to reduce image size
RUN apk del --no-cache \
    libpng-dev \
    libjpeg-turbo-dev \
    libwebp-dev \
    libxpm-dev \
    libzip-dev \
    zip \
    unzip \
    git \
    curl

# Create Laravel storage directories
RUN mkdir -p /app/storage/framework/{cache,sessions,views} \
    && mkdir -p /app/bootstrap/cache \
    && chmod -R 775 /app/storage /app/bootstrap/cache

# Generate app key if not present
RUN if [ -f .env ]; then php artisan key:generate --force; fi

# Expose port 3000 (Vercel's default)
EXPOSE 3000

# Start PHP built-in server
CMD ["php", "-S", "0.0.0.0:3000", "-t", "public", "api/index.php"]
