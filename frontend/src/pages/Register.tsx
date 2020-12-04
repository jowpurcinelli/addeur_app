import React from 'react';

interface Input {
  name: String
  contact: Number


}
interface ProductDetails {
  category: String
  producttype: String
  productweight: String
  productsize: {
    height: Number
    width: Number
    depth: Number
  }
  packagestyle: String
  productvalue: String

}