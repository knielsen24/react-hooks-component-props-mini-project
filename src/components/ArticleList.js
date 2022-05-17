import Article from "./Article"

function ArticleList({ posts }) {
	
	const postsArray = posts.map((post) => {
	
		const { id, date, title, preview, minutes } = post
		return (
			<Article
				key={id}
				date={date}
				title={title} 
				preview={preview}
				minutes={minutes}
			/>
		)
	})
	return (
		<main>
			{postsArray}
		</main>
	)
}

export default ArticleList