// export const MovieData =[
//     {id: '1', name: 'Bến Phà Xác Sống', year: '2021',nation:"Việt Nam", img:'assets/benpha.jpeg', big:'assets/bpxs_big.jpg', director: 'Nhất Trung',
// clip:'https://www.youtube.com/embed/1Jz3e_lq-wg',
// info:'Bến Phà Xác Sống tiếp nối những gì diễn ra trong Cù Lao Xác Sống trước đó. Diễm (Ốc Thanh Vân) bắt bé Na (Mona Bảo Tiên) về cho con gái đã hóa zombie của mình bầu bạn. Cậu bé Tài Anh (Huy Khang) lén bám theo xe để giải cứu cô bạn. Trong khi đó, những người sống sót còn lại cũng bị chia thành nhiều nhóm nhỏ.'},
//     {id: '2', name: 'Cù Lao Xác Sống',year: '2023',nation:"Việt Nam", img:'assets/culao.png', big:'assets/clxs_big.jpg',director: 'Nhất Trung',
// clip:'https://www.youtube.com/embed/fCi9o3iieJU',
// info:'Tác phẩm lấy bối cảnh miền Tây, xoay quanh một vùng cù lao thuộc hạ nguồn Mekong. Bắt đầu với sự kiện một cụ già bị zombie tấn công trong đêm, thảm kịch dần lan khắp vùng quê nghèo.'},
//     {id: '3', name: 'Kungfu Panda', year: '2003',nation:"USA" , img :'assets/kungfupanda.jpg', big:'assets/kfp_big.png',director: 'John Stevenson & Mark Osborne',
// clip:'https://www.youtube.com/embed/PXi3Mv6KMzY',
// info:'Kungfu Panda kể về nhân vật chính Po - chú gấu trúc với sứ mệnh trở thành Thần long đại hiệp, sử dụng Kungfu để đánh bại kẻ xấu và bảo vệ dân lành. '},
//     {id: '4', name: 'Na Tra Ma Đồng Giáng Thế', year: '2019',nation:"China" ,img:'assets/natra.jpg', big:'assets/ntmdgt_big.jpg', director: 'Giảo Tử',
// clip:'https://www.youtube.com/embed/yCJy9roIv8Q',
// info:'Câu chuyện truyền kỳ của Na Tra, một cậu bé đã đứng lên chống lại số phận bị áp đặt và những định kiến xã hội, nơi con người không chịu chung sống hòa bình với những người bị coi là dị loại.'},
//     {id: '5', name: 'The Amazing Spiderman', year: '2005',nation:"USA" ,img:'assets/theamazingspiderman.jpg', big:'assets/tasm_big.jpg', director: 'Marc Webb',
// clip:'https://www.youtube.com/embed/-tnxzJ0SSOw',
// info:'The Amazing Spider-Man đưa Người Nhện trở về thời kỳ tuổi teen khi Peter Parker còn là một cậu học sinh cấp ba hiếu động. Cha mẹ biến mất một cách bí ấn từ khi còn nhỏ, Peter lớn lên trong tình yêu thương của hai người bác Ben và May. Khi lớn lên, Peter đã bộc lộ năng khiếu khoa học thừa hưởng ở cha. Một ngày nọ, anh chàng tìm thấy chiếc cặp sách bí ẩn mà cha để lại. Cuộc gặp gỡ tình cờ với cộng sự cũ của cha - tiến sĩ Curt Connors - cũng mở ra một cuộc sống mới cho Peter là trở thành Người Nhện có sức mạnh phi thường.' },
//     {id: '6', name: 'The Amazing Spiderman 2', year: '2010',nation:"USA" , img:'assets/theamazingspiderman2.jpg', big:'assets/tasm2_big.jpeg',director: 'Marc Webb',
// clip:'https://www.youtube.com/embed/nbp3Ra3Yp74',
// info:'Nhưng bên cạnh câu chuyện "chinh chiến và yêu đương", The Amazing Spider-Man 2 còn có gì khác? Đó là câu chuyện về những người anh hùng, về nỗi cô đơn, về những kẻ bị chối bỏ, mà điểm nhấn chính là hai nhân vật chính diện/phản diện trung tâm của bộ phim: Peter Parker và Electro.'},
//     {id: '7', name: 'Tuyệt Đỉnh Kungfu', year: '2001',nation:"China" , img:'assets/tuyetdinh.jpg', big:'assets/tdkf_big.jpg', director: 'Châu Tinh Trì',
// clip:'https://www.youtube.com/embed/FtE9-o6dBEI',
// info:'Trong xã hội hỗn loạn ở Trung Quốc những năm 1940, các băng đảng xã hội đen thực sự có ảnh hưởng, đáng sợ nhất phải kể đến là bang Lưỡi Búa (Phủ Đầu Bang). Thủ lĩnh của bang Lưỡi Búa tên Sâm, vốn là kẻ độc ác say mê chém giết lại cực kỳ nhẫn tâm. Người của bang Lưỡi Búa đi đến đâu nỗi kinh hoàng theo đến đó. Người dân thành phố thì lo lắng, đám cảnh sát thì sợ sệt. Chỉ có khu ổ chuột Chuồng Heo là không bị nhũng nhiễu vì người dân nơi đây quá nghèo.'},
//     {id: '8', name: 'Thanh Xà Bạch Xà: Duyên Khởi', year: '2019',nation:"China" , img:'assets/thanhxa.jpg',big:'assets/txbx_big.jpg', director: 'Huỳnh Gia Khương',
// clip:'https://www.youtube.com/embed/6bryHFVM6pM',
// info:'Bạch xà duyên khởi (2019) là câu chuyện kể về Tiểu Bạch một xà tinh nỗ lực tu luyện nên có được dung mạo xinh đẹp. Trong một lần được sư phụ cử đi ám sát tên quốc sư chuyên giết rắn để luyện công, Tiểu Bạch đã bị hắn đánh bại và rơi xuống sông sâu. May mắn thay cô được một anh chàng tốt bụng cứu giúp và giữa hai người nhanh chóng nảy sinh tình cảm. Tuy nhiên, những thế lực xấu xa lại có những toan tính riêng khiến cho cặp đôi rơi vào tình cảnh thập tử nhất sinh.'}
//   ];






// //   [
// //     {
// //     "name": "Bến Phà Xác Sống",
// //     "producer": "Nhất Trung",
// //     "image": "assets/bpxs_big.jpg",
// //     "info": "Bến Phà Xác Sống tiếp nối những gì diễn ra trong Cù Lao Xác Sống trước đó. Diễm (Ốc Thanh Vân) bắt bé Na (Mona Bảo Tiên) về cho con gái đã hóa zombie của mình bầu bạn. Cậu bé Tài Anh (Huy Khang) lén bám theo xe để giải cứu cô bạn. Trong khi đó, những người sống sót còn lại cũng bị chia thành nhiều nhóm nhỏ.",
// //     "clip": "https://www.youtube.com/embed/1Jz3e_lq-wg",
// //     "id": "1"
// //     },
// //     {
// //     "name": "Cù Lao Xác Sống",
// //     "producer": "Nhất Trung",
// //     "image": "assets/clxs_big.jpg",
// //     "info": "Tác phẩm lấy bối cảnh miền Tây, xoay quanh một vùng cù lao thuộc hạ nguồn Mekong. Bắt đầu với sự kiện một cụ già bị zombie tấn công trong đêm, thảm kịch dần lan khắp vùng quê nghèo.",
// //     "clip": "https://www.youtube.com/embed/fCi9o3iieJU",
// //     "id": "2"
// //     },
// //     {
// //     "name": "Kungfu Panda",
// //     "producer": "John Stevenson & Mark Osborne",
// //     "image": "assets/kfp_big.png",
// //     "info": "In this animated feature by noted Japanese director Hayao Miyazaki, 10-year-old Chihiro (Rumi rage) and her parents (Takashi Naito, Yasuko) stumble upon a seemingly abandoned amusement park. After her mother and father are turned into giant pigs, Chihiro meets the mysterious Haku, who explains that the park is a resort for supernatural beings who need a break from their time spent in the earthly realm, and that she must work there to free herself and her parents.",
// //     "clip": "https://www.youtube.com/embed/PXi3Mv6KMzY",
// //     "id": "3"
// //     },
// //     {
// //     "name": "Na Tra Ma Đồng Giáng Thế",
// //     "producer": "Giảo Tử",
// //     "image": "assets/ntmdgt_big.jpg",
// //     "info": "Câu chuyện truyền kỳ của Na Tra, một cậu bé đã đứng lên chống lại số phận bị áp đặt và những định kiến xã hội, nơi con người không chịu chung sống hòa bình với những người bị coi là dị loại.",
// //     "clip": "https://www.youtube.com/embed/yCJy9roIv8Q",
// //     "id": "4"
// //     },
// //     {
// //     "name": "The Amazing Spiderman",
// //     "producer": "Marc Webb",
// //     "image": "assets/tasm_big.jpg",
// //     "info": "The Amazing Spider-Man đưa Người Nhện trở về thời kỳ tuổi teen khi Peter Parker còn là một cậu học sinh cấp ba hiếu động. Cha mẹ biến mất một cách bí ấn từ khi còn nhỏ, Peter lớn lên trong tình yêu thương của hai người bác Ben và May. Khi lớn lên, Peter đã bộc lộ năng khiếu khoa học thừa hưởng ở cha. Một ngày nọ, anh chàng tìm thấy chiếc cặp sách bí ẩn mà cha để lại. Cuộc gặp gỡ tình cờ với cộng sự cũ của cha - tiến sĩ Curt Connors - cũng mở ra một cuộc sống mới cho Peter là trở thành Người Nhện có sức mạnh phi thường.",
// //     "clip": "https://www.youtube.com/embed/-tnxzJ0SSOw",
// //     "id": "5"
// //     },
// //     {
// //     "name": "The Amazing Spiderman 2",
// //     "producer": "Marc Webb",
// //     "image": "assets/tasm2_big.jpeg",
// //     "info": "Nhưng bên cạnh câu chuyện chinh chiến và yêu đương, The Amazing Spider-Man 2 còn có gì khác? Đó là câu chuyện về những người anh hùng, về nỗi cô đơn, về những kẻ bị chối bỏ, mà điểm nhấn chính là hai nhân vật chính diện/phản diện trung tâm của bộ phim: Peter Parker và Electro.",
// //     "clip": "https://www.youtube.com/embed/3mMN693-F3U?si=5u6xYjof749_wmz-",
// //     "id": "6"
// //     },
// //     {
// //     "name": "Tuyệt Đỉnh Kungfu",
// //     "producer": "Châu Tinh Trì",
// //     "image": "assets/tdkf_big.jpg",
// //     "info": "Trong xã hội hỗn loạn ở Trung Quốc những năm 1940, các băng đảng xã hội đen thực sự có ảnh hưởng, đáng sợ nhất phải kể đến là bang Lưỡi Búa (Phủ Đầu Bang). Thủ lĩnh của bang Lưỡi Búa tên Sâm, vốn là kẻ độc ác say mê chém giết lại cực kỳ nhẫn tâm. Người của bang Lưỡi Búa đi đến đâu nỗi kinh hoàng theo đến đó. Người dân thành phố thì lo lắng, đám cảnh sát thì sợ sệt. Chỉ có khu ổ chuột Chuồng Heo là không bị nhũng nhiễu vì người dân nơi đây quá nghèo.",
// //     "clip": "https://www.youtube.com/embed/FtE9-o6dBEI",
// //     "id": "7"
// //     },
// //     {
// //         "name": "Thanh Xà Bạch Xà: Duyên Khởi",
// //         "producer": " Marvel Studios",
// //         "image": "assets/txbx_big.jpg",
// //         "info": "Bạch xà duyên khởi (2019) là câu chuyện kể về Tiểu Bạch một xà tinh nỗ lực tu luyện nên có được dung mạo xinh đẹp. Trong một lần được sư phụ cử đi ám sát tên quốc sư chuyên giết rắn để luyện công, Tiểu Bạch đã bị hắn đánh bại và rơi xuống sông sâu. May mắn thay cô được một anh chàng tốt bụng cứu giúp và giữa hai người nhanh chóng nảy sinh tình cảm. Tuy nhiên, những thế lực xấu xa lại có những toan tính riêng khiến cho cặp đôi rơi vào tình cảnh thập tử nhất sinh.",
// //         "clip": "https://www.youtube.com/embed/6bryHFVM6pM",
// //         "id": "8"
// //         }
// //     ]