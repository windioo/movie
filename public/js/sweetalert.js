$('.delete-confirm').on('click', function (event) {
    event.preventDefault();
    const url = $(this).attr('href');
    swal({
        title: 'Are you sure?',
        text: 'This record and it`s details will be permanantly deleted!',
        icon: 'warning',
        buttons: ["Cancel", "Yes!"],
    }).then(function(value) {
        if (value) {
            window.location.href = url;
        }
    });
    
});

// $('.submit').on('click', function (event) {
//     event.preventDefault();
//    swal({
//   title: "Good job!",
//   text: "You clicked the button!",
//   icon: "success",
//   button: "Aww yiss!",
// });
// });