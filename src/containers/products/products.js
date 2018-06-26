// @ vendors
import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

// @ constants
import copies from 'constants/copies';

// @ actions
import getProductListData from 'state/actions/products';

// @ components
import PanelCategories from 'components/sidePanel/panelCategories';
import ProductCard from 'components/products/products';

// @ styles
import ProductsStyles from './products.scss';

class ProductList extends Component {
    componentDidMount() {
        const { getProductListData } = this.props;
        getProductListData();
    }

    filterProducts(productsState, category) {
        let productList = productsState;

        if (category !== copies.categorieAll) {
            productList = productsState.filter(products => {
                return products.categories.find(item => {
                    const lowerCaseCategory = item.toLowerCase();
                    return lowerCaseCategory === category;
                });
            });
        }

        return productList;
    }

    buildTotalMessage(messageParams) {
        const { categoryValue, showingProducts, hiddingProducts } = messageParams;
        let message = '';

        if (categoryValue === copies.categorieAll) {
            message = (
                <span>Showing <strong>{showingProducts}</strong></span>
            );
        } else {
            message = (
                <span>Showing <strong>{showingProducts}</strong> products - Hidden:<strong>{hiddingProducts}</strong></span>
            );
        }

        return message;
    }

    render() {
        const { match: { params }, products } = this.props;

        const productList = products.get('productList').toJS();
        const productsTotal = productList.length;
        const category = params.category;
        const categoryValue = !!category ? category : copies.categorieAll;
        const productsFilter = this.filterProducts(productList, categoryValue);
        const productFilterTotal = productsFilter.length;
        const hiddingProducts = productsTotal - productFilterTotal;
        const showingProducts = productsTotal - hiddingProducts;

        const messageParams = {
            categoryValue,
            showingProducts,
            hiddingProducts
        };

        const productsTotalMessage = this.buildTotalMessage(messageParams);
        const producsData = productsFilter;

        return (
            <section className={ProductsStyles['products-section']}>
                <div>
                    <PanelCategories category={categoryValue} />
                    <section className={ProductsStyles['products-section__products-list']}>
                        <p className={ProductsStyles['products-section__products-list-title']}>{productsTotalMessage}</p>
                        <ProductCard productsData={producsData} />
                    </section>
                </div>
            </section>
        )
    }
}

ProductList.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.object
    }).isRequired,
    products: PropTypes.object.isRequired,
    getProductListData: PropTypes.func.isRequired
};


const mapStateToProps = state => ({
    products: state.productListState
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            getProductListData
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
