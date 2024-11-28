# MessengerBot

## Description
Đây là con bot dùng cho 1 page nào tùy theo nhu cầu dùng của mỗi cá nhân.

## Table of Contents

- [Requirement](#Requirement)
- [Installation](#installation)
- [Usage](#usage)

## Requirement

- Javascript
- Webhook Ngrok (nếu host local hoặc free)
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
- Ở phần "Đặt cấu hình webhook" thì chọn vào "Trường webhook" và subcribe cái mục messages

## Usage

1. Setup thư mục
- Tạo 1 thư mục mình muốn lưu trữ con bot này
- Mở CMD tại thư mục đấy và nhập lệnh  "npm install --save body-parser config express request" và "npm install dotenv"
2. Cấu hình file
- Mở file server.env lên

![image](https://github.com/user-attachments/assets/bb4ffebd-9375-43f6-aa56-c20e0a58de00) 

- Thay "VERIFY_TOKEN" thành mã tùy ý mà bạn muốn
- Thay "PAGE_ID" thành page id của bạn (trong tính minh bạch của trang)
- Thay "PAGE_ACCESS_TOKEN" thành token mà bạn lấy được từ phần "Tạo mã truy cập"

![image](https://github.com/user-attachments/assets/e900869a-8dbe-4070-a180-d7d6e6fa842e)

- Nếu bạn muốn thay đổi các tin nhắn con bot sẽ nhắn thì vào file "index.js" và tìm hàm "handleMessage" ở đây biến text mình đã đặt trong switch case và nếu muốn thay đổi hay tạo phản hồi mới với từng tin nhắn khác nhau thì bạn có thể thay đổi các case

3. Setup webhook
- Sau khi tải ngrok thì bạn mở cmd và chạy lệnh "ngrok http 5000"
- Sau đó copy cái URL có tên miền "ngrok-free.app"

![image](https://github.com/user-attachments/assets/4f6a3ac3-cf0e-41bd-81b0-ab7b051aafdf)
- Ví dụ: **https://e392-2405-4802-1d74-3810-1c25-8016-d567-1348.ngrok-free.app**
- Vào lại Meta và vào "Đặt cấu hình webhook" chọn "Callback URL" sau đó nhập URL bạn vừa copy và "VERIFY_TOKEN" bạn vừa tạo

## Summary

- Vậy là bạn đã thành công tạo 1 con bot để chat trên page của bạn. Nếu bạn muốn những người khác có thể nhắn tin cho page và có bot trả lời thì cần phải chuyển từ chế độ phát triển sang chính thức.

![image](https://github.com/user-attachments/assets/732f307b-4c74-42da-bf6a-ac08e293af8b)


