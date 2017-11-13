window.onload = setupPage;
var url = "../services/categoryServiceIndex.php";
var categoryid;
var newCategoryName;

function setupPage() {
	getCategories();
}
			
function getCategories(){		
	geturl = "../services/categoryServiceIndex.php" + "?action=getCategories";
	$.getJSON( geturl, createCategoryTable);
}

function createCategoryList(categories) {
	$("ul#categoryList li").remove();
	$.each(categories, function(i, category) {
		$("ul#categoryList").append("<li>" +
		"<a class='getCategories' href='' id='" + category.id + "'>" + category.name + "</a></li>");
	});	
	$("a.getCategories").click( function(event){
    	event.preventDefault();
    	newCategoryName = this.innerHTML;
		geturl = url + this.id;
		$.getJSON( geturl, createCategoryTable);
	});
}

function createCategoryTable(categories) {
	if (categories.length > 0) {
		$("tbody#categoryTable tr").remove();
		$.each(categories, function(i, category) {
			$("tbody#categoryTable").append("<tr><td>" + category.name + "</td>" + 
			"<td><button class='deleteCategory' id='" + category.id + "'>Delete</button></td>" + 
			"</tr>");
		});	
		$("button.deleteCategory").click(deleteCategory);
	}
	else
		toastr.info('There are no categories'); 
}

function deleteCategory() {
	categoryid = this.id;
	deleteurl = url + "?action=deleteCategory";
	//$.post(deleteurl, {cateogory_id: categoryid, category_id: categoryid}, createCategoryTable);
	$.post(deleteurl, {category_id: categoryid})
		.done(createCategoryTable)
		.fail(displayError);
}

function addCategory() {
	categoryid = this.id;
	addurl = url + "?action=addCategory";
	//$.post(deleteurl, {cateogory_id: categoryid, category_id: categoryid}, createCategoryTable);
	$.post(addurl, {category_id: category, category_id: categoryid})
		.done(createCategoryTable)
		.fail(displayError);
}

function displayError()
{
	toastr.error('Something has gone wrong!') 
}
