module.exports = (input) => {
	const isInNumberFormat = !isNaN(Number(input));
	const hasNoPeriodThusIsInteger = input.indexOf('.') === -1;

	return isInNumberFormat && hasNoPeriodThusIsInteger;
};