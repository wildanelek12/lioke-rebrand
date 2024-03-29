import Datepicker from 'react-tailwindcss-datepicker'

export default function DatePickerComponent({ onChange, ...props }) {
	return (
		<>
			<div className="flex flex-col gap-1">
				<label className="font-semibold capitalize">Project Time</label>
				<Datepicker
					inputClassName="!outline-none !ring-0 p-2 w-full rounded-sm border !border-[#CCCED1]"
					primaryColor="teal"
					onChange={(newValue) => onChange(newValue)}
					showShortcuts
					readOnly
					{...props}
				/>
			</div>
		</>
	)
}
