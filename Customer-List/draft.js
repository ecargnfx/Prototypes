$('form').submit(function () {
    if ($('input').val() !== '') {
        var input_value = $('input').val();
        $('ul').append('<li>' + input_value + '<a href="">x</a></li>');
        //$('ul').append('<li>' + input_value '<a href="">x</a></li>');

    };
    $('input').val('');
    return false;
});

$(document).on('click', 'a', function (e) {
    e.preventDefault();
    $(this).parent().remove();
});

// loop through pixels, look at brightness value, and map it
for (int x = 0; x < img.width; x++){
  for (int y = 0; y < img.width; y++){
    int index = x + y * img.width;
    int col = img.pixels[index]; 
  }
}



// grab value of elementid, store it
// when is it triggered? on what?
// when event happens what should be done?

// user clicked on the add button
// if there is any text in the field, add text to list
document.getElementById("add-category-btn").addEventListener('click', function(){
  
  var customerCategory = document.getElementById("new-customer-category").value;
  if(customerCategory) {
    addCategoryToList(customerCategory);
    document.getElementById("new-customer-category").value = '';
  }
});

// do what with what?
// take customerCategory, create new li, append to list
function addCategoryToList (customerCategory){

  var categoryList = document.getElementById('customer-category-list');

  var categoryName = document.createElement('li');
  categoryName.innerText = customerCategory;

  var segmentList = document.createElement('ul');
  segmentList.classList.add('customer-segment-list');

  var addSegment = document.createElement('li');

  var addSegmentLink = document.createElement('a'); 
  addSegmentLink.setAttribute('href', '#');
  addSegmentLink.setAttribute("id", "add-segment"); 
  addSegmentLink.innerText = "Add Segment";


  addSegment.appendChild(addSegmentLink);
  segmentList.appendChild(addSegment);
  categoryName.appendChild(segmentList);

  categoryList.insertBefore(categoryName, categoryList.childNodes[0]);

};

// when clicked, create new list item
document.getElementById("add-segment").addEventListener('click', function(){

  var categoryList = document.getElementById('customer-segment-list'); 
  
   
}