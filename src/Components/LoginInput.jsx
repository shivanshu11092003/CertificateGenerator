import React from 'react'

const LoginInput = ({ name, placeholder, value, handleChange, children }) => {
    return (
        <div className="flex flex-col items-center justify-center p-4">

            <div className="flex items-center justify-center  w-full bg-white pl-3 rounded-lg  p-1 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-orange-300">

                <p className="text-black self-start p-1 mt-2">{children}</p>

                <input
                    name={name}
                    type={name}
                    value={value}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="block  min-w-0 grow py-1.5 pl-1 pr-3 text-lg text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0"

                />
            </div>
            <div className="text-red-600 text-sm text-start w-full p-1"></div>

        </div>
    )
}

export default LoginInput