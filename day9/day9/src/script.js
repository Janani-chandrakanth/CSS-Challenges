
	function update() {
	const time = new Date();
	t = time.toString();
	tArray = t.split(" ");
	week = tArray[0];
	day = tArray[2];
	month = tArray[1];
	year = tArray[3];
	$(".day").text(`${week} ${day} ${month} ${year}`);
	$(".time").text(`${tArray[4]}`);

	const seconds = time.getSeconds() + time.getMilliseconds() / 1000;
	const dashOffset = 647 - (seconds / 60) * 647;
	$("circle").css("stroke-dashoffset", dashOffset);
}
update();
setInterval(update, 1000);

