function loadHtml(url, targetId) {
	$.ajax({
		url: url,
		async: false,
		success: function(data) {
			$("#"+targetId).html(data);
		}
	})
}