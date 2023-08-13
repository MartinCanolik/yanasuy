import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import React from "react";
import { DateRange } from "react-date-range";
import format from "date-fns/format";
import { addDays } from "date-fns";
import es from "date-fns/locale/es";
import "./DateRange.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
// eslint-disable-next-line react/prop-types
const DateRangeComp = ({ setStay }) => {
	// date state

	const [range, setRange] = useState([
		{
			startDate: new Date(),
			endDate: addDays(new Date(), 7),
			key: "selection",
		},
	]);
	const formattedStartDate =
		range.length && format(range[0].startDate, "dd/MM/yyyy");
	const formattedEndDate =
		range.length && format(range[0].endDate, "dd/MM/yyyy");

	const formatDateSelection = () => {
		const formattedSelection = {
			startDate: formattedStartDate,
			endDate: formattedEndDate,
		};
		setStay(formattedSelection);
	};

	// const unavailableDate = [
	// 	addDays(new Date(), 8),
	// 	addDays(new Date(), 9),
	// 	addDays(new Date(), 10),
	// ];

	// open close
	const [open, setOpen] = useState(false);

	// get the target element to toggle
	const refOne = useRef(null);

	useEffect(() => {
		// event listeners
		document.addEventListener("keydown", hideOnEscape, true);
		document.addEventListener("click", hideOnClickOutside, true);
	}, []);

	// hide dropdown on ESC press
	const hideOnEscape = (e) => {
		if (e.key === "Escape") {
			setOpen(false);
		}
	};

	// Hide on outside click
	const hideOnClickOutside = (e) => {
		if (refOne.current && !refOne.current.contains(e.target)) {
			setOpen(false);
		}
	};

	return (
		<div ref={refOne} className='relative'>
			<input
				className=' cursor-pointer appearance-none text-sm mt-2 py-2 px-3 w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
				value={`${formattedStartDate} - ${formattedEndDate}`}
				readOnly
				type='text'
				onClick={() => setOpen(!open)}
			/>

			<div>
				{open && (
					<DateRange
						onChange={(item) => {
							setRange([item.selection]), formatDateSelection();
						}}
						editableDateInputs={true}
						moveRangeOnFirstSelection={false}
						ranges={range}
						months={1}
						minDate={new Date()}
						direction='horizontal'
						className='calendarElement'
						color='#06b6d4'
						disabledDates={[]}
						locale={es}
					/>
				)}
			</div>
		</div>
	);
};

export default DateRangeComp;
