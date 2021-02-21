function welcomeMessage(fullname) {
    return function(fullname) {
	alert(`Welcome ${fullname}`);
    }
}

const guillaume = welcomeMessage("Guillaume");
const alex = welcomeMessage("Alex");
const fred = welcomeMessage("Fred");
