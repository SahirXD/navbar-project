function select_id(idName){
	let ID = document.getElementById(idName);
	return ID
}
function select_class(className){
	let CLASS = document.getElementsByClassName(className);
	return CLASS
}
function select_tag(tagName){
	let TAG = document.getElementsByTagName(tagName);
	return TAG
}
function select_query(queryName){
	let QUERY = document.querySelector(queryName);
	return QUERY
}
export{
	select_id,
	select_class,
	select_tag,
	select_query
}