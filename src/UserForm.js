import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";


export const UserForm = ({ user, onSubmit }) => {
	const {register,handleSubmit} = useForm({
		defaultValues: {
			lastName: user ? user.lastName : "" ,
			firstName: user ? user.firstName : ""
		} 
	});
	const history = useHistory();

	const submitHandler = handleSubmit((data) => {
		onSubmit(data)
		history.push("/");
	});

	return (
		<form onSubmit={submitHandler}>
			<div className="form-group">
				<label htmlFor="firstName">First Name:</label>
				<input
					className="form-control" 
					{...register("firstName")} 
					type="text" 
					id="firstName" 
					placeholder="First Name*" 
					autoComplete="off"
					required
				/>
			</div>
			<div className="form-group">
				<label htmlFor="lastName">Last Name:</label>
				<input 
					className="form-control" 
					{...register("lastName")} 
					type="text" 
					id="lastName" 
					placeholder="Last Name*" 
					autoComplete="off"
					required
				/>
			</div>
			<div className="form-group">
				<label htmlFor="middleName">Middle Name (Optional):</label>
				<input 
					className="form-control" 
					{...register("middleName")} 
					type="text" 
					id="middleName" 
					placeholder="Middle Name"
					autoComplete="off"
				/>
			</div>
			<div className="form-group">
				<label htmlFor="age">Age:</label>
				<input 
					className="form-control" 
					{...register("age")} 
					type="tel" 
					id="age" 
					placeholder="Age*"
					autoComplete="off"
					maxLength="3"
					required
				/>
			</div>
			<div className="form-group">
				<label htmlFor="birthday">Birthday:</label>
				<input 
					className="form-control" 
					{...register("birthday")} 
					type="date" 
					id="birthday" 
					required
					/>
			</div>
			<div className="form-group mt-3">
				<label htmlFor="gender">Gender:</label>
				<select {...register("gender")} required>
					<option value="" disabled selected hidden>Please Choose...</option>
					<option value="female">Female</option>
					<option value="male">Male</option>
					<option value="others">Others</option>
				</select>
			</div>
			<div className="form-group mt-3">
				<label htmlFor="email">Email:</label>
				<input 
					className="form-control" 
					{...register("email")} 
					type="email" 
					id="email" 
					placeholder="Email*"
					autoComplete="off"
					required
				/>
			</div>
			<div className="form-group mt-3">
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</div>
		</form>
	);
};