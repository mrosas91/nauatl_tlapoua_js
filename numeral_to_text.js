prefixes = ['-', 'sem', 'om', 'ex', 'naj', 'makuil', '6', '7', '8', '9', 'matlak'];

root_names_to_9 = ['amopouali',  'se', 'ome', 'eyi', 'naui', 'makuili', 'chikuasej', 'chikome', 'chikueyi', 'chiknaui'];

root_10 = 'majtlaktli';
root_20 = 'pouali';
// root_400 = 'tsontli';
// root_8000 = 'xiquipilli';
// # root_160000

connector = ' iuan ';

supported_number_limit =  119;

function numeral_to_text(numeral) {
	if (numeral > supported_number_limit) {
		console.log('No disponible. ' + numeral + ' es mayor que ' + supported_number_limit + '.');
	} else {
		console.log(n_to_text(numeral, true));
	}
}

function n_to_text(numeral, first_time) {
  possible_connector = '';
  if (!first_time) {
    possible_connector = connector;
    if (numeral == 0) {
      return '';
    }
  }

  if (numeral < 10) {
    return possible_connector + root_names_to_9[numeral];
  }
	else if (numeral < 20) {
    return possible_connector + root_10 + n_to_text(numeral - 10, false);
  }
	else if (numeral < 400) {
    times_in_20 = Math.floor(numeral / 20);
    return possible_connector + prefixes[times_in_20] + root_20 + n_to_text(numeral - (times_in_20 * 20), false);
  }
  // # elif numeral < 8000 :
  // # 	return 'sentsontli'
  else {
    return 'UNKNOWN';
  }
}
