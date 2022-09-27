import React from 'react';
import { useNavigate } from 'react-router-dom';

function Categories() {
	const navigate = useNavigate();
	const categories = [
		{
			name: 'all',
			text: '전체보기',
		},
		{
			name: 'business',
			text: '비즈니스',
		},
		{
			name: 'entertainment',
			text: '엔터테인먼트',
		},
		{
			name: 'health',
			text: '건강',
		},
		{
			name: 'science',
			text: '과학',
		},
		{
			name: 'sports',
			text: '스포츠',
		},
		{
			name: 'technology',
			text: '기술',
		},
	];
	return (
		//카테고리 wrap
		<div className="CategoriesBlock">
			{/* map 메서드로 각 카테고리들(NavLink)을 생성 */}
			{categories.map((c) => (
				//key에는 고유한 이름이 들어가도록 c.name을 쓴다
				<div className="Category" key={c.name}
					//active 상태면 active 클래스를, 아니면 그없
					//className={({ isActive }) => (isActive ? 'active' : undefined)}
					//NavLink의 주소! 
					//'all'이면 기본페이지로 그 외의 카테고리면 '/카테고리이름'
					onClick={() => { navigate(c.name === 'all' ? '/' : `/${c.name}`) }}
				>
					{c.text}
				</div>
			))}
		</div>
	)
}

export default Categories;