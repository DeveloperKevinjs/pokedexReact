import { useState } from 'react';

export function useGetMenu() {
	const [menu, setMenu] = useState(false);

	const handleClickMenu = () => {
		setMenu(!menu);
	};
	const ClosedMenu = () => {
		setMenu(false);
	};
	const verifyStatusMenu = () => {
		if (!menu) return '-translate-y-[200%]';
		return 'translate-y-0';
	};
	return { handleClickMenu, ClosedMenu, verifyStatusMenu };
}
