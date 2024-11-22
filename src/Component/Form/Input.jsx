function Input({
    type,
    name,
    labelText,
    value,
    placeholder="",
    onChange
}) {
    return (
        <div className="input">
            <label>
                {labelText}

                {type==="textarea" ? (
                    <textarea
                        name={name}
                        value={value}
                        placeholder={placeholder}
                        onChange={onChange}

                    />  
                ) : (
                    <input
                        type={type}
                        name={name}
                        value={value}
                        placeholder={placeholder}
                        onChange={onChange}
                    />
                )}
            </label>
        </div>
    );
};

export default Input;