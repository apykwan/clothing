import './collection-item.styles.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => (
    <div className='collection-item'>
        <div className="image" style={{ backgroundImage: `url(${imageUrl})`}} />

        <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">${Number(price).toFixed(2)}</span>
        </div>
    </div>
);

export default CollectionItem;