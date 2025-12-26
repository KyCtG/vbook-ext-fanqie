function execute(url) {
    let host = CONFIG.HOST;
    let bookId = url; // Ở đây url chính là ID ta truyền từ search/detail
    let response = fetch(host + "/catalog?book_id=" + bookId);
    if (response.ok) {
        let json = response.json();
        let data = [];
        json.forEach(item => {
            data.push({
                name: item.title,
                url: item.item_id.toString(), // ID chương để dùng cho chap.js
                host: host
            });
        });
        return Response.success(data);
    }
    return Response.error("Lỗi lấy mục lục");
}