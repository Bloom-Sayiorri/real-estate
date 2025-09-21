import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
	const [formData, setFormData] = useState({});
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.id]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);
			const res = await fetch("/api/auth/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});
			const data = await res.json();
			if (sata.success === false) {
				setError(data.message);
				setLoading(false);
				return;
			}
			setLoading(false);
			setError(null);
			navigate("/signin");
		} catch (error) {
			setLoading(false);
			setError(error.message);
		}
	};

	return (
		<div className="mx-auto p-3 max-w-lg">
			<h1 className="my-8 text-center text-3xl">Sign Up</h1>
			<form onSubmit={handleSubmit} className="flex flex-col gap-3">
				<input
					type="text"
					placeholder="Username"
					id="username"
					onChange={handleChange}
					className="border rounded-lg p-3 my-4"
				/>
				<input
					type="email"
					placeholder="Email"
					id="email"
					onChange={handleChange}
					className=" border rounded-lg p-3 my-4"
				/>
				<input
					type="password"
					placeholder="Password"
					id="password"
					onChange={handleChange}
					className=" border rounded-lg p-3 my-4"
				/>
				<button
					disabled={loading}
					className="bg-blue-500 text-white border rounded-lg p-3 hover:opacity-90 disabled:bg-slate-500 uppercase">
					{loading ? "Loading..." : "Sign Up"}
				</button>
			</form>
			<div className="flex gap-3 my-7">
				<p className="flex">Have an account?</p>
				<Link to={"/signin"}>
					<span className="text-blue-500 hover:text-blue-700">Sign In</span>
				</Link>
			</div>
			{error && <p className="text-red-500 mt-4 text-2xl">{error}</p>}
		</div>
	);
}

export default SignUp;
