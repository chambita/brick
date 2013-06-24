window.addEventListener('DOMComponentsLoaded', function() {
    var detail = document.querySelector('#detail');
    var deck = document.querySelector('x-deck');
    document.querySelector('ul').addEventListener('click', function(e) {
        detail.show();
        detail.querySelector('p').innerHTML = e.target.innerHTML + " details";
    });
    deck.addEventListener('click', function(e) {
        if (e.target.classList.contains('back')) {
            deck.querySelector('#home').show();
        }
    })
});