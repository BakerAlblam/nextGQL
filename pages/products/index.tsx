
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { GetStaticProps, NextPage } from 'next'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface Product {
    id: string; 
    name: string;
    description: string;
    featuredAsset: {
      source: string;
    }
  }
  
  interface Props {
    products: Product[]; 
  }

const Home: NextPage<Props> = ({products}) => {
    return <div className="">
      
    {products.length >0 && products.map((product) => (
       <div className="">
         <h3 key={product.id}> {product.name} {product.id} </h3>
         <h3> {product.description} </h3>
         <Link href={`/products/${product.id}`}>
         <Image src={product.featuredAsset.source} width={99} height={99} alt='desc' /></Link>

       </div>
    ))}
</div>
}

export default Home



 class VendureService {

    client = new ApolloClient({
      uri: "http://localhost:3001/shop-api",
      cache: new InMemoryCache()
    })
  
    async fetchProducts() {
      const { data } = await this.client.query({
        query: gql`
          query {
  products {
    items {
      name
      id
      description
      featuredAsset {
        source
      }
    }
  }
}
        `
      });
      return data;
    }
  
  }
  
  export const getStaticProps = async () => {
  
    const service = new VendureService();
  
    const data = await service.fetchProducts();
  
    return {
      props: {
        products: data.products.items
      }
    };
  
  };