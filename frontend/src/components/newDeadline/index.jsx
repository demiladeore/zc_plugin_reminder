// import React from 'react'

// const NewDeadline = () => {
// 	return (
// 		<>
// 			<div>New Deadline Modal</div>
// 		</>
// 	)
// }

// export default NewDeadline

import React from 'react'

const TimerTextBox = () => {
	return (
		<div className="w-full flex item-baseline my-8 text-base">
			<input
				className="bg-brand-bg-lightGrey rounded border-2 px-5 m-2 h-11"
				type="text"
				placeHolder="00:00"
			/>
			<select
				className="p-2 bg-brand-bg-lightGrey px-3 rounded border-2 appearance-none m-2 text-brand-text-lightIcon"
				name="time"
			>
				<option value="AM" selected>
					AM
				</option>
				<option value="PM">PM</option>
			</select>
		</div>
	)
}
export default TimerTextBox