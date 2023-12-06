import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import CouponAdd from '../components/pages/ecommerce/coupons/coupon-add';
import CouponDetail from '../components/pages/ecommerce/coupons/coupon-detail';
import CouponList from '../components/pages/ecommerce/coupons/coupon-list';

import OrderList from '../components/pages/ecommerce/orders/order-list';
import OrderAdd from '../components/pages/ecommerce/orders/order-add';
import OrderDetail from '../components/pages/ecommerce/orders/order-detail';

import CustomerList from '../components/pages/ecommerce/customers-list';

import GeneralSetting from '../components/pages/ecommerce/settings/general';
import ProductsSetting from '../components/pages/ecommerce/settings/products';
import ShippingList from '../components/pages/ecommerce/settings/shipping/shipping-list';
import ShippingAdd from '../components/pages/ecommerce/settings/shipping/shipping-add';
import ShippingDetail from '../components/pages/ecommerce/settings/shipping/shipping-detail';
import PaymentList from '../components/pages/ecommerce/settings/payment/payment-list';
import PaymentDetail from '../components/pages/ecommerce/settings/payment/payment-detail';
import TaxList from '../components/pages/ecommerce/settings/tax/tax-list';
import TaxAdd from '../components/pages/ecommerce/settings/tax/tax-add';
import TaxDetail from '../components/pages/ecommerce/settings/tax/tax-detail';

import OrdersReport from '../components/pages/ecommerce/reports/orders-report';
import CustomersReport from '../components/pages/ecommerce/reports/customers-report';
import StockReport from '../components/pages/ecommerce/reports/stock-report';

export default function EcommerceRoutes () {
    return (
        <Switch>
            <Route exact path={ `${ process.env.PUBLIC_URL }/ecommerce` } render={ () => ( <Redirect to={ `${ process.env.PUBLIC_URL }/ecommerce/orders` } /> ) } />

            <Route exact path={ `${ process.env.PUBLIC_URL }/ecommerce/coupons` } component={ CouponList } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/ecommerce/coupons/create` } component={ CouponAdd } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/ecommerce/coupons/:id` } component={ CouponDetail } />

            <Route exact path={ `${ process.env.PUBLIC_URL }/ecommerce/customers` } component={ CustomerList } />

            <Route exact path={ `${ process.env.PUBLIC_URL }/ecommerce/orders` } component={ OrderList } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/ecommerce/orders/create` } component={ OrderAdd } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/ecommerce/orders/:id` } component={ OrderDetail } />

            <Route exact path={ `${ process.env.PUBLIC_URL }/ecommerce/reports/orders` } component={ OrdersReport } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/ecommerce/reports/customers` } component={ CustomersReport } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/ecommerce/reports/stock` } component={ StockReport } />

            <Route exact path={ `${ process.env.PUBLIC_URL }/ecommerce/settings` } component={ GeneralSetting } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/ecommerce/settings/products` } component={ ProductsSetting } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/ecommerce/settings/shipping` } component={ ShippingList } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/ecommerce/settings/shipping/create` } component={ ShippingAdd } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/ecommerce/settings/shipping/:id` } component={ ShippingDetail } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/ecommerce/settings/payment` } component={ PaymentList } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/ecommerce/settings/payment/:type` } component={ PaymentDetail } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/ecommerce/settings/tax` } component={ TaxList } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/ecommerce/settings/tax/create` } component={ TaxAdd } />
            <Route exact path={ `${ process.env.PUBLIC_URL }/ecommerce/settings/tax/:id` } component={ TaxDetail } />
        </Switch>
    )
}