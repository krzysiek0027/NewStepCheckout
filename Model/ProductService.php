<?php


namespace Kw\NewStepCheckout\Model;


use Magento\Catalog\Api\CategoryRepositoryInterface;
use Magento\Catalog\Api\Data\ProductInterface;


class ProductService
{
    protected $categoryRepository;


    public function __construct(
        CategoryRepositoryInterface $categoryRepository
    ) {
        $this->categoryRepository = $categoryRepository;
    }

    /**
     * @return ProductInterface[]
     * @throws \Magento\Framework\Exception\NoSuchEntityException
     */
    public function getProducts()
    {
        $categoryId = 41;
        $category = null;
        $productList = [];

        $category = $this->categoryRepository->get($categoryId);

        foreach ( $category->getProductCollection()->addAttributeToSelect('*') as $product) {
            array_push($productList, $product);
        }

        return $productList;
    }
}
