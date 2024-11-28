/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config: any) => {
    // Додайте правило для обробки SVG
    config.module.rules.push({
      test: /\.svg$/, // Усі файли з розширенням .svg
      use: [
        {
          loader: '@svgr/webpack', // Для імпорту SVG як React-компоненти
          options: {
            svgo: true, // Включити оптимізацію SVG
            svgoConfig: {
              plugins: [
                'preset-default', // Правильне ім'я плагіна
                {
                  name: 'removeViewBox', // Зберігаємо viewBox
                  active: false,
                },
              ],
            },
          }
        }
      ],
    });
    return config;
  },
};

module.exports = nextConfig;
