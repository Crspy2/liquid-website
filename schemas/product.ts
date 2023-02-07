export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'image',
      },
      { 
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      { 
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 20,
        }
      },
      { 
        name: 'priceDay',
        title: 'Day Price',
        type: 'number',
      },
      { 
        name: 'priceMonth',
        title: 'Month Price',
        type: 'number',
      },
      {
        name: 'dataSellStore',
        title: 'SellApp Store ID',
        type: 'string'
      },
      {
        name: 'dataSellProduct',
        title: 'SellApp Product ID',
        type: 'string'
      }
    ]
  }
