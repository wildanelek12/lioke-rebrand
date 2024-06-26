import React from 'react'
import { categories } from '../constants'
import { useLibraryStore } from '../store'
import { cn } from '@/utils'

export default function CategoryFilter() {
	const [selectedId, setSelectedId] = React.useState(0)
	const { searchParams, setSearchParams } = useLibraryStore()

	const handleOnChangeFilter = (id) => {
		setSelectedId(id)
		setSearchParams({ ...searchParams, category_id: id > 0 ? id : undefined })
	}

	return (
		<div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
			{categories.map(({ id, label }) => (
				<button
					key={id}
					type="button"
					onClick={() => handleOnChangeFilter(id)}
					className={cn(
						'border border-blue-600 px-4 py-2 sm:text-sm text-xs font-medium rounded-md transition-colors whitespace-nowrap',
						id === selectedId
							? 'bg-blue-700 text-white'
							: 'bg-white text-blue-700 hover:text-white hover:bg-blue-700'
					)}
				>
					{label}
				</button>
			))}
		</div>
	)
}
