import React from "react";
import { UserForm } from "./UserForm";

export const CreateUser = () => {
	const onSubmit = (data) => {
		alert(JSON.stringify(data));
	};

  return (
		<div className="container">
			<div className="mt-3">
				<h3>Create User</h3>
				<UserForm onSubmit={onSubmit}/>
			</div>
		</div>
	)
}