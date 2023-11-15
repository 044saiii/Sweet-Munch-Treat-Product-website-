$(document).ready(function() {
 $('#addToCartForm').on('submit', function(e) {
    e.preventDefault();
    addToCart();
 });
});

function addToCart() {
 var productId = $('#addToCartForm').find('input[name="productId"]').val();
 var productName = $('#addToCartForm').find('input[name="productName"]').val();
 