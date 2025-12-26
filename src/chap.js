function execute(url) {
    let host = CONFIG.HOST;
    let response = fetch(host + "/content?item_id=" + url);
    if (response.ok) {
        let json = response.json();
        return Response.success(json.content); // Trả về nội dung truyện
    }
    return Response.error("Lỗi tải chương");
}