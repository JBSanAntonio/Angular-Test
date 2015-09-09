(function() {
	"use strict";
	var app = angular.module('controllerTest', []);

/*In your module, add a controller called CartController.*/	
/*Your controller will need An array of items.*/
  app.controller('CartController', function() 
  {
		this.items = [
			{
				item: 'Thing1',
				cost: 10.00
			},
			{
				item: 'Thing2',
				cost: 20.00
			}
		];

/*A newItem object with a default quantity of 1.*/
		this.newItem = {
			quantity: 1
		};

/*A function to add an item. This function should push newItem on to the items array and then reset newItem back to its initial state.*/
	this.addItem = function(itemForm) {
			this.items.push(this.newItem);
			this.newItem = {
				quantity: 1
		};

	};

	this.removeItem = function(index) {
		this.items.splice(index, 1);
	};

	this.getSubtotal = function() {
			var subtotal = 0;

			for(var i = 0; i < this.items.length; i++) {
				subtotal+= (this.items[i].cost * this.items[i].quantity);
			};

			return subtotal;
		};

		this.getSalesTax = function() {
			var salesTax = (this.getSubtotal() * 0.08125);

			return salesTax;
		}

		this.getShippingCost = function() {
			var shippingCost = 0;


			// Fee is $1.25 per item 

			for(var i = 0; i < this.items.length; i++) {
				shippingCost+= (this.items[i].quantity * 1.25);
			};

			return shippingCost;
		};

		this.getGrandTotal = function() {
			var grandTotal = this.getSubtotal() + this.getSalesTax() + this.getShippingCost();

			return grandTotal;
		};

	});

	    /*    angular.forEach(this.item, function(item) {
        	})*/

})();





   


