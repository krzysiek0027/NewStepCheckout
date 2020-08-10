define(
    [
        'ko',
        'uiComponent',
        'underscore',
        'Magento_Checkout/js/model/step-navigator'
    ],
    function (
        ko,
        Component,
        _,
        stepNavigator
    ) {
        'use strict';

        return Component.extend({
            defaults: {
                template: 'Kw_NewStepCheckout/products-step'
            },

            isVisible: ko.observable(true),

            /**
             *
             * @returns {*}
             */
            initialize: function () {
                this._super();
                stepNavigator.registerStep(
                    'products_step',
                    null,
                    'Products Step',
                    this.isVisible,
                    _.bind(this.navigate, this),
                    5
                );

                return this;
            },

            navigate: function () {
                this.isVisible(true);
            },

            /**
             * @returns void
             */
            navigateToNextStep: function () {
                stepNavigator.next();
            }
        });
    }
);
