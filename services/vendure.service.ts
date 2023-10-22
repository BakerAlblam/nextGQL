
import { ApolloClient, ApolloQueryResult, InMemoryCache, gql } from "@apollo/client"

export class VendureService {
    private __client;

    constructor() {
        this.__client = new ApolloClient({
            uri: "http://localhost:3001/shop-api",
        cache: new InMemoryCache(),
        })
    }

    public fetchProducts = async (): Promise<ApolloQueryResult<any>> => {
        const response = await this.__client.query({
            query: gql `
            {products{items{name, id, description, featuredAsset{source}}}}           `
        })
        
        return response
        
    }
}