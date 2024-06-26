'use client'

import { useGetProfileBySlugQuery } from '@/redux/services/profileApi'
import { message } from 'antd'
import { useParams, usePathname } from 'next/navigation'
import React from 'react'
import { MdCopyAll } from 'react-icons/md'

export default function ContentHeader() {
	const params = useParams()
	const { data } = useGetProfileBySlugQuery(params.slug)

	const handleOnCopy = () => {
		navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_BASE_URL}/profile/${data?.data?.slug}`)
		message.info('profile url berhasi di salin!')
	}

	return (
		<div className="container flex items-end justify-between px-4 py-6 font-medium text-center border-b ">
			<p className="text-xl font-extrabold">Portfolio&apos;s</p>

			<button
				type="button"
				onClick={handleOnCopy}
				className="flex flex-row items-center gap-2 px-3 py-1 text-sm font-semibold text-white rounded-full bg-primary"
			>
				<MdCopyAll />
				<span>URL</span>
			</button>
		</div>
	)
}
