'use client'

import React from 'react'
import { ProjectCard } from './components'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useGetProjectsQuery } from '@/redux/services/projectApi'

const Breadcrumb = dynamic(() => import('antd').then((mod) => mod.Breadcrumb), {
	ssr: false,
})

export default function Page({ params }) {
	const { data } = useGetProjectsQuery({ searchParams: params })

	return (
		<React.Fragment>
			<Breadcrumb
				separator=">"
				items={[
					{
						title: 'Galery',
					},
					{
						title: <Link href="/project">Projects</Link>,
						href: null,
					},
					{
						title: <Link href={`/project/${params.year}`}>{params.year}</Link>,
						href: null,
					},
					{
						title: params.month,
					},
				]}
			/>

			<div className="flex flex-row flex-wrap gap-6">
				{data?.data?.data.map((val, i) => (
					<ProjectCard key={i} data={val} />
				))}
			</div>
		</React.Fragment>
	)
}
