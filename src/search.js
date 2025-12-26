function execute(key, page) {
    let host = CONFIG.HOST; 
    let response = fetch(host + "/search?keyword=" + key);
    if (response.ok) {
        let json = response.json();
        let data = [];
        json.forEach(item => {
            data.push({
                name: item.book_name,
                link: item.book_id.toString(), // ID truyện để dùng cho detail
                cover: item.cover_url,
                author: item.author,
                description: item.abstract,
                host: host
            });
        });
        return Response.success(data);
    }
    return Response.error("Server fqapi không phản hồi");
}