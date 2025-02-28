/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  compiler: {
    removeConsole: true, // 콘솔 로그 제거 (배포 환경에서만)
  },
  experimental: {
    turboMode: false, // Fast Refresh 관련 오류 배너 비활성화
  },
};
