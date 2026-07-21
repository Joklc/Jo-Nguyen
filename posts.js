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
  aboutPhoto: "Jo.png",

  // Menu chủ đề trên thanh điều hướng — tên phải TRÙNG với category của bài
  menu: ["works", "travel", "thoughts", "life", "learn"],

  about: `
Xin chào, mình là Joklc.

Đây là nơi mình lưu lại những điều vụn vặt: một chuyến đi, một công cụ mới học được, hay chỉ là một ý nghĩ giữa tuần. Không có chủ đề cố định — nghĩ gì viết nấy.

Ngoài viết lách, mình làm việc với dữ liệu, Data, Excel và các hệ thống báo cáo. Nếu bạn muốn trao đổi gì, cứ để lại lời nhắn nhé.
  `
};

const POSTS = [

  {
    title: "What is work-life balance",
    category: "thoughts",
    date: "2026-07-17",
    cover: "work-life.jpg",
    content: `
Work-life balance không phải là chia đều thời gian giữa công việc và cuộc sống.

Mỗi người sẽ có một định nghĩa khác nhau về sự cân bằng. Với tôi, không có một công thức chung cho tất cả.

Work is life. Life is work.

Khi công việc mang lại giá trị, sự phát triển và niềm vui, nó không còn là thứ phải tách biệt khỏi cuộc sống. Và khi cuộc sống nuôi dưỡng sức khỏe, các mối quan hệ và tinh thần, nó cũng giúp chúng ta làm việc tốt hơn.

Điều quan trọng không phải là cân bằng 50/50, mà là tìm được nhịp sống phù hợp với chính mình ở từng giai đoạn của cuộc đời.
    `
  },

  {
    title: "Một ý nghĩ giữa tuần",
    category: "thoughts",
    date: "2026-06-30",
    cover: "y-nghi.jpg",
    content: `
Không phải ngày nào cũng cần một bài học lớn. Có ngày chỉ cần nhận ra mình đã cười nhiều hơn hôm qua một chút, vậy là đủ.
    `
  },

  {
    title: "Về việc học một công cụ mới",
    category: "works",
    date: "2026-05-18",
    cover: "hoc-cong-cu.jpg",
    content: `
Tuần này mình thử viết lại một macro tự động hoá việc làm mới dữ liệu trong Excel. Có những đoạn code chạy êm re, có những đoạn báo lỗi mà chẳng biết vì sao.

Học công cụ mới luôn giống nhau: vài giờ đầu bực bội, rồi đến lúc mọi thứ khớp lại, cảm giác đó rất đáng.
    `
  },

  {
    title: "Sương sớm ở Đà Lạt",
    category: "travel",
    date: "2026-03-02",
    cover: "da-lat.jpg",
    content: `
Có những chuyến đi không cần lịch trình. Sáng sớm, sương còn giăng trên đồi thông, mình chỉ ngồi im ở quán cà phê nhỏ ven đường, nhìn người ta dắt xe qua con dốc.

Đôi khi du lịch không phải để check-in, mà để chậm lại một nhịp mình đã quên mất.
    `
  },
{
    title: "Mindfulness Leadership – Lãnh đạo bắt đầu từ chính mình",
    category: "thoughts",
    date: "2026-07-02",
    cover: "mindful-leadership.jpg",
    content: `
Trong công việc, nhiều người cho rằng lãnh đạo là người giỏi nhất, quyết đoán nhất hay có quyền lực lớn nhất.

Nhưng theo tôi, lãnh đạo thực sự bắt đầu từ khả năng lãnh đạo chính mình.

[youtube: https://youtu.be/eTb3bgqz6Hc?si=dSE2_wPtG7dzIypO | Video mình thích về chủ đề này]

Mindfulness Leadership (Lãnh đạo tỉnh thức) là khả năng nhận thức rõ suy nghĩ, cảm xúc và hành động của bản thân để đưa ra quyết định có chủ đích, thay vì phản ứng theo cảm xúc hay áp lực.

Người lãnh đạo tỉnh thức không tạo ra sự phục tùng bằng quyền lực, mà tạo ra sự cam kết bằng niềm tin, sự tôn trọng và tính chính trực.

Họ biết lắng nghe trước khi phán xét, bình tĩnh trước áp lực và tập trung giải quyết vấn đề thay vì tìm người để đổ lỗi.

Qua trải nghiệm, tôi nhận ra một điều đơn giản nhưng rất quan trọng:

Chúng ta không thể thay đổi người khác hay hoàn cảnh, nhưng luôn có thể thay đổi cách mình phản ứng và cách mình lãnh đạo.

Trong thời đại AI, kiến thức và kỹ năng sẽ ngày càng dễ được hỗ trợ bởi công nghệ. Điều tạo nên giá trị khác biệt của một nhà lãnh đạo sẽ là những phẩm chất rất "con người": sự tỉnh thức, lòng chính trực, khả năng đồng cảm và truyền cảm hứng.

Lãnh đạo không bắt đầu từ việc thay đổi người khác. Lãnh đạo bắt đầu từ việc thay đổi chính mình.
    `
  },

  {
    title: "Code",
    category: "works",
    date: "2026-05-20",
    cover: "coding-journey.jpg",
    content: `
Có một cảm giác rất thú vị khi tự tay tạo ra một website của riêng mình.

Không phải vì nó quá phức tạp hay hoành tráng, mà vì từ một vài dòng code ban đầu, dần dần nó trở thành một nơi mang dấu ấn của chính mình. Từ việc chọn tên miền, thiết kế giao diện, sửa từng lỗi nhỏ cho đến lúc website chính thức hoạt động trên Internet – tất cả đều là một hành trình học hỏi đầy hứng khởi.

Điều mình thích nhất không phải là viết được bao nhiêu dòng code, mà là cảm giác có thể biến một ý tưởng trong đầu thành một sản phẩm thật mà bất kỳ ai cũng có thể truy cập chỉ bằng một đường link.

Mỗi lỗi được sửa, mỗi tính năng được hoàn thành đều giúp mình hiểu thêm một chút về lập trình, về cách Internet vận hành và quan trọng hơn là về khả năng tự học của bản thân.

Đôi khi, học một kỹ năng mới không chỉ để làm việc hiệu quả hơn, mà còn để mở ra một góc nhìn mới về thế giới.

Hôm nay là một website. Biết đâu ngày mai sẽ là một sản phẩm lớn hơn.

Never stop learning.
    `
  },
{
    title: "Ly latte mỗi sáng",
    category: "life",
    date: "2026-02-20",
    cover: "morning-latte.jpg",
    content: `
Mỗi sáng nhà mình bắt đầu bằng một nghi thức nhỏ: pha hai ly cafe latte từ chiếc máy pha cafe espresso cũ kỹ.

Chiếc máy không xịn như ngoài tiệm. Nó là thành quả của những lần mày mò, vài lần rò nước, và không ít lần espresso chảy ra đắng nghét. Nhưng có lẽ vì thế mà ly cafe từ nó luôn có một vị riêng — vị của thứ mình tự tay làm ra.

Chuột phụ trách đánh sữa, mèo phụ trách nén cafe. Lâu dần thành phân công bất thành văn, chẳng ai bảo ai. Tiếng máy chạy, mùi cafe lan cả phòng, và mười lăm phút không điện thoại, không deadline — chỉ có hai người với hai ly latte extra hot.

Lớp bọt sữa hôm tròn hôm méo, hình trái tim hôm ra hôm không. Nhưng hoá ra điều đó chẳng quan trọng. Quan trọng là mỗi sáng đều có một khoảng lặng để bắt đầu ngày mới cùng nhau.

    `
  },
];
