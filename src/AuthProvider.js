import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
	const [habitsToday, setHabitsToday] = useState([]);
	const [refresh, setRefresh] = useState(false);

	return (
		<AuthContext.Provider
			value={{ habitsToday, setHabitsToday, refresh, setRefresh }}
		>
			{children}
		</AuthContext.Provider>
	);
}







