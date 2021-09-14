import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "./api";

export const UserList = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const fetchItems = async () => {
			const users = await getUsers()
			setItems(users)
		}
		fetchItems()
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
								<tr key={user._id}>
									<td>
										{user.surName}
									</td>
									<td>
										{user.firstName}
									</td>
									<td>
										<Link to={`/edit/${user._id}`}>Edit</Link> /
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