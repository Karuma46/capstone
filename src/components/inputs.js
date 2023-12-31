const FormInput = (props) => {
	return (
		<>
			<div className={`formInput ${props.className}`}>
				<label htmlFor={props.id}>{props.label}</label>
				{props.type === "select" && (
					<select
						id={props.id}
						required={props.required}
						onChange={(e) =>
							props.onChange({ [props.id]: e.target.value })
						}>
						{props.options.map((i) => (
							<option value={i.value} key={i.name}>
								{i.name}
							</option>
						))}
					</select>
				)}
				{["email", "text", "tel"].includes(props.type) && (
					<input
						type={props.type}
						id={props.id}
						required={props.required}
						onChange={(e) =>
							props.onChange({ [props.id]: e.target.value })
						}
					/>
				)}
				{["date", "month"].includes(props.type) && (
					<input
						type={props.type}
						id={props.id}
						required={props.required}
						min={props.min}
						max={props.max}
						onChange={(e) =>
							props.onChange({ [props.id]: e.target.value })
						}
					/>
				)}
				{props.type === "number" && (
					<input
						type={props.type}
						max={props.max}
						min={props.min}
						id={props.id}
						required={props.required}
						onChange={(e) =>
							props.onChange({ [props.id]: e.target.value })
						}
					/>
				)}
			</div>
		</>
	);
};

export default FormInput;
