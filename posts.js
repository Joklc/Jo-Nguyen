// ============================================================
//  FILE DUY NHẤT BẠN CẦN SỬA — gồm 2 phần:
//  (1) SITE  : thông tin chung của trang + phần "Về mình"
//  (2) POSTS : danh sách bài viết
//
//  ---------- CÁCH THÊM BÀI MỚI ----------
//  Copy khối mẫu này, dán ngay sau dòng "const POSTS = [":
//
//  {
//    title: "Tiêu đề bài viết",
//    category: "chủ đề",              // du lịch, công nghệ, suy nghĩ...
//    date: "2026-07-17",              // năm-tháng-ngày
//    cover: "images/ten-anh.jpg",     // ảnh bìa — để "" nếu không có
//    content: `
//  Đoạn văn thứ nhất.
//
//  [anh: ten-anh-khac.jpg | Chú thích ảnh hiện dưới ảnh]
//
//  Đoạn văn tiếp theo. Để dòng trống giữa các đoạn.
//    `
//  },
//
//  ---------- CÁCH DÙNG ẢNH ----------
//  1. Chép file ảnh (.jpg, .png, .webp) vào thư mục "images" trong repo
//  2. Ảnh bìa: điền  cover: "images/ten-file.jpg"
//  3. Ảnh trong bài: viết một dòng riêng  [anh: ten-file.jpg | chú thích]
//     (chú thích có thể bỏ trống: [anh: ten-file.jpg])
//  4. Commit + Push cả ảnh lẫn posts.js
//
//  Mẹo: đặt tên ảnh không dấu, không khoảng trắng: suong-da-lat.jpg
// ============================================================

const SITE = {
  name: "Jo Nguyen",
  tagline: "một góc nhỏ trên internet — nghĩ gì viết nấy",
  author: "Joklc",

  // Menu chủ đề trên thanh điều hướng — tên phải TRÙNG với category của bài
  menu: ["công việc", "du lịch", "suy nghĩ", "cuộc sống"],

  about: `
Xin chào, mình là Joklc.

Đây là nơi mình lưu lại những điều vụn vặt: một chuyến đi, một công cụ mới học được, hay chỉ là một ý nghĩ giữa tuần. Không có chủ đề cố định — nghĩ gì viết nấy.

Ngoài viết lách, mình làm việc với dữ liệu, Data, Excel và các hệ thống báo cáo. Nếu bạn muốn trao đổi gì, cứ để lại lời nhắn nhé.
  `
};

const POSTS = [

  {
    title: "What is work-life balance",
    category: "suy nghĩ",
    date: "2026-07-17",
    cover: "images/work-life.jpg",
    content: `
Như thế nào mới là định nghĩa đúng về "Work life balance" mà mọi người hay nói. Theo mình, sẽ không có 1 định nghĩa chung cho tất cả mà sẽ là

Work is life and Life is work
    `
  },

  {
    title: "Một ý nghĩ giữa tuần",
    category: "suy nghĩ",
    date: "2026-06-30",
    cover: "images/y-nghi.jpg",
    content: `
Không phải ngày nào cũng cần một bài học lớn. Có ngày chỉ cần nhận ra mình đã cười nhiều hơn hôm qua một chút, vậy là đủ.
    `
  },

  {
    title: "Về việc học một công cụ mới",
    category: "công nghệ",
    date: "2026-05-18",
    cover: "images/hoc-cong-cu.jpg",
    content: `
Tuần này mình thử viết lại một macro tự động hoá việc làm mới dữ liệu trong Excel. Có những đoạn code chạy êm re, có những đoạn báo lỗi mà chẳng biết vì sao.

Học công cụ mới luôn giống nhau: vài giờ đầu bực bội, rồi đến lúc mọi thứ khớp lại, cảm giác đó rất đáng.
    `
  },

  {
    title: "Sương sớm ở Đà Lạt",
    category: "du lịch",
    date: "2026-03-02",
    cover: "images/da-lat.jpg",
    content: `
Có những chuyến đi không cần lịch trình. Sáng sớm, sương còn giăng trên đồi thông, mình chỉ ngồi im ở quán cà phê nhỏ ven đường, nhìn người ta dắt xe qua con dốc.

Đôi khi du lịch không phải để check-in, mà để chậm lại một nhịp mình đã quên mất.
    `
  }

];
