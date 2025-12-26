function execute(url) {
    let host = CONFIG.HOST;
    let bookId = url.split('/').pop();
    let response = fetch(host + "/info?book_id=" + bookId);
    if (response.ok) {
        let item = response.json();
        return Response.success({
            name: item.book_name,
            cover: item.cover_url,
            author: item.author,
            description: item.abstract,
            detail: "Số chương: " + item.chapter_count,
            ongoing: true,
            host: host
        });
    }
    return Response.error("Lỗi lấy thông tin truyện");
}