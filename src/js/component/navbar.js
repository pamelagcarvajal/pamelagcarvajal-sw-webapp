import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = (props) => {

	function eliminar(index) {
		let tempArr = props.favoritos.slice()
		tempArr = tempArr.filter((_, index2) => { return index2 != index })
		props.function(tempArr)
	}

	return (
		<nav className="navbar fixed-top navbar-light bg-light mb-3 container-fluid">
			<Link to="/">
				{/* <span className="navbar-brand mb-0 h1">React Boilerplate</span> */}
				<img width={75} height={50} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fcabcd83-e213-46ae-a932-49a7f8ecdf7c/deju607-ecf26e7a-83f2-406a-af89-31d53cb05e1e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZjYWJjZDgzLWUyMTMtNDZhZS1hOTMyLTQ5YTdmOGVjZGY3Y1wvZGVqdTYwNy1lY2YyNmU3YS04M2YyLTQwNmEtYWY4OS0zMWQ1M2NiMDVlMWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.2eH2bDT54Mj9krYqslhlc9UJlVe5MUeuJOiQYkHHvz8" />
			</Link>
			<div className="ml-auto">
				<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites <strong>{props.favoritos.length}</strong>
				</button>
				<ul className="dropdown-menu dropdown-menu-lg-end" aria-labelledby="dropdownMenuButton1">
					{props.favoritos.map((favorito, index) => {
						return <li>
							<div className="d-flex flex-row">
								<a className="dropdown-item" href="#">{favorito}</a>
								<i onClick={() => { eliminar(index) }} className="btn fas fa-trash"></i>
							</div>
						</li>
					})}
				</ul>
			</div>
		</nav>
	);
};


