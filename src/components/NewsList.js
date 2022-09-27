import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './../components/NewsItem'

function NewsList({ category }) {
	// 뉴스들 데이터를 담아놓는 곳
	const [articles, setArticles] = useState(null);
	// 로딩 상태를 담아놓는 곳
	const [loading, setLoading] = useState(false);
	// api 주소에 카테고리 값으로 끼워넣을 상수 생성
	// category가 'all'이면 카테고리 설정x, 아니면 &category=${category}
	const query = category === 'all' ? '' : `&category=${category}`;

	//useEffect: 처음 렌더될 때 뉴스들의 데이터를 axios로 받아옴 
	useEffect(() => {
		//async를 사용하는 함수 따로 선언
		const fetchData = async () => {
			//지금은 로딩중!
			setLoading(true);
			//아래의 코드를 츄라이
			try {
				//axios로 API를 호출한다.
				const response = await axios.get(
					`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=a5ee1fb9d67341ec941a37c89cfc3283`
					//'https://newsapi.org/v2/top-headlines?country=kr&apiKey=a5ee1fb9d67341ec941a37c89cfc3283'
				);
				//articles에 데이터를 담는다.
				setArticles(response.data.articles)
			} catch (err) {
				//오류가 생길 경우엔
				// 콘솔로 오류 찍어주세요
				console.log(err)
			}
			// 로딩끝♥
			setLoading(false);
		}
		//fetchdata 사용
		fetchData();
	}, [category])

	// 로딩중일 때
	if (loading) {
		return <div>대기중</div>;
	}
	//아직 article의 값이 없을 때 (null일 때)
	if (!articles) {
		return null;
	}

	return (
		<div className="NewsListBlock">
			{articles.map((article) => (
				<NewsItem key={article.url} article={article} />
			))}
		</div>
	);
}

export default NewsList;