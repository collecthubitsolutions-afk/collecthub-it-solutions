import React from 'react';
import { substores } from '../constants';
import styles from '../style';

const SubStoreCard = ({ substore }) => {
  const { name, description, category, rating, productsCount, image, featured } = substore;

  return (
    <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-lightGray relative">
      {featured && (
        <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
          Featured
        </div>
      )}

      {/* Store Image */}
      <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-primary">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Store Info */}
      <div className="text-center">
        <h3 className="font-bold text-[17px] text-darkGray mb-2">{name}</h3>
        <p className="text-[13px] text-primary font-medium mb-2">{category}</p>
        <p className="text-gray-500 text-[13px] mb-4">{description}</p>

        {/* Rating and Products Count */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="flex items-center gap-1">
            <span className="text-primary text-[14px]">★</span>
            <span className="text-[13px] font-semibold text-darkGray">{rating}</span>
          </div>
          <div className="text-[13px] text-gray-500">
            {productsCount} Products
          </div>
        </div>

        {/* Visit Store Button */}
        <button
          disabled
          className="w-full bg-gray-300 text-gray-500 py-2 rounded-lg font-semibold text-[14px] cursor-not-allowed"
        >
          Coming Soon
        </button>
      </div>
    </div>
  );
};

const SubStores = () => {
  const featuredSubstores = substores.filter(store => store.featured);

  return (
    <section id="substores" className={`${styles.paddingY} ${styles.flexCenter} bg-lightGray`}>
      <div className={`${styles.boxWidth}`}>
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-darkGray mb-3">
            Explore Our <span className="text-gradient">Substores</span>
          </h2>
          <p className="text-gray-500 text-[15px] max-w-2xl mx-auto">
            Shop from our curated collection of trusted sellers and brands
          </p>
        </div>

        {/* Substores Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featuredSubstores.map((substore) => (
            <SubStoreCard key={substore.id} substore={substore} />
          ))}
        </div>

        {/* View All Substores Button */}
        <div className="flex justify-center mt-10">
          <div className='relative inline-block'>
            <button
              disabled
              className="bg-gray-300 text-gray-500 px-6 py-3 rounded-lg font-semibold text-[15px] cursor-not-allowed shadow-md"
            >
              View All Substores
            </button>
            <span className='absolute -top-2 -right-2 bg-primary text-white text-[11px] px-2 py-0.5 rounded-full font-semibold'>
              Coming Soon
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubStores;
