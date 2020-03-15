import { extend, configure } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import { messages } from 'vee-validate/dist/locale/en.json';

// configure clases
configure({
	classes: {
		valid: 'is-valid',
		invalid: 'is-invalid',
		dirty: [
			'is-dirty',
			'is-dirty'
		] // multiple classes per flag!
		// ...
	}
});

Object.keys(rules).forEach((rule) => {
	extend(rule, {
		...rules[rule], // copies rule configuration
		message: messages[rule] // assign message
	});
});
