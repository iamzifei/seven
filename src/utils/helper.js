const regexp = /([A-Za-z\u00C0-\u1FFF\u2800-\uFFFD]+)/gi;

const capitalizeWord = input =>
  input.replace(
    regexp,
    match => match.charAt(0).toUpperCase() + match.substr(1)
  );

export { capitalizeWord };
