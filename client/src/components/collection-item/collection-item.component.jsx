import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className='collection-item'>
            <div className="image" style={{ backgroundImage: `url(${imageUrl})`}} />

            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">${Number(price).toFixed(2)}</span>
            </div>
            <CustomButton inverted onClick={() => addItem(item)}>
                ADD TO CART
            </CustomButton>
        </div>
    );
};

const mapDispatchToProp = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProp)(CollectionItem);