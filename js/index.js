import {
	select_id,
	select_class,
	select_tag,
	select_query
} from "./modules/identity.js"
//show navbar event
let menuIconElement = select_id('menu-icon')
menuIconElement.onclick = function(){
	let navbar = select_id("nav-content")
	navbar.style.display = "block"
}
//close navbar event 
let closeButton = select_id("back-button")
closeButton.onclick = function(){
	let navbar = select_id("nav-content")
	navbar.style.display = "none"
}