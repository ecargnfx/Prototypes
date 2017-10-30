// user hits enter/submit input or clicked on the add button
// if there is any text in the field, add value to list, append list to ul

$("#new-customer-category").on('keyup', function (e) {
    if (e.keyCode == 13) {
        createNewCategory();
    }
});

$('#add-category-btn').click(createNewCategory);

function createNewCategory(){
    if ($('#new-customer-category').val() !== '') {
        var customerCategory = $('#new-customer-category').val();
        $('#customer-category-list').prepend('<li id="category-name"></li>');
        $('#category-name').append('<input type="text" placeholder="Customer Segment" value="' + customerCategory + '" id="customer-category">');
        $('#category-name').append('<div id="add-segment"></div>');
        $('#add-segment').append('<a href="#">Add Segment</a>');
        $('#category-name').append('<ul id="customer-segment-list"></ul>');
        // $('#customer-segment-list').append('<li><a href="#" id="add-segment">Add Segment</a></li>');

    };
    $('#new-customer-category').val('');
    return false;
};

$("#new-customer-segment").on('keyup', function (e) {
    if (e.keyCode == 13) {
        createNewSegment();
    }
});

$('#add-segment > a').click(createNewSegment);

function createNewSegment(){
  // console.log("hello")
  $('#customer-segment-list').prepend('<li id="customer-segment"></li>');
  // $('#customer-segment').append('<div class="flex-two">test</div>');
  // $('#customer-segment').append('<div class="flex-one">test</div>');
  $('#customer-segment').append('<div class="flex-two" id="customer-problem"></div>');
  $('#customer-problem').append('<input type="text" autofocus="true" placeholder="Customer Segment" id="new-customer-segment">');
  $('#customer-problem').append('<select id="styled"></select>');
  $('#styled').append('<option value="" selected disabled hidden>has a problem</option>');
  $('#customer-problem').append('<input type="text" placeholder="Describe Customer\'s Problem or Need" id="new-problem">');
  $('#customer-segment').append('<div class="flex-one">test</div>');
};

$('#customer-category').keydown(function (e) {
   if (e.which === 13) {
       $('#new-customer-segment').focus();
   }
});

// $('#customer-segment-list').click(function(e){
//   if(e.target.nodeName == "#add-segment"){
//     console.log(e)
//     $('#customer-segment-list').prepend('<li id="customer-segment"></li>');
//     // $('#customer-segment').append('<div class="flex-two">test</div>');
//     // $('#customer-segment').append('<div class="flex-one">test</div>');
//     $('#customer-segment').append('<div class="flex-two" id="customer-problem"></div>');
//     $('#customer-problem').append('<input type="text" placeholder="Customer Segment" id="new-customer-segment">');
//     $('#customer-segment').append('<div class="flex-one">test</div>');

//   }
// });