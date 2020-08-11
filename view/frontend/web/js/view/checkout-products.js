define(
    [
        'ko',
        'uiComponent',
        'mage/storage',
        'Magento_Catalog/js/price-utils',
        'Magento_Checkout/js/model/quote'
    ],
    function (ko, Component, storage, priceUtils, quote) {
        "use strict";


        return Component.extend({
            defaults: {
                template: 'Kw_NewStepCheckout/checkout-products',
                products: ko.observableArray([]),
                uenc: btoa(window.location.href).replace('+/=', '-_,'),
                formKey: window.checkoutConfig.formKey
            },

            initialize: function () {
                this._super();
                storage.get('rest/V1/checkout/products/').done(function (result) {
                    console.log(result);
                    this.products(result);
                }.bind(this))
            },

            getUrl: function (productId, uenc) {
                return document.location.protocol + "//" + document.location.host + "/checkout/cart/add/uenc/" + uenc + "/product/" + productId
            },

            getFormattedPrice: function (price) {
                return priceUtils.formatPrice(price, quote.getPriceFormat());
            }
        });
    }
);
