const NUMBER_FORMATER = new Intl.NumberFormat("en-uk", {
	maximumFractionDigits: 0,
})

function formatNumber(number) {
	if( number === "" || number == null ) return
	if (!number.includes("."))return NUMBER_FORMATER.format(number)
	const [integer, decimal] = number.split(".");
	if (decimal == null) return NUMBER_FORMATER.format(integer)
	return `${NUMBER_FORMATER.format(integer)}.${decimal}`
}

export default formatNumber;