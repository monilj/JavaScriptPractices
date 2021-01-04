const day = 'wednesday';
switch (day) {
    case 'monday': // day === monday
        console.log("Plan couse structure");
        break;

    case 'tuesday': // day === monday
        console.log("Plan couse sturctur");
        break;

    case 'wednesday':
    case 'thursday':
        console.log("Record video");
        break;

    default:
        console.log('Not a valid day');
        break;
}

//Above code is equivalent to
if (day === 'wednesday' || day === 'thursday') {
    console.log("Record video");
}


