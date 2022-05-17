function Article({ date = "January 1, 1970", title, preview, minutes }) {
	
	const emojiMinutes = (minutes) => {
		return (minutes > 30) ?
		"🍱".repeat(Math.ceil(minutes / 10)) :
		"☕".repeat(Math.ceil(minutes / 5))
		
	}

	// test if minutes are over 30 minutes
	// if over run function that breaks down emojis by 10 minute intervals
	// if else run function that breaks down emojis by 5 minute intervals
	
	return (
		<article>
			<h3>{title}</h3>
			<small>{date}</small>
			<small>  •{emojiMinutes(minutes)} {minutes} min read</small>
			<p>{preview}</p>
		</article>
	)
}

export default Article