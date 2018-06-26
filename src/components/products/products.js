// @ vendors
import React from 'react';
import PropTypes from 'prop-types';

// @ copies
import copies from 'constants/copies';

// @ styles
import ProductStyles from './product.scss';

//@ components
import { Card } from 'react-md';

const ProductCard = ({ productsData }) => {
    const productCardData = productsData.map(product => {
        const getCategories = product.categories.join(', ');
        const getBrand = product.brand;
        const subTitle = `${getCategories} - ${getBrand}`;

        const productCard = (
            <Card
                key={product.id}
                className={ProductStyles['product-card-section']}
            >
                <h2 className={ProductStyles['product-card-section__title']}>{product.name}</h2>
                <span className={ProductStyles['product-card-section__subtitle']}>{subTitle}</span>

                <section className={ProductStyles['product-card-section__data']}>
                    <figure className={ProductStyles['product-card-section__data-figure']}>
                        <img
                            className={ProductStyles['product-card-section__data-figure-image']}
                            src={product.photo} alt={product.name}
                        />
                    </figure>
                    <div className={ProductStyles['product-card-section__data-details']}>
                        <span className={ProductStyles['product-card-section__data-details-description']}>
                            {product.description}
                        </span>

                        <div className={ProductStyles['product-card-section__data-details']}>
                            <span className={ProductStyles['product-card-section__data-details-header']}>{copies.stock}</span>
                            <span>{product.stock}</span>
                        </div>
                        <div>
                            <span className={ProductStyles['product-card-section__data-details-header']}>{copies.price}</span>
                            <span>{product.price}</span>
                        </div>
                    </div>
                </section>
            </Card>
        );

        return productCard
    });

    return productCardData;
};

ProductCard.propTypes = {
    productsData: PropTypes.array.isRequired
};

export default ProductCard;