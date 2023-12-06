const calculate = (evt) => {
	evt.preventDefault();
  const formData = new FormData(evt.target);
  let { sum } = Object.fromEntries(formData);
  const extract = (amount, value) => Math.floor(amount / value);
  const separators = [500, 100, 10, 2];
  const smallestSeparator = separators[separators.length - 1]; 
	
	for (const separator of separators) {
  	const extract = Math.floor(sum / separator);
    const element = document.getElementById(`result-${separator}`);
    sum -= extract * separator;
    element.innerHTML = extract;
  }
}

const form=document.getElementById("form");
form.addEventListener('submit', calculate);
