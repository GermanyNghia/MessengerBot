# MessengerBot

## Description
Đây là con bot dùng cho 1 page nào tùy theo nhu cầu dùng của mỗi cá nhân

## Table of Contents

- [Requirement](#Requirement)
- [Installation](#installation)
- [Usage](#usage)

## Requirement

- Javascript
- Webhook Ngrok (If using localhost)
- Meta graph api

## Installation

1. Javascript
- Ở đây mình dùng Node.js
- Mọi người có thể tải theo link https://nodejs.org/en/download/package-manager
- Tải file index.js và server.env trên github của mình về
2. Webhook
- Mọi người có thể tự thuê web để host riêng nhưng mà nếu muốn test local (free) thì có thể dùng Ngrok
- Mọi người có thể tải theo link https://ngrok.com
3. Meta graph api
- Truy cập https://developers.facebook.com và vào phần "Ứng dụng của tôi" (My applications)
- Tạo ứng dụng:
   + Tên: tùy ý
   + Trường Hợp Sử Dụng: chọn "khác" sau đó chọn "kinh doanh"
   + Tạo ứng dụng
- Ở phần bảng điều khiện (dashboard) chọn cho mình là "Messenger" và "Webhook"
- Sau đó vào mục "Messenger" chọn "Cài đạt Messenger API"
- Có 2 mục đó là "Đặt cấu hình webhook" và "Tạo mã truy cập" thì để đấy tí nữa sử dụng

## Usage
1. Setup môi trường
- Tạo 1 thư mục mình muốn lưu trữ con bot này
- Mở CMD tại thư mục đấy và nhập lệnh  "npm install --save body-parser config express request" và "npm install dotenv"
2. Cấu hình file
- Mở file server.env lên
![image](https://github.com/user-attachments/assets/bb4ffebd-9375-43f6-aa56-c20e0a58de00) 
3. 
