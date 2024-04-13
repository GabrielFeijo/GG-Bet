'use client';
import { useSearchParams } from 'next/navigation';

export type TabState = 'normal' | 'auto';

const TabButton = ({ text }: { text: string }) => {
	const tab: TabState = (useSearchParams().get('tab') as TabState) || 'normal';

	const setTab = (tab: TabState) => {
		const url = new URL(window.location.toString());
		url.searchParams.set('tab', tab.toLowerCase());
		window.history.pushState({}, '', url);
	};

	return (
		<button
			className={`py-3 px-10 ${
				text.toLowerCase() === tab && 'bg-selected-tab'
			} rounded`}
			onClick={() => setTab(text as TabState)}
		>
			{text}
		</button>
	);
};

export default TabButton;
