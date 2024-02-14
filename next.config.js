/** @type {import('next').NextConfig} */
module.exports = {
    images: {
        domains: ['s3-alpha-sig.figma.com', 'example.com', 'another-example.com', "localhost"],
        // remotePatterns: [
        //     {
        //         protocol: 'http',
        //         hostname: 'localhost',
        //         port: '8004',
        //         pathname: '*',
        //     },
        // ],
    },
}