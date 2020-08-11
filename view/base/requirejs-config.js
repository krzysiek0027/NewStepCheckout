var config = {
    'config': {
        'mixins': {
            'Magento_Checkout/js/view/shipping': {
                'Kw_NewStepCheckout/js/view/shipping-payment-mixin': true
            },
            'Magento_Checkout/js/view/payment': {
                'Kw_NewStepCheckout/js/view/shipping-payment-mixin': true
            }
        }
    }
}
