$.getJSON("movie.json", function (data) {
    $.each(data, function (i, data) {
        $('#filmCard').append('<div class="col-lg-4 mb-2"><div class="card" style="width: 18rem;"><img src=' + data.poster + ' class="card-img-top"><div class="card-body"><h5 class="card-title">' + data.title + '</h5><p class="card-text">' + data.overview + '</p></div><a href="#" class="btn btn-primary">See Details</a></div>')
    });
});
// for (let i = 0; i < 19547; i++) {
//     console.log(data[i].title)
// }