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
    title: "Dashboard",
    category: "works",
    date: "2026-06-08",
    cover: "",
    content: `
https://sales-dashboard-n2uygdf9ulrbzgvnrwbfwz.streamlit.app/
    `
  },
 
{
    title: "Những ngày mưa",
    category: "thoughts",
    date: "2026-07-27",
    cover: "rainy-days.jpg",
    content: `
Có những ngày mưa mà không phải trời mưa. Mình ngồi đó, làm việc vẫn xong, vẫn cười khi cần cười, nhưng bên trong cứ trống trống, như thể mọi thứ mình làm đều không đủ, không đúng, không có ý nghĩa gì mấy.

Cảm giác bất lực đó không đến từ một chuyện cụ thể. Nó âm ỉ, khó gọi tên. Chỉ biết là có những lúc mình tự hỏi mình đang cố gắng vì cái gì, và không có câu trả lời nào nghe thuyết phục cả.

Mình không muốn giả vờ là những ngày đó đều có bài học đẹp đẽ ở cuối. Có ngày đúng là chỉ tệ vậy thôi, không cần phải biến nó thành động lực hay bài học gì cả.

Nhưng mình cũng nhận ra một điều: cảm giác "mình không có giá trị" là một cảm giác, không phải một sự thật. Nó đến rồi đi, giống như một cơn mưa. Ngày mai trời có thể vẫn âm u, nhưng cũng có thể nắng lên mà mình không ngờ tới.

Nên những ngày mưa như vậy, mình cho phép mình không ổn. Không cố gồng lên tích cực, cũng không cố giải quyết gì ngay. Chỉ cần đi qua nó, chậm rãi, rồi đợi nắng lên.
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
    title: "Tư duy ngược và tư duy mở",
    category: "learn",
    date: "2026-04-01",
    cover: "reverse-open-thinking.jpg",
    content: `
Gần đây mình đọc hai quyển sách cùng lúc, và lạ là hai ý tưởng tưởng chừng khác nhau lại bổ sung cho nhau rất khớp: tư duy ngược và tư duy mở.

Tư duy ngược, hiểu đơn giản, là thay vì hỏi "làm sao để đạt được điều này", mình hỏi ngược lại "điều gì sẽ khiến mình chắc chắn thất bại" — rồi tránh xa những điều đó. Nghe có vẻ tiêu cực, nhưng thực ra lại rất thực tế. Nhiều khi mình không biết con đường đến thành công là gì, nhưng lại biết rõ con đường nào chắc chắn dẫn tới thất bại. Tránh cái sai đôi khi dễ và hiệu quả hơn nhiều so với việc cố tìm ra cái đúng ngay từ đầu.

Mình thử áp dụng vào công việc: thay vì hỏi "làm sao để báo cáo này thật hoàn hảo", mình hỏi "điều gì sẽ khiến báo cáo này sai hoặc vô dụng" — số liệu không khớp nguồn, thiếu ngữ cảnh, sếp đọc không hiểu ngay câu đầu. Tránh được từng cái đó, bản báo cáo tự nhiên tốt lên mà không cần một công thức "hoàn hảo" nào cả.

Tư duy mở thì ngược lại một chút — nó không phải là né tránh, mà là chủ động thách thức chính những gì mình đang tin. Mình quen với việc bảo vệ quan điểm của mình, nhưng tư duy mở đòi hỏi mình thỉnh thoảng phải tự hỏi: nếu mình sai thì sao? Không phải để nghi ngờ bản thân liên tục, mà để giữ cho đầu óc đừng đóng băng lại ở một câu trả lời có sẵn.

Combo của hai thứ này thú vị ở chỗ: tư duy ngược giúp mình tránh những sai lầm rõ ràng, còn tư duy mở giúp mình không tự mãn với những gì tưởng là đúng. Một cái giữ mình an toàn, một cái giữ mình không ngừng học.

Mình chưa áp dụng thành thục gì cả, vẫn đang tập hỏi ngược lại mỗi khi định lao vào làm gì đó, và tập im lặng lâu hơn một chút trước khi bác bỏ một ý kiến trái chiều. Nhưng chỉ riêng việc chậm lại để hỏi hai câu đó thôi, mình đã thấy mình quyết định sáng suốt hơn hẳn.
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
    title: "Con duy nhất",
    category: "thoughts",
    date: "2026-04-27",
    cover: "mother-son.jpg",
    content: `
Mẹ mình già rồi. Tóc mẹ đã bạc nhiều, có những sợi mẹ chưa kịp nhuộm, cứ để vậy vì bận, hoặc vì không còn quá bận tâm như hồi trẻ nữa.

Mình là con một. Mình ở chung nhà, ngủ chung phòng, chăm sóc mẹ mỗi ngày. Vậy mà không hiểu sao, càng ở gần, mình lại càng nhận ra rõ hơn việc mẹ đang già đi. Một cách đi chậm hơn một chút. Một câu nói lặp lại mà mẹ không nhớ đã kể. Một buổi sáng mẹ ngủ dậy trễ hơn thường lệ.

Mình hay chọc mẹ cười, nói khùng nói điên, giỡn những chuyện không đâu để mẹ bật cười thành tiếng. Nhưng có lẽ mình làm vậy không chỉ để mẹ vui. Mình làm vậy để giấu đi một nỗi sợ mình không dám nói thành lời — sợ một ngày sẽ không còn ai để mình chọc cười nữa.

Có những đêm nằm cạnh mẹ, nghe tiếng mẹ thở đều, mình lại tự nhiên nghĩ đến một ngày nào đó sẽ chỉ còn lại mình mình. Không phải vì mình đang xa mẹ, mà chính vì mình đang ở gần mẹ đến vậy, nên mỗi dấu hiệu của tuổi già lại càng rõ ràng, càng khiến lòng mình nghẹn lại.

Mình không biết phải chuẩn bị tâm lý cho điều đó như thế nào, hay có nên chuẩn bị hay không. Có lẽ không có cách nào chuẩn bị đủ cho một mất mát như vậy, dù mình đã ở cạnh mẹ mỗi ngày.

Điều mình có thể làm, là trân trọng những gì đang có ngay lúc này. Nấu cho mẹ một bữa ăn ngon. Nhuộm tóc cho mẹ khi mẹ muốn. Tiếp tục chọc mẹ cười, giỡn những trò khùng điên như mọi ngày — không phải để giấu đi nỗi sợ nữa, mà vì đó thực sự là cách mình yêu thương mẹ, theo cách của riêng hai mẹ con mình.
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
    title: "Nhớ Melbourne",
    category: "travel",
    date: "2026-03-20",
    cover: "melbourne-memory.jpg",
    content: `
Có những nơi mình chỉ ở một thời gian ngắn, nhưng lại nhớ như thể đã sống ở đó cả một đời. Với mình, đó là Melbourne.

Mình nhớ cái lạnh ở đó — không phải cái lạnh khắc nghiệt, mà là cái lạnh khiến mình phải khoác thêm một lớp áo, hai tay đút túi, và bước đi nhanh hơn một chút trên đường. Melbourne nổi tiếng vì thời tiết thay đổi trong một ngày — sáng nắng, trưa mưa, chiều lạnh run — nhưng lạ là mình lại thấy nhớ chính sự thất thường đó, như nhớ một người bạn tính khí khó đoán nhưng dễ thương.

Mình nhớ những con hẻm nhỏ (laneway) giấu một quán cà phê xinh xắn, nhớ ly cà phê flat white đầu tiên uống trong cái lạnh cắt da, hơi nóng bốc lên từ ly, tay ấm dần lên từng ngụm.

Mình nhớ cả những con người ở đó — cách họ trò chuyện cởi mở với người lạ, cách một nhân viên quán cà phê nhớ mặt mình chỉ sau vài lần ghé, cách mọi người xếp hàng trật tự chờ tram mà không ai vội vã cáu gắt.

Có những ký ức không lớn lao gì — chỉ là một buổi chiều đi bộ dọc sông Yarra, gió lạnh táp vào mặt, hay một tối ngồi trong quán ấm nhìn ra ngoài trời đang mưa. Nhưng chính những khoảnh khắc nhỏ đó lại đọng lại lâu nhất.

Mình không biết khi nào sẽ quay lại. Nhưng mỗi khi trời trở lạnh ở đây, mình lại chợt nhớ Melbourne — nhớ một nơi xa mà có lúc từng cảm giác như nhà.
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
   {
    title: "Mùa nắng, mùa mưa và đôi giày chạy bộ",
    category: "life",
    date: "2026-03-08",
    cover: "sun-rain-run.jpg",
    content: `
Sài Gòn chỉ có hai mùa: mùa nắng và mùa mưa. Và mùa nào cũng cho mình một lý do rất chính đáng để... không tập thể dục.

Mùa nắng thì "trời nóng quá, chạy ra đường chắc xỉu". Mùa mưa thì "mưa vầy ai mà chạy". Cứ thế, đôi giày chạy bộ có những tháng nằm im trong góc nhà, sạch sẽ một cách đáng xấu hổ.

Rồi mình nhận ra vấn đề chưa bao giờ nằm ở thời tiết. Nó nằm ở chỗ mình đợi một điều kiện hoàn hảo mới chịu bắt đầu — mà điều kiện hoàn hảo thì chẳng bao giờ tới.

Nên mình đổi cách chơi. Mùa nắng thì dậy sớm hơn một chút, chạy lúc trời còn dịu, về nhà kịp ngắm nắng lên. Mùa mưa thì trải thảm tập trong nhà, vài động tác giãn cơ, chống đẩy, plank — mưa cứ rơi ngoài cửa sổ, mình cứ tập trong này. Không buổi tập nào hoàn hảo, nhưng buổi nào cũng đáng.

[youtube: https://www.youtube.com/watch?v=KQetemT1sWc | Here Comes The Sun — nghe bài này chạy bộ buổi sáng là đúng bài]

Điều hay nhất của việc vận động đều đặn không phải là cơ bụng hay số cân. Nó là cảm giác mình giữ được một lời hứa nhỏ với bản thân, mỗi ngày, bất kể trời nắng hay mưa.

Sức khoẻ giống như ly cafe sáng — không thể uống bù. Mỗi ngày một chút, nắng cũng được, mưa cũng được, miễn là đừng dừng lại.
    `
  },
  {
    title: "Ở lại, sau tất cả những lần muốn buông",
    category: "works",
    date: "2026-05-01",
    cover: "stay-through-storm.jpg",
    content: `
Có một giai đoạn mình từng nghĩ đến chuyện nghỉ việc gần như mỗi tuần.

Sếp mới về thay, cách làm việc khác hoàn toàn với những gì mình đã quen. Kỳ vọng cao hơn, quy trình thay đổi, và có những ngày mọi thứ mình làm đều như chưa đủ. Khó khăn không đến từ một việc lớn, mà từ rất nhiều việc nhỏ dồn lại — một cuộc họp căng thẳng, một email góp ý không như mong đợi, một buổi tối về nhà chỉ muốn nằm im không nghĩ gì nữa.

Có những đêm mình mở trang tìm việc, gõ vào ô tìm kiếm rồi lại đóng lại. Không phải vì không có lựa chọn khác, mà vì trong lòng vẫn còn một câu hỏi chưa trả lời được: mình đang chạy trốn, hay mình đang thực sự cần rời đi?

[youtube: https://www.youtube.com/watch?v=lwgr_IMeEgA | Rise Up — Andra Day. Bài hát mình nghe đi nghe lại trong giai đoạn đó]

Mình chọn ở lại, không phải vì không còn đường nào khác, mà vì muốn tự mình trả lời câu hỏi đó cho rõ ràng trước khi bước tiếp.

Vài tháng sau, mọi thứ không đột nhiên dễ dàng hơn. Nhưng mình dễ dàng hơn với chính mình. Mình học cách hỏi lại khi chưa hiểu thay vì tự đoán rồi làm sai. Học cách tách bạch: một lời góp ý gay gắt không đồng nghĩa với việc mình thất bại. Và học được rằng đôi khi kỳ vọng cao từ người khác lại chính là thứ đẩy mình đi xa hơn mình từng nghĩ.

Mình không biết đây có phải là quyết định đúng cho tất cả mọi người không. Có những công việc, những môi trường, thực sự cần phải rời đi mới là lựa chọn đúng đắn — và điều đó hoàn toàn không sao cả.

Nhưng với mình, lần này, ở lại hoá ra lại là bài học lớn nhất. Không phải vì mọi thứ trở nên hoàn hảo, mà vì mình phát hiện ra mình bền hơn mình tưởng.
    `
  },
  {
    title: "AI và tương lai ngành tài chính: góc nhìn từ người làm dữ liệu",
    category: "learn",
    date: "2026-07-04",
    cover: "ai-finance.jpg",
    content: `
Cách đây vài năm, một buổi sáng làm báo cáo doanh số của mình thường bắt đầu bằng việc mở hàng chục file Excel, đối chiếu số liệu, và tự hỏi tại sao Pivot Table lại không refresh đúng như mình muốn.

Giờ thì phần lớn việc đó đã có AI làm giúp. Không phải kiểu "robot thay thế con người" như phim viễn tưởng, mà cụ thể hơn nhiều: một công cụ hiểu được câu hỏi bằng ngôn ngữ tự nhiên, tự viết công thức, tự phát hiện điểm bất thường trong dữ liệu mà trước đây phải nhìn cả trăm dòng mới nhận ra.

Ngành tài chính, theo mình, là một trong những ngành sẽ bị AI định hình lại rõ nét nhất — không phải vì tài chính "dễ" mà vì tài chính vốn dĩ là ngành của dữ liệu và mẫu hình. Mà dữ liệu và mẫu hình lại chính là thứ AI làm tốt nhất.

**Vài điều mình thấy đang thay đổi rõ nhất:**

Dự báo và lập kế hoạch không còn chỉ dựa vào số liệu lịch sử và trực giác của người lập kế hoạch. AI có thể xử lý hàng loạt biến số cùng lúc — mùa vụ, xu hướng thị trường, thậm chí cả tin tức — để đưa ra dự báo sát hơn nhiều so với công thức Excel truyền thống.

Phát hiện gian lận và rủi ro giờ chạy theo thời gian thực. Một giao dịch bất thường có thể được gắn cờ trong tích tắc, thay vì được phát hiện sau một kỳ kiểm toán.

Công việc phân tích, thứ trước đây chiếm phần lớn thời gian của một nhân viên tài chính — tổng hợp số liệu, làm báo cáo, đối chiếu dữ liệu — đang dần được AI đảm nhận. Điều đó không có nghĩa là vai trò con người biến mất, mà là dịch chuyển: từ người *thực hiện phép tính* sang người *đặt câu hỏi đúng* và *diễn giải ý nghĩa* đằng sau con số.

Đây là điều mình nghĩ quan trọng nhất: AI giỏi xử lý dữ liệu, nhưng chưa thể thay thế phán đoán, đạo đức nghề nghiệp, hay khả năng chịu trách nhiệm cho một quyết định tài chính. Một mô hình có thể gợi ý, nhưng người ký tên vào quyết định vẫn phải là con người.

Mình không nghĩ AI sẽ "cướp việc" theo nghĩa đơn giản. Mình nghĩ nó sẽ thay đổi định nghĩa của việc "làm tốt" trong ngành này. Người giỏi Excel nhất không còn là người thắng cuộc — người biết hỏi đúng câu hỏi, biết dùng công cụ để khuếch đại năng lực của mình, mới là người đi xa.

Với mình, đó vừa là một áp lực, vừa là một cơ hội. Áp lực vì phải học liên tục để không bị bỏ lại. Cơ hội vì lần đầu tiên, một người không có nền tảng lập trình như mình vẫn có thể tự động hoá công việc, tự xây công cụ riêng, tự học những thứ mà trước đây chỉ dân kỹ thuật mới làm được.

Tương lai ngành tài chính, mình đoán, sẽ không phải là "con người hay AI". Mà là con người biết dùng AI, và con người không biết dùng AI — và khoảng cách giữa hai nhóm đó sẽ ngày càng rõ.
    `
  },
  {
    title: "Về quê",
    category: "travel",
    date: "2026-07-15",
    cover: "countryside-bike.jpg",
    content: `
Điều mình mong nhất sau mỗi hai tuần làm việc không phải là một chuyến du lịch, mà là được về quê.

Không có lịch trình, không có điểm check-in. Chỉ cần chiếc xe đạp, đôi giày chạy bộ và một ngày thật thảnh thơi.

Mình thích cảm giác đạp xe khi cả con đường còn vắng, chạy bộ giữa không khí mát lạnh, ghé uống một trái dừa tươi hay ly nước mía ven đường. Những niềm vui rất nhỏ nhưng đủ làm cả ngày trở nên dễ chịu.

Có người tìm sự cân bằng ở những nơi thật xa. Còn mình thì tìm thấy nó ở chính quê nhà.

Mỗi lần trở lại thành phố, mình không mang theo gì nhiều, ngoài một cơ thể khỏe hơn và một tinh thần nhẹ nhõm hơn trước.

    `
  },
];
