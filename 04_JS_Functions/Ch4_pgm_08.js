// Displaying a menu

var displayMenu;
var displayMyMenu;

displayMenu = function () {
	console.log("Please choose an option:");
	console.log("(1) Print log");
	console.log("(2) Upload file");
	console.log("(3) Download file");
	console.log("(4) Delete file"); 
	console.log("(9) Quit");
};
displayMyMenu = function () {
	console.log("My Custom Menu:");
	console.log("(1) View profile");
	console.log("(2) Edit settings");
	console.log("(3) Logout");
};

displayMenu();
displayMyMenu();



/* Further Adventures
 *
 * 1) Add two more options to the displayMenu
 *    function and run the program.
 *
 * 2) Create your own displayMyMenu function.
 *
 * 3) Add a line to call your function as well.
 *    Run the program
 *
 */