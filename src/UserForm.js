import React from "react";
import { useForm } from "react-hook-form";

export const UserForm = ({ user, onSubmit }) => {
	const { register, handleSubmit } = useForm({
		defaultValues: {
			userName: user ? user.userName : "" ,
			surName: user ? user.surName : "" ,
			firstName: user ? user.firstName : "" ,
			midname: user ? user.midname : "" ,
			age: user ? user.age : "" ,
			birthday: user ? user.birthday : "" ,
			gender: user ? user.gender : "" ,
			email: user ? user.email : "" ,
		},
	});

	const submitHandler = handleSubmit((data) => {
		onSubmit(data);
	});

	return (
		<form onSubmit={submitHandler}>
			<div className="form-group">
				<label htmlFor="userName">Username:</label>
				<input
					className="form-control" 
					{...register("userName")} 
					type="text" 
					id="userName" 
					placeholder="User Name*" 
					autoComplete="off"
					required
				/>
			</div>
			<div className="form-group">
				<label htmlFor="surName">Last Name:</label>
				<input
					className="form-control" 
					{...register("surName")} 
					type="text" 
					id="surName" 
					placeholder="Last Name*" 
					autoComplete="off"
					required
				/>
			</div>
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
				<label htmlFor="midname">Middle Name (Optional):</label>
				<input 
					className="form-control" 
					{...register("midname")} 
					type="text" 
					id="midname" 
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
					<option value="" disabled selected hidden>Select gender...</option>
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