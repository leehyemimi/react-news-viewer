import React from 'react';

function NewsItem({ article }) {
	const { title, description, url, urlToImage } = article;
	return (
		<div className="NewsItemBlock">
			{/* urlToImage가 있는 경우: 썸네일 요소 형성 */}
			{urlToImage && (
				<div className="thumbnail">
					<a href={url} target="_blank" rel="noopener noreferrer">
						<img src={urlToImage} alt="thumbnail" />
					</a>
				</div>
			)}
			{/* 컨텐츠 영역 */}
			<div className="contents">
				{/* 제목 */}
				<h2>
					<a href={url} target="_blank" rel="noopener noreferrer">
						{title}
					</a>
				</h2>
				{/* 설명 */}
				<p>{description}</p>
			</div>
		</div>
	)
}

export default NewsItem;