import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const UserList = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		setItems([
			{lastName: "Kekw", firstName: "Putin", id: 0},
			{lastName: "Kekw", firstName: "Pog", id: 1},
		])
	}, [])

  return (
		<div className="container">
			<div className="mt-3">
				<h3>User List</h3>
				<table className="table table-striped mt-3">
					<thead>
						<tr>
							<th>Last Name</th>
							<th>First Name</th>
							<th>Edit/Delete</th>
						</tr>
					</thead>
					<tbody>
						{
							items.map(user => (
								<tr key={user.id}>
									<td>
										{user.lastName}
									</td>
									<td>
										{user.firstName}
									</td>
									<td>
										<Link to={`/edit/${user.id}`}>Edit</Link> |
										<Link to={"/"}>Delete</Link>
									</td>
								</tr>
							))
						}
					</tbody>
				</table>	
			</div>
		</div>
	)
}