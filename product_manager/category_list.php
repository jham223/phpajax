<?php include '../view/header.php'; ?>
<main>

    <h1>Category List</h1>
    <table>
        <tr>
            <th>Name</th>
            <th>&nbsp;</th>
        </tr>  
		<tbody id='categoryTable'>
            
		</tbody>
    </table>

    <h2>Add Category</h2>
    <!-- add code for form here -->
    <form action="index.php" method="post" id="add_category_form">
        <input type="hidden" name="action" value="add_category">

        <label>Category Name:</label>
        <input type="text" name="name" />
        <br>

        <label>&nbsp;</label>
        <input type="submit" value="Add Category" />
        <br>
    </form>

    <p><a href="index.php?action=list_products">List Products</a></p>

</main>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.1.3/toastr.min.js"></script>
<script src="scripts/categoryList.js"></script>
<?php include '../view/footer.php'; ?>